---
outline: deep
---

# 插件说明

为了便于使用，以及获得良好的扩展性，`element-plus-jsx`提供了对应的插件系统。

::: info
使用插件可以将功能进行更加系统的封装，也为一些复杂的需求提供了更多的定制的可能。
:::

## 装配方式

插件装配优先级 level 1 > level 2 > level 3

#### 1. 全局注册

插件全局生效，优先级：level 3

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementPlusJSX from 'element-plus-jsx'

import plugins from './plugins'

const app = createApp(App)
app.use(ElementPlus)
app.use(ElementPlusJSX, {
  tablePlugins: plugins.tablePlugins,
  formPlugins: plugins.formPlugins
})
app.mount('#app')
```

#### 2. 使用配置组件 `el-providerx`

插件全局生效，优先级：level 2

```vue
<el-providerx :tablePlugins="plugins.tablePlugins" :formPlugins="plugins.formPlugins">
  ···
</el-providerx>
```

#### 3. 组件内配置

插件当前组件生效，优先级：level 1

```vue
<el-tablex :Plugins="plugins.formPlugins">
```

## 插件类型

在项目中声明约定命名空间 ElementPlusJsx，以扩展插件组件的属性。

- `ColumnExtend` 表格列扩展类型
- `FormFnExtend` 表单组件扩展类型

```typescript
declare namespace ElementPlusJsx {
  type ColumnExtend<T> = {}

  type FormFnExtend<T> = {}
}
```
