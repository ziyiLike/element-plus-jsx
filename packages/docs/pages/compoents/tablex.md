---
outline: deep
---

# 表格 Tablex

组件`el-tablex`完全等同于`el-table`，可以完全平替使用，组件本身未做任何更改。

#### 基础使用

在`el-table`基础上仅增加一个属性`columns`, 接收一个数组，用于配置相应的表格列，所有属性均透传至`el-table-column`。`

> 推荐使用 Hook `useColumns` 提供配置项提示以及对应类型检查。

:::demo

```vue
<template>
  <el-button style="margin-bottom:20px" @click="handleGetClickRow">选中</el-button>
  <el-tablex ref="tableRef" class="vp-raw" border :data="data" :columns="columns" />
</template>

<script setup lang="tsx">
import { ElMessage } from 'element-plus'
import { useColumns } from 'element-plus-jsx'
import { ref } from 'vue'

const tableRef = ref()

type IItem = {
  name: string
  sex: number
  address: string
  enable: boolean
}

const data: IItem[] = [
  {
    name: '张三',
    sex: 0,
    address: '北京',
    enable: true
  },
  {
    name: '李四',
    sex: 1,
    address: '上海',
    enable: false
  },
  {
    name: '王五',
    sex: 1,
    address: '广州',
    enable: true
  }
]

const columns = useColumns<IItem>(
  [
    {
      type: 'selection',
      width: 55,
      selectable: row => row.name !== '王五'
    },
    {
      prop: 'name',
      label: '姓名'
    },

    {
      prop: 'sex',
      label: '性别'
    },
    {
      prop: 'address',
      slots: {
        header: () => <div style="color:var(--el-color-primary)">地址</div>
      }
    },
    {
      label: '启用',
      slots: {
        default: ({ row }) => {
          return <el-switch v-model={row.enable} />
        }
      }
    },
    {
      label: '操作',
      slots: {
        default: ({ row }) => {
          return <el-button onClick={() => ElMessage.success(row.name)}>添加</el-button>
        }
      }
    }
  ],
  { align: 'center' }
)

const handleGetClickRow = () => {
  const row = tableRef.value?.tableRef.getSelectionRows()
  row.forEach(it => {
    ElMessage.success(it.name)
  })
}
</script>
```

:::

#### Tablex Props

<div class=vp-table>

| 名称    | 类型               | 默认值 | 说明       |
| ------- | ------------------ | ------ | ---------- |
| columns | `TableColumn<T>[]` | []     | 表格列配置 |

</div>
