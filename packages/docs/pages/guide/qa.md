---
outline: deep
---

# 常见问题

### 在使用 vite 的 elemtn-plus 自动导入插件时会导致冲突报错如何解决？

- ##### 解决方案 1

可以在组件引入时指定组件前缀来规避自动导入正则匹配 EL 开头导致报错，如：

```typescript
import { ElementPlusJsx } from 'element-plus-jsx'

app.use(ElementPlusJsx, {
  prefix: 'EX'
})
```

使用时

```vue
<template>
  <ex-formx form-fn="formFn" />
</template>
```

- ##### 解决方案 2

可以使用 `ElementPlusResolver` 的 `exclude` 选项来排除 ElementPlusJsx 的组件，如：

vite.config.ts

```typescript
export default defineConfig({
  ···
  plugins: [
    ···
    Components({
      resolvers: [ElementPlusResolver({ exclude: /^El.*?x$/ })],
    }),
  ],
)}
```

### element-plus-jsx 的组件中 element-plus 的样式无法正常渲染如何解决？

为了防止包体过大，element-plus-jsx 只集成了 element-plus 的基础组件，并未将其 css 打包，如果打包 css 会导致个人项目中与 element-plus 的样式重叠。

- ##### 解决方案 1

全量引入 element-plus 的样式

```typescript
import 'element-plus/dist/index.css'
```

- ##### 解决方案 2

手动导入对应使用 element-plus 组件的样式

```typescript
import 'element-plus/es/components/input/style'
```

### 在使用 vite 的 elemtn-plus 自动导入插件时，自定义插件中使用的 element-plus 组件不生效如何解决？

element-plus 的自动导入插件默认只解析 vue 文件中使用的组件，将 tsx 添加到解析即可

vite.config.ts

```typescript
export default defineConfig({
  ···
  plugins: [
    ···
    Components({
      extensions: ['vue', 'tsx'],
      ···
    })
  ]
})
```
