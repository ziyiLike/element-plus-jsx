import { defineColumnsPlugin } from 'element-plus-jsx/runtime';

// 自定义属性插件
const tableEnumPlugin = defineColumnsPlugin(({ columns }) => {
  return columns.map((item) => {
    if (item.renderType === 'enum') {
      item.formatter = (_, __, cellValue) => {
        return item.enumData?.[cellValue];
      };
    }
    return item;
  });
});

// 自定义组件插件
const tableIndexPlugin = defineColumnsPlugin((props) => {
  return props.attrs?.showIndex ? [{ type: 'index', width: 55 }, ...props.columns] : props.columns;
});

const plugins = {
  tablePlugins: [tableEnumPlugin, tableIndexPlugin],
};

export default plugins;
