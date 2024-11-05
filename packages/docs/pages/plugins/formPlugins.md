---
outline: deep
---

# 表单插件

组件为`el-formx`提供了一套相应的插件系统。通过插件你可以灵活的自定义一些表单行为。

## 示例

```tsx
import { defineFormFnPlugin } from 'element-plus-jsx'

// 自定义属性插件
// 此插件可以让你在列表的配置列中支持使用 `type='drivice'` 属性来实现单行渲染`el-drivice`
const formDrivicePlugin = defineFormFnPlugin(({ formFn }) => {
  return formFn.map(item => {
    if (item.type === 'drivice') {
      return {
        ...item,
        slots: {
          row: () => <el-drivice />
        }
      }
    }
    return item
  })
})

// 自定义组件插件
// 此插件可以让你在`el-formx`的props中使用 `small` 属性来映射更改form所有配置项
const formSmallPlugin = defineColumnsPlugin(props => {
  return props.attrs?.small ? props.formFn.map(item => ({ ...item, size: 'small' })) : props.formFn
})

const plugins = {
  formPlugins: [formDrivicePlugin, formSmallPlugin]
}

export default plugins
```
