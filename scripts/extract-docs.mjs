#!/usr/bin/env node
/**
 * This script extracts component documentation from the Ant Design repository
 * and saves it to a local data directory for use by the MCP server.
 *
 * Usage:
 *   node extract-docs.mjs [path/to/ant-design]
 *
 * If path is not provided, it defaults to ./ant-design
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Get the directory of the current script
const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../data");

// ==================================
// Utility functions
// ==================================

// Convert snake-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

// Remove YAML frontmatter from markdown
const removeFrontmatter = (content) => {
  return content.replace(/^---\n([\s\S]*?)\n---\n/, "");
};

// Extract API section from markdown
const extractApiSection = (markdown) => {
  // Find the API section start
  const apiIndex = markdown.indexOf("\n## API\n");

  if (apiIndex !== -1) {
    // Find the next heading at the same level (starts with ## but not ###)
    const startPos = apiIndex + 1; // Skip the newline before ## API
    let endPos = markdown.length;

    // Find the next ## heading (but not ###+)
    const nextHeadingMatch = markdown.slice(startPos).match(/\n## [^#]/);
    if (nextHeadingMatch) {
      endPos = startPos + nextHeadingMatch.index;
    }

    // Extract the full API section
    return markdown.slice(startPos, endPos).trim();
  }

  return null;
};

// Extract examples with descriptions from markdown content
const extractExamples = (markdown) => {
  // Look for code snippets that reference demo files with descriptions
  const codeRefs = [
    ...markdown.matchAll(/<code src="\.\/demo\/([^"]+)\.tsx"(?:\s+[^>]*)?>(.*?)<\/code>/g),
  ];

  if (codeRefs && codeRefs.length > 0) {
    return codeRefs
      .filter((match) => !match[1].startsWith("debug-") && !match[1].startsWith("_"))
      .map((match) => ({
        name: match[1],
        description: match[2]?.trim() || match[1], // Use example name if no description
      }));
  }

  return [];
};

// ==================================
// Main extraction functions
// ==================================

// Process a component's documentation and examples
async function processComponent(componentsPath, dirName) {
  const componentPath = join(componentsPath, dirName);
  const indexMdPath = join(componentPath, "index.en-US.md");
  const demoPath = join(componentPath, "demo");

  if (!existsSync(indexMdPath)) {
    console.log(`⚠️ Skipping ${dirName} - no documentation found`);
    return null;
  }

  // Initialize component data
  const componentName = toPascalCase(dirName);
  console.log(`📝 Processing ${componentName}...`);

  const componentData = {
    name: componentName,
    dirName: dirName,
    documentation: null,
    apiSection: null,
    examples: {},
  };

  try {
    // Read and parse documentation
    const docContent = await readFile(indexMdPath, "utf-8");
    componentData.documentation = removeFrontmatter(docContent);
    componentData.apiSection = extractApiSection(componentData.documentation)?.replace(
      "Common props ref：[Common props](/docs/react/common-props)\n",
      "",
    );

    // Extract examples with descriptions from documentation
    componentData.examplesInfo = extractExamples(componentData.documentation);

    // Read example files from the demo directory
    if (existsSync(demoPath)) {
      // Get all example files from the directory
      const demoFiles = await readdir(demoPath, { withFileTypes: true });
      const exampleFiles = demoFiles.filter(
        (file) =>
          !file.isDirectory() &&
          (file.name.endsWith(".tsx") || file.name.endsWith(".jsx")) &&
          !file.name.startsWith("_") &&
          !file.name.startsWith("debug-"),
      );

      // Process each example file
      for (const exampleFile of exampleFiles) {
        const exampleName = exampleFile.name.replace(/\.(tsx|jsx)$/, "");
        const examplePath = join(demoPath, exampleFile.name);

        try {
          componentData.examples[exampleName] = await readFile(examplePath, "utf-8");
        } catch (error) {
          console.error(`  ❌ Error reading example ${exampleName}:`, error.message);
        }
      }

      console.log(`  ✓ Found ${Object.keys(componentData.examples).length} examples`);
    } else {
      console.log(`  ℹ️ No examples directory for ${componentName}`);
    }

    return componentData;
  } catch (error) {
    console.error(`  ❌ Error processing ${componentName}:`, error.message);
    return null;
  }
}

// Main function to process all components and export data
async function extractAllData(antdRepoPath) {
  // Ensure the data directory exists
  await mkdir(dataDir, { recursive: true });

  console.log(`🔍 Extracting documentation from ${antdRepoPath}...`);
  const componentsPath = join(antdRepoPath, "components");

  if (!existsSync(componentsPath)) {
    console.error(`❌ Error: ${antdRepoPath} does not appear to be an Ant Design repository.`);
    console.error("The 'components' directory was not found.");
    process.exit(1);
  }

  // Read all component directories
  const entries = await readdir(componentsPath, { withFileTypes: true });
  const componentDirs = entries.filter(
    (entry) =>
      entry.isDirectory() &&
      !entry.name.startsWith(".") &&
      !entry.name.startsWith("_") &&
      entry.name !== "locale" &&
      entry.name !== "style" &&
      entry.name !== "version",
  );

  console.log(`📊 Found ${componentDirs.length} potential components`);

  // Process each component
  const components = {};
  let processedCount = 0;

  for (const entry of componentDirs) {
    const componentData = await processComponent(componentsPath, entry.name);
    if (componentData) {
      components[componentData.name] = componentData;
      processedCount++;
    }
  }

  console.log(`✅ Successfully processed ${processedCount} of ${componentDirs.length} components`);

  // Save the data
  const metaData = {
    generatedAt: new Date().toISOString(),
    componentCount: processedCount,
    version: "1.0.0",
  };

  // Write component index (just names and dirNames)
  const componentsIndex = Object.values(components).map((c) => ({
    name: c.name,
    dirName: c.dirName,
  }));

  await writeFile(join(dataDir, "components-index.json"), JSON.stringify(componentsIndex, null, 2));
  console.log(`💾 Saved components index to components-index.json`);

  // Write metadata
  await writeFile(join(dataDir, "metadata.json"), JSON.stringify(metaData, null, 2));
  console.log(`💾 Saved metadata to metadata.json`);

  // Create components directory
  const componentsDataDir = join(dataDir, "components");
  await mkdir(componentsDataDir, { recursive: true });

  // Write individual component files
  for (const componentData of Object.values(components)) {
    // Create a directory for the component
    const componentDir = join(componentsDataDir, componentData.dirName);
    await mkdir(componentDir, { recursive: true });

    // Write documentation
    await writeFile(join(componentDir, "docs.md"), componentData.documentation);

    // Write API section if available
    if (componentData.apiSection) {
      await writeFile(join(componentDir, "api.md"), componentData.apiSection);
    }

    // Write examples
    if (Object.keys(componentData.examples).length > 0) {
      const examplesDir = join(componentDir, "examples");
      await mkdir(examplesDir, { recursive: true });

      // Create a markdown file with example descriptions
      if (componentData.examplesInfo && componentData.examplesInfo.length > 0) {
        let examplesMarkdown = "## Examples\n\n";

        componentData.examplesInfo.forEach((example) => {
          examplesMarkdown += `- **${example.name}**: ${example.description}\n`;
        });

        await writeFile(join(componentDir, "examples.md"), examplesMarkdown);
      }

      for (const [exampleName, exampleCode] of Object.entries(componentData.examples)) {
        // Determine if it's TSX or JSX based on content
        const extension = exampleCode.includes("React.FC") ? ".tsx" : ".jsx";
        await writeFile(join(examplesDir, `${exampleName}${extension}`), exampleCode);
      }
    }
  }

  console.log(`🎉 Documentation extraction complete! Data saved to ${dataDir}`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const antdRepoArg = args[0];

// Default to ./ant-design if no argument provided
const antdRepoPath = resolve(antdRepoArg ?? "../ant-design");

// Run the extraction
extractAllData(antdRepoPath).catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
