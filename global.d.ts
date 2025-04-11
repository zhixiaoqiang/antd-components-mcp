declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * 是否为构建后的产物
     * 
     * 当值为 `true` 时
     *  1. 会修改 ROOT_DIR 的值
     *  2. 脚本将不会更新 README.md 中的预处理版本信息
     * @default undefined
     */
    IS_BUILD?: 'true' | 'false';
  }
}
