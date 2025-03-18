---
outline: deep
---

# 配置组件 Providerx

组件`el-providerx`用于对提供对`el-tablex`以及`el-formx`的全局化配置。

#### 基础使用

以`el-tablex`为例。 配置示例：

:::demo

```vue
<template>
  <el-providerx :tableProps="{ border: true, stripe: true, size: 'small' }" :tablePlugins="[tableEnumPlugin]">
    <el-tablex :data="data" :columns="columns" />
  </el-providerx>
</template>

<script setup lang="tsx">
import { useColumns, defineColumnsPlugin } from 'element-plus-jsx'

type IItem = {
  name: string
  sex: number
  enable: boolean
}

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

const data: IItem[] = [
  {
    name: '张三',
    sex: 0,
    enable: true
  },
  {
    name: '李四',
    sex: 1,
    enable: false
  },
  {
    name: '王五',
    sex: 1,
    enable: true
  }
]

const columns = useColumns<IItem>(
  [
    {
      prop: 'name',
      label: '姓名'
    },

    {
      prop: 'sex',
      label: '性别',
      renderType: 'enum',
      enumData: { 0: '男', 1: '女' }
    },
    {
      label: '启用',
      slots: {
        default: ({ row }) => {
          return <el-switch v-model={row.enable} />
        }
      }
    }
  ],
  { align: 'center' }
)
</script>
```

:::

#### Provider Props

<div class=vp-table>

| 名称         | 类型                         | 默认值 | 说明                        |
| ------------ | ---------------------------- | ------ | --------------------------- |
| tableProps   | `TableProps<any>`            | {}     | 表格属性                    |
| tableplugins | `Fn<TableColumn<any>[]>[]`   | []     | 表格插件（优先级：level 2） |
| formProps    | `FormProps<any>`             | {}     | 表单属性                    |
| formPlugins  | `Fn<FormItemProps<any>[]>[]` | []     | 表单插件（优先级：level 2） |

</div>
