---
outline: deep
---

# useColumns

此 hook 用于在配置`el-tablex`对应的`columns`参数时提供类型校验以及相应提示，属于`el-tablex`的辅助性方法。

## 示例

```vue
<template>
  <el-tablex :columns="columns" :data="data" />
</template>

<script setup lang="ts">
import { useColumns } from 'element-plus-jsx'

const data = []

const columns = useColumns([
  {type:'index', width:55},
  {label:'姓名', prop:'name'}
], { align: 'center' },)
```

## Type Declarations

```ts
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
  return (typeof columns === 'function' ? columns(...args) : columns).map(column => {
    return { ...mapAddColumns, ...column }
  })
}
```

## Type Association

```typescript
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
```
