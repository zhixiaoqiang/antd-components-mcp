## ADDED Requirements

### Requirement: 版本映射关系
项目版本号 SHALL 与 Ant Design 主版本号建立明确的对应关系，遵循"Ant Design 主版本号 + 1 = 项目主版本号"的规则。

#### Scenario: Ant Design 5.0 用户选择版本
- **WHEN** 用户使用 Ant Design 5.0
- **THEN** 用户应安装项目 1.0.x 版本
- **AND** 文档中明确说明此对应关系

#### Scenario: Ant Design 6.0 用户选择版本
- **WHEN** 用户使用 Ant Design 6.0
- **THEN** 用户应安装项目 2.0.x 版本
- **AND** 文档中明确说明此对应关系

#### Scenario: 未来 Ant Design 7.0 版本对应
- **WHEN** Ant Design 发布 7.0 版本
- **THEN** 项目应发布 3.0.x 版本
- **AND** 文档中提前说明此对应关系

### Requirement: 版本映射文档说明
README.md 和 README.zh-CN.md SHALL 包含版本映射说明章节，明确说明：
- Ant Design 5.0 对应项目 1.0.x 版本
- Ant Design 6.0 对应项目 2.0.x 版本
- Ant Design 7.0 将对应项目 3.0.x 版本（未来规划）

#### Scenario: 用户查看英文文档
- **WHEN** 用户查看 README.md
- **THEN** 文档中包含版本映射说明章节
- **AND** 说明清晰描述了 Ant Design 版本与项目版本的对应关系

#### Scenario: 用户查看中文文档
- **WHEN** 用户查看 README.zh-CN.md
- **THEN** 文档中包含版本映射说明章节（中文）
- **AND** 说明清晰描述了 Ant Design 版本与项目版本的对应关系

### Requirement: 版本同步升级方案说明
文档 SHALL 描述未来版本同步升级方案，说明当 Ant Design 发布新主版本时，项目将如何同步升级。

#### Scenario: 用户了解升级方案
- **WHEN** 用户查看文档中的版本同步升级方案
- **THEN** 用户能够理解：
  - 当 Ant Design 发布新主版本时，项目将发布对应的新主版本
  - 版本映射规则（Ant Design 主版本号 + 1 = 项目主版本号）
  - 如何选择合适的项目版本

### Requirement: peerDependencies 配置
每个版本的 `package.json` SHALL 包含 `peerDependencies` 字段，明确指定所需的 Ant Design 版本范围。

#### Scenario: 1.0.x 版本配置
- **WHEN** 用户安装项目 1.0.x 版本
- **THEN** `package.json` 中包含 `"peerDependencies": { "antd": "^5.0.0" }`
- **AND** npm/yarn/pnpm 会在安装时检查 Ant Design 版本匹配

#### Scenario: 2.0.x 版本配置
- **WHEN** 用户安装项目 2.0.x 版本
- **THEN** `package.json` 中包含 `"peerDependencies": { "antd": "^6.0.0" }`
- **AND** npm/yarn/pnpm 会在安装时检查 Ant Design 版本匹配

#### Scenario: 未来 3.0.x 版本配置
- **WHEN** 项目发布 3.0.x 版本
- **THEN** `package.json` 中包含 `"peerDependencies": { "antd": "^7.0.0" }`
- **AND** npm/yarn/pnpm 会在安装时检查 Ant Design 版本匹配
