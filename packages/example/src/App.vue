<script setup lang="tsx">
import { ElMessage } from 'element-plus';
import { useColumns } from 'element-plus-jsx/runtime';
import { ref } from 'vue';

const tableRef = ref();

type IItem = {
  name: string;
  age: number;
  sex: number;
  address: string;
  phone: string;
  enable: boolean;
};

const data: IItem[] = [
  {
    name: '张三',
    age: 18,
    sex: 0,
    address: '北京',
    phone: '12345678901',
    enable: true,
  },
  {
    name: '李四',
    age: 19,
    sex: 1,
    address: '上海',
    phone: '12345678902',
    enable: false,
  },
  {
    name: '王五',
    age: 20,
    sex: 1,
    address: '广州',
    phone: '12345678903',
    enable: true,
  },
];

const columns = useColumns<IItem>(
  [
    {
      type: 'selection',
      width: 55,
      selectable: (row) => row.name !== '王五',
    },
    {
      prop: 'name',
      label: '姓名',
    },
    {
      prop: 'age',
      label: '年龄',
    },
    {
      prop: 'sex',
      label: '性别',
      renderType: 'enum',
      enumData: {
        0: '男',
        1: '女',
      },
    },
    {
      prop: 'address',
      label: '地址',
    },
    {
      prop: 'phone',
      slots: {
        header: () => <div style="color:red">电话</div>,
      },
    },
    {
      label: '启用',
      slots: {
        default: ({ row }) => {
          return <el-switch v-model={row.enable} />;
        },
      },
    },
    {
      label: '操作',
      slots: {
        default: ({ row }) => {
          return <el-button onClick={() => ElMessage.success(row.name)}>添加</el-button>;
        },
      },
    },
  ],
  { align: 'center' }
);

const handleGetClickRow = () => {
  const row = tableRef.value?.tableRef.getSelectionRows();
  row.forEach((it) => {
    ElMessage.success(it.name);
  });
};
</script>

<template>
  <div class="example">
    <el-button style="margin-bottom: 20px" @click="handleGetClickRow">获取选中行</el-button>
    <el-tablex ref="tableRef" border :data="data" :columns="columns" :showIndex="true" v-loading="false" />
  </div>
</template>

<style scoped>
.example {
  padding: 20px;
}
</style>
