---
outline: deep
---

# 表格插件

组件为`el-tablex`提供了一套相应的插件系统。通过插件你可以灵活的自定义一些表格行为。

## 示例

```tsx
import { defineColumnsPlugin } from 'element-plus-jsx'

// 自定义属性插件
// 此插件可以让你在列表的配置列中支持使用 `renderType` 属性来实现枚举类型展示
const tableEnumPlugin = defineColumnsPlugin(({ columns }) => {
  return columns.map(item => {
    if (item.renderType === 'enum') {
      item.formatter = (_, __, cellValue) => {
        return item.enumData?.[cellValue]
      }
    }
    return item
  })
})

// 自定义组件插件
// 此插件可以让你在`el-tablex`的props中使用 `showIndex` 属性来实现增加序号列的功能
const tableIndexPlugin = defineColumnsPlugin(props => {
  return props.attrs?.showIndex ? [{ type: 'index', width: 55 }, ...props.columns] : props.columns
})

const plugins = {
  tablePlugins: [tableEnumPlugin, tableIndexPlugin]
}

export default plugins
```
