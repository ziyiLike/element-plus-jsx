---
outline: deep
---

# JSX 配置

为了最佳体验，请确保已配置`vueJsx()`插件

### 安装

```shell
# with npm
npm i -D @vitejs/plugin-vue-jsx
# with yarn
yarn add -D @vitejs/plugin-vue-jsx
```

### 配置

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  ···
  // 配置
  plugins: [vue(), vueJsx()]
})
```

同时，在`tsconfig.json`中启用

```json
{
  "compilerOptions": {
    ···
    "jsx": "preserve",
    "jsxImportSource": "vue"
    ···
  },
  "include": ["./**/*.ts", "./**/*.d.ts", "./**/*.tsx", "./**/*.vue"]
}
```
