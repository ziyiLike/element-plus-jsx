import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { demoBlockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import Inspect from 'vite-plugin-inspect'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Element-Plus-Jsx',
  description: 'A element-plus plugins with jsx',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/pages/guide/quick-start' },
      { text: '组件', link: '/pages/compoents/tablex' }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '快速上手', link: '/pages/guide/quick-start' },
          { text: 'JSX配置', link: '/pages/guide/jsx' },
          { text: '常见问题', link: '/pages/guide/qa' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'Tablex', link: '/pages/compoents/tablex' },
          { text: 'Formx', link: '/pages/compoents/formx' }
        ]
      },
      {
        text: '插件',
        items: [
          { text: '插件说明', link: '/pages/plugins/description.md' },
          { text: '表格插件', link: '/pages/plugins/tablePlugins.md' }
        ]
      },
      {
        text: 'Hooks',
        items: [
          {
            text: 'Tablex',
            items: [
              { text: 'useColumns', link: '/pages/hooks/useColumns.md' },
              { text: 'defineColumns', link: '/pages/hooks/defineColumns.md' },
              { text: 'defineColumnsPlugin', link: '/pages/hooks/defineColumnsPlugin.md' }
            ]
          },
          {
            text: 'Formx',
            items: [
              { text: 'useFormFn', link: '/pages/hooks/useFormFn.md' },
              { text: 'defineFormFn', link: '/pages/hooks/defineFormFn.md' },
              { text: 'defineFormFnPlugin', link: '/pages/hooks/defineFormFnPlugin.md' }
            ]
          }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ziyiLike/element-plus-jsx.git' }],
    footer: {
      message:
        'Released under the <a href="https://github.com/ziyiLike/element-plus-jsx/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/ziyiLike">Ziyi</a>'
    }
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx(), Inspect()]
  }
})
