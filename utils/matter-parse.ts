import { read } from "to-vfile";
import { matter } from "vfile-matter";

interface AntdMDMatter {
  title: string;
  category: string;
  group: string;
  /** 组件名称 */
  subtitle: string;
  /** 组件描述 */
  description: string;
  /** 可用版本 */
  tag: string;
  [key: string]: any;
}

/** 解析 markdown的 meta 信息 */
export const parseMDMatter = async (filePath: string): Promise<AntdMDMatter | undefined> => {
  try {
    const file = await read(filePath);
    matter(file);

    return file.data.matter as AntdMDMatter;
  } catch (error) {
    return undefined
  }
};
