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
