import { writeFile } from "node:fs/promises";

/** 写入压缩后的 JSON */
export const writeJsonFile = async (filePath: string, data: any) => {
  return  writeFile(filePath, JSON.stringify(data));
}