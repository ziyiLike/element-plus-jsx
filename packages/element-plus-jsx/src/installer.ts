import ElTablex from './table'
import ElFormx from './form'

import type { App, Plugin } from 'vue'
import { Options } from './tools'
import { setGlobalConfig } from './_utils/index'

const components: Record<string, Plugin> = { ElTablex, ElFormx }

const install = (app: App, options?: Options) => {
  if (options?.tablePlugins) {
    setGlobalConfig(app, { tablePlugins: options.tablePlugins })
  }

  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

const ElementPlusJsx = {
  install,
  ...components
}

export default ElementPlusJsx
