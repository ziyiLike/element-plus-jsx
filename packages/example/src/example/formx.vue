<template>
  <div class="flex">
    <div style="width: 800px">
      <el-formx labelWidth="100px" :model="state.form" :formFn="formFn"> </el-formx>
    </div>
    <div style="width: 400px">
      {{ JSON.stringify(state.form, null, 2) }}
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx/runtime';
import { reactive } from 'vue';

type IForm = {
  name: string;
  age: number;
  sex: string;
  address: string;
};

const state = reactive({
  form: {} as IForm,
});

const formFn = useFormFn<IForm>(
  [
    {
      prop: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名',
      rules: {
        required: true,
        message: '请输入姓名',
        trigger: 'blur',
      },
    },
    {
      prop: 'age',
      type: 'input',
      label: '年龄',
      inputProps: {
        type: 'inputNumber',
      },
    },
    {
      prop: 'sex',
      type: 'select',
      label: '性别',
      selectOptions: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
      ],
    },
    {
      prop: 'address',
      type: 'input',
      label: '地址',
      width: 100,
      inputProps: {
        type: 'textarea',
      },
    },
    {
      prop: 'address',
      type: 'upload',
      uploadProps: {
        slots: {
          default: () => <el-button>上传</el-button>,
        },
      },
      label: '地址',
    },
    {
      width: 100,
      slots: {
        default: () => {
          return <el-button>添加</el-button>;
        },
      },
    },
  ],
  { width: 50 }
);
</script>
