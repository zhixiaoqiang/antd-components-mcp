#!/usr/bin/env node

import { resolve } from "path";
import { DEFAULT_ANT_DESIGN_EXTRACT_PATH } from "./src/constants/path";
import extractAllData from "./src/scripts/extract-docs";
import antDesignServer from "./src/server";

// 获取命令行参数
const [command, ...restArgs] = process.argv.slice(2);

// 根据命令选择要执行的脚本
async function run() {
  try {
    if (!command) {
      antDesignServer();
      return;
    } else if (command === "extract") {
      // 解析命令行参数，获取需要提取的 Ant Design 相对当前的路径
      const [antdRepoArg] = restArgs;

      /** 如果未提供参数，默认使用 ./ant-design */
      const antdRepoPath = resolve(
        antdRepoArg ?? DEFAULT_ANT_DESIGN_EXTRACT_PATH
      );

      /** 运行提取过程 */
      extractAllData(antdRepoPath).catch((error) => {
        console.error("❌ 致命错误:", error);
        process.exit(1);
      });
      return;
    } else if (command === "version" || command === "-v") {
      const packageJson = require("./package.json");
      console.log(packageJson.version);
      return;
    }

    console.log("可用命令:");
    console.log(
      "  npx @jzone-mcp/antd-components-mcp         - 启动 MCP 服务器"
    );
    console.log(
      "  npx @jzone-mcp/antd-components-mcp extract - 提取 Ant Design 组件文档，默认读取 ./ant-design"
    );
    console.log(
      "  npx @jzone-mcp/antd-components-mcp extract [ant-design repo path]"
    );
    process.exit(1);
  } catch (error) {
    console.error("执行出错:", error);
    process.exit(1);
  }
}

run();
