# Change: 建立版本映射策略

## Why

当前项目版本为 1.0.43，但缺少与 Ant Design 版本的明确对应关系。用户需要：
1. 为 Ant Design 5.0 用户提供稳定版本（1.0）
2. 为 Ant Design 6.0 用户提供当前版本（2.0）
3. 建立清晰的版本同步机制，便于未来 Ant Design 7.0 对应 3.0 的升级路径

## What Changes

- **BREAKING**: 版本号从 1.0.43 升级到 2.0.0
- 使用 commit `a60f13488a8dacbac25d15933c92582ff354739e` 的内容创建 1.0.0 版本发布（通过 git tag，不维护独立分支）
- 在 `package.json` 中添加 `peerDependencies` 配置：
  - 1.0.x 版本：`"peerDependencies": { "antd": "^5.0.0" }`
  - 2.0.x 版本：`"peerDependencies": { "antd": "^6.0.0" }`
- 在 `README.md` 和 `README.zh-CN.md` 中添加版本映射说明：
  - Ant Design 5.0 → 使用 1.0.x 版本
  - Ant Design 6.0 → 使用 2.0.x 版本
  - Ant Design 7.0 → 将对应 3.0.x 版本（未来规划）
- 描述版本同步升级方案

## Impact

- 受影响规范：版本管理规范（新增）
- 受影响代码：
  - `package.json` - 版本号更新和添加 `peerDependencies` 配置
  - `README.md` - 添加版本映射说明
  - `README.zh-CN.md` - 添加版本映射说明
- 受影响流程：
  - npm 发布流程需要支持多版本维护
  - 文档提取和发布流程需要明确版本对应关系
