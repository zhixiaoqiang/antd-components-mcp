import { readFile } from "node:fs/promises";
import { COMPONENTS_DATA_CHANGELOG, EXTRACT_COMPONENTS_DATA_DIR, EXTRACT_COMPONENTS_LIST_PATH } from "../constants/path";
import { Cache } from "./cache";
import { join } from "node:path";
import { existsSync } from "node:fs";

import type { ComponentData } from './../scripts/extract-docs';


interface CacheData {
  componentsList: ComponentData[]
  componentsChangelog: string
}

const componentCache = new Cache<CacheData>()

// 加载组件列表
export async function loadComponentsList() {
  try {
    const cacheComponentList = componentCache.get('componentsList')
    if (cacheComponentList) {
      return cacheComponentList
    }

    const componentList = await readFile(EXTRACT_COMPONENTS_LIST_PATH, "utf-8");
    const componentListJson = JSON.parse(componentList) as ComponentData[]
    
    componentCache.set('componentsList', componentListJson)
    
    return componentListJson
  } catch (error) {
    console.error(`加载组件列表错误: ${(error as Error).message}`);
    return [];
  }
}

/** 根据组件名称查找组件 */
export async function findComponentByName(componentName: string) {
  const components = await loadComponentsList();
  return components.find(
    (c) =>
      c.name.toLowerCase() === componentName.toLowerCase() ||
      c.dirName.toLowerCase() === componentName.toLowerCase(),
  );
}

/** 获取 Ant Design 特定组件文档 */
export const getComponentDocumentation = async (componentName: string) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return ` "${componentName}" 组件文档不存在`;
  }

  const docPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "docs.md");

  try {
    if (existsSync(docPath)) {
      return await readFile(docPath, "utf-8");
    } else {
      return `${component.name} 组件文档不存在`;
    }
  } catch (error) {
    console.error(`获取 ${component.name} 组件文档错误: ${(error as Error).message}`);
    return `获取 ${component.name} 组件文档错误: ${(error as Error).message}`;
  }
};


/** 获取 Ant Design 特定组件 API 文档 */
export const getComponentProps = async (componentName: string) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `${componentName} API 文档不存在`;
  }

  try {
    const apiPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "api.md");

    if (existsSync(apiPath)) {
      return await readFile(apiPath, "utf-8");
    }
    return `${componentName} API 文档不存在`;
  } catch (error) {
    console.error(`获取 ${component.name} API文档错误: ${(error as Error).message}`);
    return `获取 ${component.name} API文档错误: ${(error as Error).message}`;
  }
};

/** 获取 Ant Design 特定组件示例 */
export const listComponentExamples = async (componentName: string) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return "当前组件不存在";
  }

  const examplesMdPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "examples.md");

  if (!existsSync(examplesMdPath)) {
    return `${component.name} 的示例代码不存在`;
  }
  try {
    return await readFile(examplesMdPath, "utf-8");
  } catch (error) {
    console.error(`${component.name} 的示例代码不存在: ${(error as Error).message}`);
    return `${component.name} 的示例代码不存在`;
  }
};

// 获取组件更新记录
export const getComponentsChangelog = async (componentName: string) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return "当前组件不存在";
  }

  try {
    const cacheComponentChangelog = componentCache.get('componentsChangelog')
    if (cacheComponentChangelog) {
      return cacheComponentChangelog
    }
    const componentChangelog = await readFile(COMPONENTS_DATA_CHANGELOG, "utf-8");
    const componentChangelogJson = JSON.parse(componentChangelog)
    
    componentCache.set('componentsChangelog', componentChangelogJson)
    return componentChangelogJson

  } catch (error) {
    console.error(`获取组件更新记录错误 ${component.name}: ${(error as Error).message}`);
    return `未找到 ${component.name} 更新日志`;
  }
};
