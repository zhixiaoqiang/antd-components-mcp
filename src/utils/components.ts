import { readFile } from "node:fs/promises";
import { EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH, DOC_FILE_NAME, EXAMPLE_FILE_NAME, EXTRACTED_COMPONENTS_DATA_PATH, EXTRACTED_COMPONENTS_LIST_PATH } from "../constants/path";
import { Cache } from "./cache";
import { join } from "node:path";
import { existsSync } from "node:fs";
import fetch from "node-fetch";

import type { ComponentData } from '../scripts/extract-docs';

interface CacheData {
  componentsList: ComponentData[]
  componentsChangelog: Record<string, ComponentChangelogItem[]>
  componentsDoc: Record<string, string>
  componentApi: Record<string, string>
  componentExample: Record<string, string>
}

const componentCache = new Cache<CacheData>()

/** 加载组件列表 */
export async function loadComponentsList() {
  try {
    const cacheComponentList = componentCache.get('componentsList')
    if (cacheComponentList) {
      return cacheComponentList
    }
    
    const componentList = await readFile(EXTRACTED_COMPONENTS_LIST_PATH, "utf-8");

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

/** 获取 Ant Design 特定组件文档（优先远程，失败回退本地） */
export const getComponentDocumentation = async (componentName: string, lang: string = 'zh-CN') => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return ` "${componentName}" 组件文档不存在`;
  }

  // 优先尝试远程获取
  const remoteUrl = `https://raw.githubusercontent.com/ant-design/ant-design/refs/heads/master/components/${component.dirName}/index.${lang}.md`;
 
  try {
    const remoteRes = await fetch(remoteUrl);
    
    if (remoteRes.ok) {
      
      const remoteText = await remoteRes.text();
     
      // 缓存远程内容
      const cacheComponentDoc = componentCache.get('componentsDoc') || {};
      cacheComponentDoc[component.name] = remoteText;
      componentCache.set('componentsDoc', cacheComponentDoc);
      
      return remoteText;
    }
  } catch (e) {
    // 忽略，回退本地
  }

  // 本地回退
  const docPath = join(EXTRACTED_COMPONENTS_DATA_PATH, component.dirName, DOC_FILE_NAME);
  try {
    const cacheComponentDoc = componentCache.get('componentsDoc') || {}
    if (cacheComponentDoc?.[component.name]) {
      return cacheComponentDoc[component.name]
    }

    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");
      cacheComponentDoc[component.name] = docResult
      componentCache.set('componentsDoc', cacheComponentDoc)
      return docResult
    }
    return `${component.name} 组件文档不存在`;
  } catch (error) {
    console.error(`获取 ${component.name} 组件文档错误: ${(error as Error).message}`);
    return `获取 ${component.name} 组件文档错误: ${(error as Error).message}`;
  }
};

/** 获取 Ant Design 特定组件示例（优先远程，失败回退本地） */
export const listComponentExamples = async (componentName: string, lang: string = 'zh-CN') => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return "当前组件不存在";
  }

  // 优先尝试远程获取
  const remoteUrl = `https://raw.githubusercontent.com/ant-design/ant-design/refs/heads/master/components/${component.dirName}/demo/index.${lang}.md`;
  console.error('Attempting remote fetch for example:', remoteUrl);
  try {
    const remoteRes = await fetch(remoteUrl);

    if (remoteRes.ok) {
      console.error('Remote fetch successful for example:', remoteUrl);
      const remoteText = await remoteRes.text();
      const cacheComponentExample = componentCache.get('componentExample') || {};
      cacheComponentExample[component.name] = remoteText;
      componentCache.set('componentExample', cacheComponentExample);
      return remoteText;
    }
  } catch (e) {
    // 忽略，回退本地
  }

  // 本地回退
  const examplesMdPath = join(EXTRACTED_COMPONENTS_DATA_PATH, component.dirName, EXAMPLE_FILE_NAME);
  if (!existsSync(examplesMdPath)) {
    return `${component.name} 的示例代码不存在`;
  }
  try {
    const cacheComponentExample = componentCache.get('componentExample') || {}
    if (cacheComponentExample?.[component.name]) {
      return cacheComponentExample[component.name]
    }
    if (existsSync(examplesMdPath)) {
      const exampleResult = await readFile(examplesMdPath, "utf-8");
      cacheComponentExample[component.name] = exampleResult
      componentCache.set('componentExample', cacheComponentExample)
      return exampleResult
    }
    return await readFile(examplesMdPath, "utf-8");
  } catch (error) {
    console.error(`${component.name} 的示例代码不存在: ${(error as Error).message}`);
    return `${component.name} 的示例代码不存在`;
  }
};

interface ComponentChangelogItem {
  version: string;
  changelog: string;
  refs: string[]
  releaseDate: string
  contributors: string[]
}

/** 获取组件更新记录 */
export const getComponentsChangelog = async (componentName: string): Promise<Record<string, ComponentChangelogItem[]> | string> => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `${component} 组件不存在`;
  }

  try {
    const cacheComponentChangelog = componentCache.get('componentsChangelog')
    if (cacheComponentChangelog) {
      return cacheComponentChangelog
    }
    const componentChangelog = await readFile(EXTRACTED_COMPONENTS_DATA_CHANGELOG_PATH, "utf-8");
    const componentChangelogJson = JSON.parse(componentChangelog)
    
    componentCache.set('componentsChangelog', componentChangelogJson)
    return componentChangelogJson

  } catch (error) {
    console.error(`获取组件更新记录错误 ${component.name}: ${(error as Error).message}`);
    return `未找到 ${component.name} 更新日志`;
  }
};
