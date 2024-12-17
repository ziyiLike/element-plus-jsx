export { default } from './installer'
export { default as ElTablex } from './table'
export type { ElTablexInstance, TableColumn, TableProps } from './table'

export { default as ElFormx } from './form'
export type { ElFormxInstance, FormProps, FormItemProps } from './form'

export type * from './tools'

export { transWidth, _get, _set } from './_utils'

export {
  useColumns,
  defineColumns,
  defineColumnsPlugin,
  useFormFn,
  defineFormFn,
  defineFormFnPlugin,
  useFnOrRefProp
} from './hooks'

export type {} from './components'
