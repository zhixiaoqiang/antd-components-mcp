import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

/** 项目根目录 */
const ROOT_DIR = process.env.IS_BUILD
  ? resolve(dirname(fileURLToPath(import.meta.url)), "..")
  : resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

/** 提取的组件数据存储目录 */
const EXTRACTED_DATA_DIR = resolve(ROOT_DIR, "componentData");

/** 提取的组件列表路径 */
const EXTRACTED_COMPONENTS_LIST_PATH = join(
  EXTRACTED_DATA_DIR,
  "components-index.json"
);

/** 提取的结果元信息路径 */
const EXTRACTED_METADATA_PATH = join(EXTRACTED_DATA_DIR, "metadata.json");

/** 提取的组件数据目录 */
const EXTRACTED_COMPONENTS_DATA_PATH = join(EXTRACTED_DATA_DIR, "components");

/** README.md 目录路径 */
const README_PATH = join(ROOT_DIR, "README.md");
/** README.md 提取结果匹配字段 */
const README_MATCH_FIELD = /(?<=(预处理版本为 ))`(.*)`/;

/** 提取的组件更新日志路径 */
const EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH = join(
  EXTRACTED_DATA_DIR,
  "components-changelog.json"
);

/** antd组件更新记录文件路径 */
const EXTRACT_COMPONENTS_CHANGELOG_PATH = "components-changelog-cn.json";

/** 默认提取 ant design 的路径  */
const DEFAULT_ANT_DESIGN_EXTRACT_PATH = "./ant-design";

const DOC_FILE_NAME = "docs.md";
const EXAMPLE_FILE_NAME = "examples.md";
const API_FILE_NAME = "api.md";

export {
  ROOT_DIR,
  README_PATH,
  README_MATCH_FIELD,
  EXTRACTED_DATA_DIR,
  EXTRACTED_COMPONENTS_LIST_PATH,
  EXTRACTED_METADATA_PATH,
  EXTRACTED_COMPONENTS_DATA_PATH,
  EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH,
  DEFAULT_ANT_DESIGN_EXTRACT_PATH,
  EXTRACT_COMPONENTS_CHANGELOG_PATH,
  DOC_FILE_NAME,
  EXAMPLE_FILE_NAME,
  API_FILE_NAME,
};
