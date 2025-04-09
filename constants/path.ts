import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

// Get the directory of the current script
const __dirname = dirname(fileURLToPath(import.meta.url));
/** 项目根目录 */
const ROOT_DIR = resolve(__dirname, "..");

/** 提取的组件数据存储目录 */
const EXTRACT_DATA_DIR = resolve(ROOT_DIR, "componentData");

/** 提取的组件列表路径 */
const EXTRACT_COMPONENTS_LIST_PATH = join(EXTRACT_DATA_DIR, "components-index.json")

/** 提取的结果元信息路径 */
const EXTRACT_METADATA_PATH =  join(EXTRACT_DATA_DIR, "metadata.json")

/** 提取的组件数据目录 */
const EXTRACT_COMPONENTS_DATA_DIR = join(EXTRACT_DATA_DIR, "components");

/** 组件更新日志 */
const COMPONENTS_DATA_CHANGELOG = join(EXTRACT_DATA_DIR, "components-changelog.json");


export {
  ROOT_DIR,
  EXTRACT_DATA_DIR,
  EXTRACT_COMPONENTS_LIST_PATH,
  EXTRACT_METADATA_PATH,
  EXTRACT_COMPONENTS_DATA_DIR,
  COMPONENTS_DATA_CHANGELOG
}