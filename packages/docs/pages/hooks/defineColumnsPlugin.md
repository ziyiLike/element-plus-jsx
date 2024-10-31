---
outline: deep
---

# defineColumnsPlugin

此 hook 用于定义`el-tablex`的插件，通过此插件可以获得相应的类型检查以及提示，是自定义`el-tablex`的辅助方法。

## 示例

```tsx
const xxxTableplugin = defineColumnsPlugin(props => props.columns)
```

## Type Declarations

```ts
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

/**
 * 定义Tablex插件 fn
 * @param fn 插件函数
 * @returns
 *
 * @example
 * const xxxTableplugin = defineColumnsPlugin((props) => props.columns)
 */
export function defineColumnsPlugin<T = unknown>(fn: (props: TablePluginsProps) => TableColumn<T>[]) {
  return fn
}
```
