<template>
  <div style="width: 800px">
    <el-formx labelWidth="100px" v-model="state.form" :formFn="formFn"></el-formx>
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

const formFn = useFormFn<IForm>([
  {
    prop: 'name',
    type: 'input',
    label: '姓名',
    width: 50,
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
    width: 50,
    inputProps: {
      type: 'inputNumber',
    },
  },
  {
    prop: 'address',
    type: 'input',
    label: '地址',
    inputProps: {
      type: 'textarea',
    },
  },
]);
</script>
