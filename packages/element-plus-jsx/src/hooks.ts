import { isRef } from 'vue'
import type { App } from 'vue'
import { TableColumn, TablePluginsProps } from './table/types'
import type { Fn, Options, WithInstall } from './tools'

export function useFnOrRefProp<T = any>(prop: any, ...args: any[]): T {
  return typeof prop === 'function' ? prop(...args) : isRef(prop) ? prop.value : prop
}

/**
 * 列配置
 *
 * @param columns 列配置或列配置函数
 * @param mapAddColumns 映射到所有列的配置项
 * @param args 函数参数
 *
 * @example 单独使用 `useColumns` 可获得参数类型提示以及参数校验
 * const columns = useColumns([{ prop: 'name', label: '姓名' }], { align: 'center' })
 *
 * @example 配合 `defineColumns` 使用 （此用法主要用于将配置列拆分于单独文件）
 * const columns = useColumns(
 *    defineColumns((editClick:Fn, deleteClick:Fn) => [{ prop: 'name', label: '姓名' }]),
 *    { align: 'center' },
 *    editClick,
 *    deleteClick
 * )
 *
 */
export function useColumns<T = unknown>(
  columns: TableColumn<T>[] | ((...args: any[]) => TableColumn<T>[]),
  mapAddColumns: TableColumn<T>,
  ...args: any[]
) {
  return (typeof columns === 'function' ? columns(...args) : columns).map((column) => {
    return { ...column, ...mapAddColumns }
  })
}

/**
 * 定义列配置函数
 * - 使用`defineColumns`与`useColumns`配合可轻松的将配置拆分至多个文件
 *
 * @param fn 列配置函数
 * @returns
 *
 * @example
 * - example/page/xxx/columns/exampleColumns.tsx
 * export default defineColumns((editClick:Fn, deleteClick:Fn) => [{ prop: 'name', label: '姓名' }, ···])
 *
 * - example/page/xxx/index.vue
 * import exampleColumns from './columns/exampleColumns'
 *
 * <el-tablex :data="data" :columns="useColumns(exampleColumns, {} editClick, deleteClick)" />
 */
export function defineColumns<T = unknown>(fn: Fn<TableColumn<T>[]>) {
  return fn
}

/**
 * 定义Tablex插件 fn
 * @param fn 插件函数
 * @returns
 *
 * @example
 * const xxxTableplugin = defineColumnsPlugin((props) => props.columns)
 */
export function defineColumnsPlugin<T = unknown>(
  fn: (props: TablePluginsProps) => TableColumn<T>[]
) {
  return fn
}

/**
 * 注册组件
 * @param main 主组件
 * @param extra 挂载的子组件
 * @returns
 */
export function useWithInstall<T, E extends Record<string, any>>(main: T, extra?: E) {
  ;(main as WithInstall<T>).install = (app: App, options?: Options): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component((options?.prefix ?? comp.prefix) + comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as WithInstall<T> & E
}
