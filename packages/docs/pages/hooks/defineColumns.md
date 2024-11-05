---
outline: deep
---

# defineColumns

此 hook 用于生成`useColumns`的第一个参数，用于参数传递。使用此 hook 可将过长的配置项单独存放于一个文件中。

## 示例

example/page/xxx/columns/exampleColumns.tsx

```tsx
export default defineColumns((editClick:Fn, deleteClick:Fn) => [
  { prop: 'name', label: '姓名' },
  ···
])
```

example/page/xxx/index.vue

```vue
<template>
  <el-tablex :data="data" :columns="useColumns(exampleColumns, {}, editClick, deleteClick)" />
</template>
<script setup lang="tsx">
import { useColumns } from 'element-plus-jsx'
import exampleColumns from './columns/exampleColumns'

const editClick = () => {}
const deleteClick = () => {}
</script>
```

## Type Declarations

```ts
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
 * <el-tablex :data="data" :columns="useColumns(exampleColumns, {}, editClick, deleteClick)" />
 */
export function defineColumns<T = unknown>(fn: Fn<TableColumn<T>[]>) {
  return fn
}
```
