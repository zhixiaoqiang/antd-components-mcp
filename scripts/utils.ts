import { writeFile } from "node:fs/promises";

// 将短横线分隔的字符串转换为帕斯卡命名法(PascalCase)
export const toPascalCase = (str: string) => {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

// 移除 markdown 中的 YAML frontmatter
export const removeFrontmatter = (content: string) => {
  return content.replace(/^---\n([\s\S]*?)\n---\n/, "");
};

export const writeJsonFile = async (filePath: string, data: any) => {
  return  writeFile(filePath, JSON.stringify(data, null, 2));
}