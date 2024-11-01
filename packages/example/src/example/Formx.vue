<template>
  <el-formx></el-formx>
</template>

<script setup lang="tsx">
import { useFormFn } from 'element-plus-jsx/runtime';

type IForm = {
  name: string;
  age: number;
  sex: string;
  address: string;
};

const formFn = useFormFn<IForm>([
  {
    show: ({ form }) => form.name === '张三',
    prop: 'a',
    cascaderProps: {
      options: [],
    },
    inputProps: {},
    rules: {
      trigger: 'blur',
      message: '请输入姓名',
    },
  },
]);
</script>
