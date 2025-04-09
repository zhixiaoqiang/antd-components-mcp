#!/usr/bin/env node
import { parseMDMatter } from './../utils/matter-parse';

/**
 * 此脚本从 Ant Design 仓库中提取组件文档，
 * 并将其保存到本地数据目录中供 MCP 服务器使用。
 *
 * 使用方法:
 *   node extract-docs.mjs [path/to/ant-design]
 * 
 *   如果未提供路径参数，默认使用 ./ant-design
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import { EXTRACT_COMPONENTS_DATA_DIR, EXTRACT_COMPONENTS_LIST_PATH, EXTRACT_DATA_DIR, EXTRACT_METADATA_PATH } from "../constants/path";
import { extractSection, removeFrontmatter, toPascalCase, writeJsonFile } from "./utils";

/**
 * 组件示例信息
 */
export interface ExamplesInfo {
  /** 例子名称 */
  name: string;
  /** 例子标题 */
  title: string;
  /** 例子描述 */
  description?: string;
  /** 例子代码 */
  code?: string;
}
/**
 * 组件数据
 */
export interface ComponentData {
  /** 组件名称 */
  name: string;
  /** 组件目录 */
  dirName: string;
  /** 组件文档 */
  documentation: string;
  /** 组件 API */
  apiSection?: string;
  /** 组件可用版本 */
  version?: string;
  /** 组件描述 */
  description?: string;
  /** 何时使用当前组件 */
  whenToUse?: string;
  // 代码示例信息
  examplesInfo?: ExamplesInfo[];
}

// 从 Markdown 内容中提取示例及其描述
const extractExamples = (markdown: string) => {
  // 查找引用演示文件的代码片段及其描述
  const codeRefs = [
    ...markdown.matchAll(/<code src="\.\/demo\/([^"]+)\.tsx"(?:\s+[^>]*)?>(.*?)<\/code>/g),
  ];

  if (codeRefs && codeRefs.length > 0) {
    return codeRefs
      .filter((match) => !match[1].startsWith("debug-") && !match[1].startsWith("_"))
      .map((match): ExamplesInfo => ({
        name: match[1],
        title: match[2]?.trim() || match[1], // 如果没有描述标题，则使用示例名称
        description: "",
        code: "",
      }));
  }

  return [];
};

/**
 * 处理组件数据
 * 
 * @param componentsPath 
 * @param dirName 
 * @returns 
 */
async function processComponent(componentsPath: string, dirName: string) {
  const componentPath = join(componentsPath, dirName);
  const indexMdPath = join(componentPath, "index.zh-CN.md");
  const demoPath = join(componentPath, "demo");

  if (!existsSync(indexMdPath)) {
    console.log(`⚠️ 跳过 ${dirName} - 未找到文档`);
    return null;
  }

  // 初始化组件数据
  const componentName = toPascalCase(dirName);
  console.log(`📝 正在处理 ${componentName}...`);


  const componentData: ComponentData = {
    name: componentName,
    dirName: dirName,
    documentation: ''
  };

  try {
    // 读取并解析文档
    const docContent = await readFile(indexMdPath, "utf-8");
    const mdMatter = await parseMDMatter(indexMdPath)
    componentData.version = mdMatter?.tag;
    componentData.description = mdMatter?.description;
    componentData.documentation = removeFrontmatter(docContent);

    componentData.whenToUse = extractSection(componentData.documentation, "\n## 何时使用");
    componentData.apiSection = extractSection(componentData.documentation, "\n## API\n");

    // 从文档中提取示例及其描述
    componentData.examplesInfo = extractExamples(componentData.documentation);

    // 从演示目录中读取示例文件
    if (existsSync(demoPath) && componentData.examplesInfo) {
      // 处理每个示例文件
      for (const exampleInfo of componentData.examplesInfo) {
        const examplePath = join(demoPath, exampleInfo.name);

        try {
          exampleInfo.description = await readFile(`${examplePath}.md`, "utf-8")
          .then((content) => content.replace(/#/g, '##'));
        } catch (error) {
          
        }

        try {
          exampleInfo.code = await readFile(`${examplePath}.tsx`, "utf-8");
        } catch (error) {
          console.error(`  ❌ 读取示例 ${exampleInfo.name} 时出错:`, (error as Error).message);
        }
      }

      console.log(`  ✓ 找到 ${componentData.examplesInfo.length} 个示例`);
    }

    return componentData;
  } catch (error) {
    console.error(`  ❌ 处理 ${componentName} 时出错:`, (error as Error).message);
    return null;
  }
}

// 处理所有组件并导出数据的主函数
async function extractAllData(antdRepoPath: string) {
  // 确保数据目录存在，如果不存在则创建它及其所有目录
  await mkdir(EXTRACT_DATA_DIR, { recursive: true });

  const componentsPath = join(antdRepoPath, "components");
  console.log(`🔍 从 ${componentsPath} 抓取文档信息`);

  if (!existsSync(componentsPath)) {
    console.error(`❌ 错误: 未找到 ${componentsPath} 目录。`);
    process.exit(1);
  }

  // 读取所有组件目录
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

  console.log(`📊 找到 ${componentDirs.length} 个潜在组件`);

  // 处理每个组件
  const components: Record<string, ComponentData> = {};
  let processedCount = 0;

  for (const entry of componentDirs) {
    const componentData = await processComponent(componentsPath, entry.name);
    if (componentData) {
      components[componentData.name] = componentData;
      processedCount++;
    }
  }

  console.log(`✅ 成功处理了 ${processedCount} 个组件，共 ${componentDirs.length} 个`);

  // 保存数据
  const metaData = {
    generatedAt: new Date().toISOString(),
    extractComponentCount: processedCount,
    componentCount: componentDirs.length,
    version: process.env.VERSION || "1.0.0",
  };

  // 写入组件索引（仅包含名称和目录名）
  const componentsIndex = Object.values(components).map(({ name, dirName, version, description, whenToUse }) => ({
    name,
    dirName,
    validVersion: version ? `自 ${version} 起支持` : undefined,
    description,
    whenToUse,
  }));

  await writeJsonFile(EXTRACT_COMPONENTS_LIST_PATH, componentsIndex);
  console.log(`💾 已保存组件索引列表到 ${EXTRACT_COMPONENTS_LIST_PATH}`);

  await writeJsonFile(EXTRACT_METADATA_PATH, metaData);
  console.log(`💾 已保存提取结果元数据到 ${EXTRACT_METADATA_PATH}`);

  // 创建组件目录
  await mkdir(EXTRACT_COMPONENTS_DATA_DIR, { recursive: true });

  // 写入单个组件文件
  for (const componentData of Object.values(components)) {
    // 为组件创建目录
    const componentDir = join(EXTRACT_COMPONENTS_DATA_DIR, componentData.dirName);
    await mkdir(componentDir, { recursive: true });

    // 写入文档
    await writeFile(join(componentDir, "docs.md"), componentData.documentation);

    // 如果有API部分，则写入
    if (componentData.apiSection) {
      await writeFile(join(componentDir, "api.md"), componentData.apiSection);
    }

    // 写入示例
    // 创建带有示例描述的markdown文件
    let examplesMarkdown = `## ${componentData.name} 组件示例\n\n`;

    componentData.examplesInfo?.forEach((example) => {
      examplesMarkdown += `### ${example.title}

${example.description}
\`\`\`typescript
${example.code}
\`\`\`\n
`
    });

    await writeFile(join(componentDir, "examples.md"), examplesMarkdown);
  }

  console.log(`🎉 文档提取完成！数据已保存到 ${EXTRACT_DATA_DIR}`);
}

// 解析命令行参数
const args = process.argv.slice(2);
const antdRepoArg = args[0];

// 如果未提供参数，默认使用 ./ant-design
const antdRepoPath = resolve(antdRepoArg ?? "./ant-design");

// 运行提取过程
extractAllData(antdRepoPath).catch((error) => {
  console.error("❌ 致命错误:", error);
  process.exit(1);
});
