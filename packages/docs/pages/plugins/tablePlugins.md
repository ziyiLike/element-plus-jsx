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

### 插件类型定义

::: info
若是插件为配置项新增或者修改了某个属性，需要同步修改类型使其获得类型推断以及提示。
:::

以上述`tableEnumPlugin`插件为例，配置项新增了属性 `renderType`以及`enumData`以及`renderType`存在一个枚举类型`enum`，请参考一下例子以覆盖默认

```typescript
declare namespace ElementPlusJsx {
  type ColumnExtend<T> = {
    renderType?: 'enum'
    enumData?: Record<string, any>
  }

  type FormFnExtend<T> = {}
}
```

声明之后，在使用`useColumns`时配置项会推断提示`renderType`以及`enumData`
