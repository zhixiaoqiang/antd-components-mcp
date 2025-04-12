/** 
 * 将短横线分隔的字符串转换为帕斯卡命名法(PascalCase)
 * 
 * @example
 * ```ts
 * const result = toPascalCase("ant-design-components");
 * console.log(result); // "AntDesignComponents"
 * ```
 *  */
export const toPascalCase = (str: string) => {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

/** 
 * 移除 markdown 中的 YAML frontmatter
 * 
 * @example
 * ```ts
 * const content = `---
 * title: 标题
 * description: 描述
 * ---
 *
 * Markdown 内容
 * `
 *
 * const result = removeFrontmatter(content);
 * console.log(result); // "Markdown 内容"
 * ```
 *  */
export const removeFrontmatter = (content: string) => {
  return content.replace(/^---\n([\s\S]*?)\n---\n+/, "");
};

/** 
 * 从 Markdown 中提取指定部分
 * @param markdown 要提取的 Markdown 内容
 * @param startMatch 要提取的部分的起始标记
 * @param endMatch 要提取的部分的结束标记 默认是下一个 `/\n## [^#]/`
 * @returns 提取的部分内容，如果未找到则返回 undefined
 */
export const extractSection = (markdown: string, startMatch: string, endMatch = /\n## [^#]/) => {
  // 查找指定部分的起始位置
  const startIndex = markdown.indexOf(startMatch);

  if (startIndex !== -1) {
    let startPos = startIndex + 1
    let endPos = markdown.length;

    // 查找下一个 ## 标题（但不是 ###+ 标题）
    const nextHeadingMatch = markdown.slice(startPos).match(endMatch);

    if (nextHeadingMatch?.index && nextHeadingMatch?.index >= 0) {
      endPos = startPos + nextHeadingMatch.index;
    }

    // 提取完整的指定部分
    return markdown.slice(startIndex, endPos).trim();
  }

  return undefined;
};

/**
 * 移除指定部分
 * @param markdown 要提取的 Markdown 内容
 * @param startMatch 要提取的部分的起始标记
 * @param endMatch 要提取的部分的结束标记 默认是下一个 `/\n## [^#]/`
 * @returns 移除后的内容
 */
export const removeSection = (markdown: string, startMatch: string, endMatch = /\n## [^#]/) => {
  const section = extractSection(markdown, startMatch, endMatch);
  
  if (section) {
    return markdown.replace(section, "");
  }
  return markdown;
}