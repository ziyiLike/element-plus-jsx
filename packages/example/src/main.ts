import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ElementPlusJSX from 'element-plus-jsx/runtime';
import plugins from './plugins';

const app = createApp(App);
app.use(ElementPlus);
app.use(ElementPlusJSX, {
  tablePlugins: plugins.tablePlugins,
});
app.mount('#app');
