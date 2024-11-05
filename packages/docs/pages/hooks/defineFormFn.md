---
outline: deep
---

# defineFormFn

此 hook 用于生成`useFormFn`的第一个参数，用于参数传递。使用此 hook 可将过长的配置项单独存放于一个文件中。

## 示例

example/page/xxx/columns/exampleFormFn.tsx

```tsx
export default defineFormFn((userList: any[]) => [
  {
    prop: 'name',
    label: '姓名',
    type: 'select',
    selectOptions: userList
  }
])
```

example/page/xxx/index.vue

```vue
<template>
  <el-formx :model="form" :formFn="useFormFn(exampleFormFn, {}, userList)" />
</template>
<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx'
import exampleFormFn from './columns/exampleFormFn'

const form = {}
const userList = []
</script>
```

## Type Declarations

```ts
/**
 * 定义表单配置函数
 * - 使用`defineFormFn`与`useFormFn`配合可轻松的将配置拆分至多个文件
 *
 * @param fn 表单配置函数
 * @returns
 *
 * @example
 * - example/page/xxx/formFn/exampleFormFn.tsx
 * export default defineFormFn((userList:any[]) => [{ prop: 'name', label: '姓名', type: 'select', selectOptions: userList }])
 *
 * - example/page/xxx/index.vue
 * import exampleColumns from './columns/exampleFormFn'
 *
 * <el-formx v-model="form" :formFn="useFormFn(exampleFormFn, {}, userList)" />
 */
export function defineFormFn<T = unknown>(fn: Fn<FormItemProps<T>[]>) {
  return fn
}
```
