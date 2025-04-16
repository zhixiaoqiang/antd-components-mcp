#!/usr/bin/env node
import { parseMDMatter } from "../utils/matter-parse";

/**
 * 此脚本从 Ant Design 仓库中提取组件相关文档，
 * 并将其保存到本地数据目录中供 MCP 服务器使用。
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  DOC_FILE_NAME,
  EXAMPLE_FILE_NAME,
  EXTRACT_COMPONENTS_CHANGELOG_PATH,
  EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH,
  EXTRACTED_COMPONENTS_DATA_PATH,
  EXTRACTED_COMPONENTS_LIST_PATH,
  EXTRACTED_DATA_DIR,
  EXTRACTED_METADATA_PATH,
} from "../constants/path";
import {
  extractSection,
  removeFrontmatter,
  removeSection,
  toPascalCase,
} from "../utils/md-extract";
import {  writeExtractedInfoToReadme, writeJsonFile } from "../utils/write";

/**
 * 提取的组件示例信息
 */
export interface ExampleInfoList {
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
 * 提取的组件数据
 */
export interface ComponentData {
  /** 组件名称 */
  name: string;
  /** 组件目录 */
  dirName: string;
  /** 组件文档 */
  documentation: string;
  /** 组件可用版本 */
  validVersion?: string;
  /** 组件描述 */
  description?: string;
  /** 何时使用当前组件 */
  whenToUse?: string;
  // 代码示例信息
  exampleInfoList?: ExampleInfoList[];
}

/**
 * 提取的组件索引
 */
export type ComponentIndex = (Pick<
  ComponentData,
  "name" | "dirName" | "description" | "whenToUse"
> & {
  /** 组件可用版本 */
  validVersion?: string;
})[];

/**
 * 提取结果元数据
 */
export interface MetaDataResult {
  /** 提取时间 */
  extractedAt: string;
  /** 提取的组件数量 */
  extractedCount: number;
  /** 组件总数 */
  componentCount: number;
  /** 数据的 antd 版本 */
  antdVersion: string;
}

/** 从 Markdown 内容中提取示例及其描述 */
const extractExamples = (markdown: string) => {
  // 获取文档中的代码示例及其描述
  const codeRefs = [
    ...markdown.matchAll(
      /<code src="\.\/demo\/([^"]+)\.tsx"(?:\s+[^>]*)?>(.*?)<\/code>/g
    ),
  ];

  if (codeRefs && codeRefs.length > 0) {
    return codeRefs
      .filter(
        (match) => !match[1].startsWith("debug-") && !match[1].startsWith("_")
      )
      .map(
        (match): ExampleInfoList => ({
          name: match[1],
          title: match[2]?.trim() || match[1], // 如果没有描述标题，则使用示例名称
          description: "",
          code: "",
        })
      );
  }

  return [];
};

// 清除掉不需要的内容，减少上下文
const DOC_CLEANUP_REGEX =
  / {#when-to-use}|\n通用属性参考：\[通用属性\]\(\/docs\/react\/common-props\)\n|/g;
const DOC_CLEANUP_EMPTY_LINE = /\n+/g;

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
    console.log(`⚠️ 跳过 ${dirName} - 官网不再展示当前组件`);
    return null;
  }

  // 初始化组件数据
  const componentName = toPascalCase(dirName);
  console.log(`📝 正在处理 ${componentName}...`);

  const componentData: ComponentData = {
    name: componentName,
    dirName: dirName,
    documentation: "",
  };

  try {
    // 读取并解析文档
    const docContent = await readFile(indexMdPath, "utf-8");
    const mdMatter = await parseMDMatter(indexMdPath);
    componentData.validVersion = mdMatter?.tag
      ? `自 ${mdMatter?.tag} 起支持`
      : undefined;
    componentData.description = mdMatter?.description;

    const initHandleDoc = (doc: string) => {
      const handleList = [
        removeFrontmatter,
        (doc: string) =>
          doc
            .replace(DOC_CLEANUP_REGEX, ""),
        (doc: string) => removeSection(doc, "## Design Token"),
        (doc: string) => removeSection(doc, "## 主题变量"),
        (doc: string) => removeSection(doc, "## Semantic DOM"),
      ];
      return handleList.reduce((acc, handle) => handle(acc), doc);
    };

    const handleDocResult = initHandleDoc(docContent);

    componentData.whenToUse = extractSection(handleDocResult, "## 何时使用");

    // 从文档中提取示例及其描述
    componentData.exampleInfoList = extractExamples(handleDocResult);

    componentData.documentation = removeSection(
      handleDocResult,
      "\n## 代码演示"
    ).replace(DOC_CLEANUP_EMPTY_LINE, "\n");

    // 从演示目录中读取示例文件
    if (existsSync(demoPath) && componentData.exampleInfoList) {
      console.log(`  🔍 找到 ${componentData.exampleInfoList.length} 个示例`);
      // 处理每个示例文件
      for (const exampleInfo of componentData.exampleInfoList) {
        const examplePath = join(demoPath, exampleInfo.name);

        try {
          exampleInfo.description = await readFile(
            `${examplePath}.md`,
            "utf-8"
          ).then((content) =>
            removeSection(content, "\n## en-US")
            .replace(/## zh-CN/g, "")
              .replace(DOC_CLEANUP_EMPTY_LINE, "\n")
          );
        } catch (error) {}

        try {
          exampleInfo.code = (
            await readFile(`${examplePath}.tsx`, "utf-8")
          ).replace(DOC_CLEANUP_EMPTY_LINE, "\n");
        } catch (error) {
          console.error(
            `  ❌ 读取示例 ${exampleInfo.name} 时出错:`,
            (error as Error).message
          );
        }
      }

      console.log(`  ✅ 已处理 ${componentData.exampleInfoList.length} 个示例`);
    }

    return componentData;
  } catch (error) {
    console.error(
      `  ❌ 处理 ${componentName} 时出错:`,
      (error as Error).message
    );
    return null;
  }
}

/** 处理所有组件并导出数据的主函数 */
async function extractAllData(antdRepoPath: string) {
  // 确保数据目录存在
  await mkdir(EXTRACTED_DATA_DIR, { recursive: true });
  /** 待提取数据的组件目录 */
  const componentsPath = join(antdRepoPath, "components");
  /** 待提取数据的组件库 packageJson */
  const antDPackageJsonPath = join(antdRepoPath, "package.json");
  /** 待提取数据的组件库 changelog */
  const antDChangelogPath = join(
    antdRepoPath,
    ".dumi",
    "preset",
    EXTRACT_COMPONENTS_CHANGELOG_PATH
  );

  console.log(`🔍 从 ${componentsPath} 抓取文档信息`);

  if (!existsSync(componentsPath)) {
    console.error(
      `❌ 错误: 未找到 ${componentsPath} 目录，请传入正确的 Ant Design 目录。`
    );
    process.exit(1);
  }

  if (!existsSync(antDPackageJsonPath)) {
    console.error(
      `❌ 提取 changelog 错误: 未找到 ${antDPackageJsonPath} 文件，请进入正确的 Ant Design 目录并执行 npm run lint:changelog 脚本`
    );
  } else {
    try {
      await writeJsonFile(
        EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH,
        await readFile(antDChangelogPath, 'utf-8').then((content) => JSON.parse(content)
        )
      );
    } catch (error) {
      console.error(
        `  ❌ 写入 changelog 错误:`,
        (error as Error).message,
        "使用内置的更新日志"
      );
    }
  }

  /** 获取所有组件目录 */
  const componentEntries = await readdir(componentsPath, {
    withFileTypes: true,
  });
  /** 有效的组件目录 */
  const componentDirs = componentEntries.filter(
    (entry) =>
      entry.isDirectory() &&
      !entry.name.startsWith(".") &&
      !entry.name.startsWith("_") &&
      entry.name !== "locale" &&
      entry.name !== "style" &&
      entry.name !== "version"
  );

  console.log(`🙈 共找到 ${componentDirs.length} 个潜在组件\n`);

  /** 提取的组件数据集合 */
  const componentDataMap: Record<string, ComponentData> = {};
  let processedCount = 0;

  for (const entry of componentDirs) {
    const componentData = await processComponent(componentsPath, entry.name);
    if (componentData) {
      componentDataMap[componentData.name] = componentData;
      processedCount++;
    }
  }

  console.log(
    `✅ 成功处理了 ${processedCount} 个组件，共 ${componentDirs.length} 个`
  );

  /** 提取数据的操作结果 */
  const metaDataResult: MetaDataResult = {
    extractedAt: new Date().toISOString(),
    extractedCount: processedCount,
    componentCount: componentDirs.length,
    antdVersion:
      (await readFile(antDPackageJsonPath, 'utf-8')
        .then((content) => JSON.parse(content).version)
        .catch(() => undefined)) || "5.24.6",
  };

  /** 组件列表索引 */
  const componentsIndex: ComponentIndex = Object.values(componentDataMap).map(
    ({ name, dirName, validVersion, description, whenToUse }) => ({
      name,
      dirName,
      validVersion,
      description,
      whenToUse,
    })
  );

  await writeJsonFile(EXTRACTED_COMPONENTS_LIST_PATH, componentsIndex);

  await writeJsonFile(EXTRACTED_METADATA_PATH, metaDataResult);

  await writeExtractedInfoToReadme(metaDataResult)

  // 创建组件目录
  await mkdir(EXTRACTED_COMPONENTS_DATA_PATH, { recursive: true });

  // 将组件数据写入对应目录
  for (const componentData of Object.values(componentDataMap)) {
    /** 组件内容目录 */
    const componentDir = join(
      EXTRACTED_COMPONENTS_DATA_PATH,
      componentData.dirName
    );
    await mkdir(componentDir, { recursive: true });

    // 写入文档
    await writeFile(
      join(componentDir, DOC_FILE_NAME),
      componentData.documentation
    );

    // 写入示例
    // 创建带有示例描述的markdown文件
    let examplesMarkdown = `## ${componentData.name} 组件示例\n`;

    componentData.exampleInfoList?.forEach((example) => {
      examplesMarkdown += `### ${example.title}${example.description}
\`\`\`tsx
${example.code}\`\`\`
`;
    });

    await writeFile(join(componentDir, EXAMPLE_FILE_NAME), examplesMarkdown);
  }

  console.log(`🎉 文档提取完成！数据已保存到 ${EXTRACTED_DATA_DIR}`);
}

export default extractAllData;
