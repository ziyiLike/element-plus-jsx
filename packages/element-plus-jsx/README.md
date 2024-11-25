# Element Plus Jsx

基于 Element Plus 扩展 JSX 语法的组件库

## 文档

[中文文档](https://zy.ziyilike.com:20150/)

## Vue 版本

vue >= 3.4

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
