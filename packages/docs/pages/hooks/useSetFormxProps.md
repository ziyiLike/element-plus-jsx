---
outline: deep
---

# useSetFormxProps

此 hook 用于设置 Formx 属性 提供类型 check。类型覆盖 `el-form` 属性。

## 示例

```vue
<script lang="tsx" setup>
const formProps = useSetFormxProps({
  ···
})
</script>

<template>
  <el-formx v-bind="formProps" />
</template>
```

## Type Declarations

```ts
/**
 * 设置Formx属性 提供类型check
 * @param props 属性
 * @returns
 *
 * @example
 * const props = useSetFormxProps({
 *   ···
 * })
 *
 * <el-formx v-bind="props" />
 */
export function useSetFormxProps<T = unknown>(props: FormProps<T>) {
  return props
}
```
