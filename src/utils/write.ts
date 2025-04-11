import { writeFile } from "node:fs/promises";

export const writeJsonFile = async (filePath: string, data: any) => {
  return  writeFile(filePath, JSON.stringify(data, null, 2));
}