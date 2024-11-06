import DefaultTheme from 'vitepress/theme'
import './style.css'
import '../styles/index.css'
import { EnhanceAppContext } from 'vitepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlusJsx from 'element-plus-jsx'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    ctx.app.use(ElementPlusJsx)
    useComponents(ctx.app)
  }
}
