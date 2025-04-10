import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

/** 项目根目录 */
const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 提取的组件数据存储目录 */
const EXTRACTED_DATA_DIR = resolve(ROOT_DIR, "componentData");

/** 提取的组件列表路径 */
const EXTRACTED_COMPONENTS_LIST_PATH = join(EXTRACTED_DATA_DIR, "components-index.json")

/** 提取的结果元信息路径 */
const EXTRACTED_METADATA_PATH =  join(EXTRACTED_DATA_DIR, "metadata.json")

/** 提取的组件数据目录 */
const EXTRACTED_COMPONENTS_DATA_DIR = join(EXTRACTED_DATA_DIR, "components");

/** 组件更新日志 */
const COMPONENTS_DATA_CHANGELOG = join(EXTRACTED_DATA_DIR, "components-changelog.json");

/** 默认提取 ant design 的路径  */
const DEFAULT_ANT_DESIGN_EXTRACT_PATH = './ant-design'

const DOC_FILE_NAME = 'docs.md'
const EXAMPLE_FILE_NAME = 'examples.md'
const API_FILE_NAME = 'api.md'

export {
  ROOT_DIR,
  EXTRACTED_DATA_DIR,
  EXTRACTED_COMPONENTS_LIST_PATH,
  EXTRACTED_METADATA_PATH,
  EXTRACTED_COMPONENTS_DATA_DIR,
  COMPONENTS_DATA_CHANGELOG,
  DEFAULT_ANT_DESIGN_EXTRACT_PATH,
  DOC_FILE_NAME,
  EXAMPLE_FILE_NAME,
  API_FILE_NAME,
}