import type { Fn } from '../../src/tools'
import type { App, ComponentInternalInstance } from 'vue'

const GLOBAL_CONFIG_NAME = '$el-element-jsx'

export const setGlobalConfig = (app: App, extract: Record<string, any>) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    ...extract
  }
}

export const getConfig = (instance: ComponentInternalInstance, key: string) => {
  return instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.[key]
}

export const installPlugins = <T = any>(args: any, useKey: string): T => {
  let pluginReturn = args[useKey]
  args.plugins.forEach((fn: Fn) => {
    pluginReturn = fn(Object.assign({ [useKey]: pluginReturn }, args))
  })
  return pluginReturn
}

export const transWidth = (width?: string | number) => {
  if (typeof width === 'number') {
    return `${width}%`
  }
  return width
}

export const filterKeys = (obj: Record<string, any> | undefined, keys: string[]) => {
  if (!obj || !keys) return obj
  return Object.keys(obj).reduce((acc: any, key: any) => {
    if (!keys.includes(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

export const _get = (obj: any, path: any) => {
  return path.split('.').reduce((acc: any, key: any) => acc?.[key], obj)
}

export const _set = (obj: any, path: any, value: any) => {
  const keys = path.split('.')
  const lastKey = keys.pop()
  const lastObj = keys.reduce((acc: any, key: any) => {
    return acc[key] || (acc[key] = {})
  }, obj)
  lastObj[lastKey!] = value
}
