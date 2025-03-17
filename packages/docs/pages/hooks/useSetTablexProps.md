---
outline: deep
---

# useSetTablexProps

此 hook 用于设置 Tablex 属性 提供类型 check。类型覆盖 `el-table` 属性。

## 示例

```vue
<script lang="tsx" setup>
const tableProps = useSetTablexProps({
  ···
})
</script>

<template>
  <el-tablex v-bind="tableProps" />
</template>
```

## Type Declarations

```ts
/**
 * 设置Tablex属性 提供类型check
 * @param props 属性
 * @returns
 *
 * @example
 * const props = useSetTablexProps({
 *   ···
 * })
 *
 * <el-tablex v-bind="props" />
 */
export function useSetTablexProps<T = unknown>(props: TableProps<T>) {
  return props
}
```
