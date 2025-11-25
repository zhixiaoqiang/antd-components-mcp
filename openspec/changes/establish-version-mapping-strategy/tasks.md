## 1. 版本发布准备
- [x] 1.1 检查 commit `a60f13488a8dacbac25d15933c92582ff354739e` 的内容
- [x] 1.2 基于该 commit 创建 1.0.0 版本标签（使用 git tag）
- [x] 1.3 在该 commit 的 `package.json` 中添加 `peerDependencies: { "antd": "^5.0.0" }`
- [ ] 1.4 验证 1.0.0 版本可以正常构建和发布（需要实际构建和发布操作）

## 2. 版本号更新和 peerDependencies 配置
- [x] 2.1 将当前代码的 `package.json` 中的版本从 1.0.43 更新为 2.0.0
- [x] 2.2 在当前代码的 `package.json` 中添加 `peerDependencies: { "antd": "^6.0.0" }`
- [x] 2.3 验证版本号格式正确
- [x] 2.4 验证 peerDependencies 配置正确

## 3. 文档更新
- [x] 3.1 在 `README.md` 中添加版本映射章节
  - [x] 3.1.1 说明 Ant Design 5.0 使用 1.0.x 版本
  - [x] 3.1.2 说明 Ant Design 6.0 使用 2.0.x 版本
  - [x] 3.1.3 说明 Ant Design 7.0 将对应 3.0.x 版本（未来规划）
  - [x] 3.1.4 描述版本同步升级方案
- [x] 3.2 在 `README.zh-CN.md` 中添加相同的中文版本映射章节
  - [x] 3.2.1 说明 Ant Design 5.0 使用 1.0.x 版本
  - [x] 3.2.2 说明 Ant Design 6.0 使用 2.0.x 版本
  - [x] 3.2.3 说明 Ant Design 7.0 将对应 3.0.x 版本（未来规划）
  - [x] 3.2.4 描述版本同步升级方案

## 4. 版本发布
- [ ] 4.1 发布 1.0.0 版本（基于 commit a60f134，需要执行 `npm publish`）
- [ ] 4.2 发布 2.0.0 版本（当前版本，需要执行 `npm publish`）

## 5. 验证
- [ ] 5.1 验证两个版本都可以通过 npm 安装（需要实际发布后测试）
- [x] 5.2 验证 peerDependencies 正确配置（1.0.0 要求 antd ^5.0.0，2.0.0 要求 antd ^6.0.0）- 已通过 git show 验证
- [x] 5.3 验证文档中的版本映射说明清晰准确
- [x] 5.4 验证版本同步方案描述完整
