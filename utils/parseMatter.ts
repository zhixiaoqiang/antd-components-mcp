import { read } from 'to-vfile'
import { matter } from 'vfile-matter'

/** 解析 markdown的 meta 信息 */
export const parseMDMatter = async (filePath: string) => {
  const file = await read(filePath)
  matter(file)

  return file.data
}