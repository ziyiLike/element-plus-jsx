---
outline: deep
---

# 快速上手

跟随以下的步骤，快速上手组件库的使用。

## Vue 版本

vue >= 3.2

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

#### Options

<div class=vp-table>

| 名称         | 类型                    | 默认值 | 说明       |
| ------------ | ----------------------- | ------ | ---------- |
| prefix       | string                  | `el`   | 组件名前缀 |
| tablePlugins | `Fn<TableColumn[]>[]`   | []     | 表格插件   |
| formPlugins  | `Fn<FormItemProps[]>[]` | []     | 表单插件   |

</div>
