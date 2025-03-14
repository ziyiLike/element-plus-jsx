---
outline: deep
---

# defineFormFnPlugin

此 hook 用于定义`el-formx`的插件，通过此插件可以获得相应的类型检查以及提示，是自定义`el-formx`的辅助方法。

## 示例

```tsx
const xxxFormFnplugin = defineFormFnPlugin(props => props.formFn)
```

## Type Declarations

```ts
export type FormPluginsProps<T = unknown> = {
  form: Ref<T>
  formFn: FormItemProps<T>[]
  slots?: Record<string, Component>
  attrs?: Record<string, any>
  formRef: Ref<FormInstance>
  emit: (event: string, ...args: any[]) => void
  expose: any
}

/**
 * 定义Tablex插件 fn
 * @param fn 插件函数
 * @returns
 *
 * @example
 * const xxxFormplugin = defineFormFnPlugin((props) => props.formFn)
 */
export function defineFormFnPlugin<T = unknown>(fn: (props: FormPluginsProps<T>) => FormItemProps<T>[]) {
  return fn
}
```
