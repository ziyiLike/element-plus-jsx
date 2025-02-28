---
outline: deep
---

# 快速上手

跟随以下的步骤，快速上手组件库的使用。

:::warning

组件目前还处于 Beta 阶段，请谨慎用于生产环境

:::

## Vue 版本

vue >= 3.4

## Element Plus 版本

:::tip

Element Plus Jsx 最新版本组件同步支持 Element Plus 最新版本，若项目本身 Element Plus 低于插件版本也可兼容，但部分插件功能会受 Element Plus 版本限制，请根据实际情况选择。

:::

element-plus >= 2.9.0

## 安装

```shell
# npm
npm install element-plus-jsx
# yarn
yarn add element-plus-jsx
```

## 引入

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入组件
import ElementPlusJSX from 'element-plus-jsx'

const app = createApp(App)
app.use(ElementPlus)

// install
app.use(ElementPlusJSX)
app.mount('#app')
```

## 全局配置

在引入`ElementPlusJSX`时可以传入一个全局配置对象

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementPlusJSX from 'element-plus-jsx'
// 导入自定义插件 详情请查看文档插件扩展部分
import plugins from './plugins'

const app = createApp(App)
app.use(ElementPlus)
app.use(ElementPlusJSX, {
  prefix: 'el',
  tablePlugins: plugins.tablePlugins
})
app.mount('#app')
```

## 全局类型

在项目中声明约定命名空间 ElementPlusJsx，以扩展插件组件的属性。

- `ColumnExtend` 表格列扩展类型
- `FormFnExtend` 表单组件扩展类型

```typescript
declare namespace ElementPlusJsx {
  type ColumnExtend<T> = {}

  type FormFnExtend<T> = {}
}
```

#### Options

<div class=vp-table>

| 名称         | 类型                    | 默认值 | 说明       |
| ------------ | ----------------------- | ------ | ---------- |
| prefix       | string                  | `el`   | 组件名前缀 |
| tablePlugins | `Fn<TableColumn[]>[]`   | []     | 表格插件   |
| formPlugins  | `Fn<FormItemProps[]>[]` | []     | 表单插件   |

</div>
