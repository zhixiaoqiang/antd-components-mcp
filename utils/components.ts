import { readFile } from "node:fs/promises";
import { COMPONENTS_DATA_CHANGELOG, EXTRACT_COMPONENTS_DATA_DIR, EXTRACT_COMPONENTS_LIST_PATH } from "../constants/path";
import { Cache } from "./cache";
import { join } from "node:path";
import { existsSync } from "node:fs";

const componentCache = new Cache()

// Load components index from the extracted data
export async function loadComponentsList() {
  try {
    const cacheComponentList = componentCache.get('componentsList')
    if (cacheComponentList) {
      return cacheComponentList
    }

    const componentList = await readFile(EXTRACT_COMPONENTS_LIST_PATH, "utf-8");
    const componentListJson = JSON.parse(componentList)
    
    componentCache.set('componentsList', componentListJson)
    
    return componentListJson
  } catch (error) {
    console.error(`Error loading components index: ${error.message}`);
    return [];
  }
}


// Find a component by name (case-insensitive)
export async function findComponentByName(componentName) {
  const components = await loadComponentsList();
  return components.find(
    (c) =>
      c.name.toLowerCase() === componentName.toLowerCase() ||
      c.dirName.toLowerCase() === componentName.toLowerCase(),
  );
}

// Find components matching a pattern
export async function findComponentsByPattern(pattern) {
  const components = await loadComponentsList();
  const regexPattern = new RegExp(pattern, "i");

  return components.filter((c) => regexPattern.test(c.name) || regexPattern.test(c.dirName));
}

// Get component markdown documentation
export const getComponentDocumentation = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `Documentation for component "${componentName}" not found`;
  }

  const docPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "docs.md");

  try {
    if (existsSync(docPath)) {
      return await readFile(docPath, "utf-8");
    } else {
      return `Documentation for ${component.name} not found`;
    }
  } catch (error) {
    console.error(`Error reading documentation for ${component.name}: ${error.message}`);
    return `Error reading documentation: ${error.message}`;
  }
};


// Get component API documentation
export const getComponentProps = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `API documentation for component "${componentName}" not found`;
  }

  try {
    const apiPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "api.md");

    if (existsSync(apiPath)) {
      return await readFile(apiPath, "utf-8");
    }
    return `API documentation for ${component.name} not found`;
  } catch (error) {
    console.error(`Error reading API for ${component.name}: ${error.message}`);
    return `Error reading API documentation: ${error.message}`;
  }
};

// List component examples
export const listComponentExamples = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return "当前组件不存在";
  }

  // First, check if we have examples.md with descriptions
  const examplesMdPath = join(EXTRACT_COMPONENTS_DATA_DIR, component.dirName, "examples.md");

  if (!existsSync(examplesMdPath)) {
    return `No examples found for ${component.name}`;
  }
  try {
    return await readFile(examplesMdPath, "utf-8");
  } catch (error) {
    console.error(`Error reading examples markdown for ${component.name}: ${error.message}`);
    return `No examples found for ${component.name}`;
  }
};

// 获取组件更新记录
export const getComponentsChangelog = async (componentName) => {
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
    console.error(`Error reading examples markdown for ${component.name}: ${error.message}`);
    return `未找到 ${component.name} 更新日志`;
  }
};
