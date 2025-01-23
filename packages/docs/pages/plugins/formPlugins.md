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

### 插件类型定义

> 若是插件为配置项新增或者修改了某个属性，需要同步修改类型使其获得类型推断以及提示。

以上述`formDrivicePlugin`插件为例，`type`新增了类型 `drivice`，则可以重写`type`类型以覆盖默认

```typescript
declare namespace ElementPlusJsx {
  type ColumnExtend<T> = {}

  type FormFnExtend<T> = {
    type:
      | 'input'
      | 'autocomplete'
      | 'cascader'
      | 'checkbox'
      | 'color-picker'
      | 'date-picker'
      | 'mention'
      | 'radio'
      | 'rate'
      | 'select'
      | 'select-v2'
      | 'slider'
      | 'switch'
      | 'time-picker'
      | 'time-select'
      | 'transfer'
      | 'tree'
      | 'upload'
      | (string & {})
      | 'drivice'
  }
}
```

声明之后，在使用`useFormFn`时配置项`type`会推断提示`drivice`
