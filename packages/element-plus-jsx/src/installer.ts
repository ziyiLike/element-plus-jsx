import ElTablex, { TableColumn } from './table'
import ElFormx, { FormItemProps } from './form'
import { ElProviderx } from './provider'

import type { App, Plugin } from 'vue'
import { Fn, Options } from './tools'
import { setGlobalConfig } from './_utils/index'

const components: Record<string, Plugin> = { ElTablex, ElFormx, ElProviderx }

const install = (app: App, options?: Options<Fn<TableColumn<any>[]>, Fn<FormItemProps<any>[]>>) => {
  if (options?.tablePlugins) {
    setGlobalConfig(app, { tablePlugins: options.tablePlugins })
  }

  if (options?.formPlugins) {
    setGlobalConfig(app, { formPlugins: options.formPlugins })
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
