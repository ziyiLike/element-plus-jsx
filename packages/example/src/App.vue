<template>
  <el-config-provider :locale="zhCn">
    <el-providerx :tablePlugins="plugins.tablePlugins" :formProps="{ labelPosition: 'top' }">
      <Tablex />
      <Formx />
    </el-providerx>
  </el-config-provider>
</template>

<script lang="tsx" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import Tablex from './example/tablex.vue';
import Formx from './example/formx.vue';
import plugins from './plugins';
</script>
