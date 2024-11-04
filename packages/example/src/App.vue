<template>
  <el-config-provider :locale="zhCn">
    <Tablex />
    <Formx />
  </el-config-provider>
</template>

<script lang="tsx" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import Tablex from './example/tablex.vue';
import Formx from './example/formx.vue';
</script>
