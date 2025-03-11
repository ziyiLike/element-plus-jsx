import { TableColumnCtx, TableProps as ElTableProps } from 'element-plus'
import type { Component, Ref } from 'vue'
import type { FnRefAble, Merge } from '../tools'
import { CSSProperties, HTMLAttributes } from 'vue'

export type TableColumn<T = unknown> = Merge<
  Omit<TableColumnCtx<T>, 'prop'> & {
    prop?: keyof T | (string & {})
    show?: FnRefAble<boolean>
    slots?: {
      default?: (props: { row: T; column: TableColumnCtx<T>; $index: number }) => Component | null
      header?: (props: { column: TableColumnCtx<T> }) => Component | null
    }
  },
  ElementPlusJsx.ColumnExtend<T>
>

export interface TableProps<T = unknown> extends ElTableProps<T> {
  columns: TableColumn<T>[]
  plugins: any[]
  class?: HTMLAttributes['class']
  style?: CSSProperties
}

export type TablePluginsProps<T = unknown> = {
  data: TableProps<T>['data']
  columns: TableProps<T>['columns']
  slots?: Record<string, Component>
  attrs?: Record<string, any>
  tableRef: Ref<any>
  emit: (event: string, ...args: any[]) => void
  expose: any
  [key: string]: any
}
