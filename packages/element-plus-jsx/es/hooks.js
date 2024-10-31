import { isRef } from 'vue';

function useFnOrRefProp(prop, ...args) {
    return typeof prop === 'function' ? prop(...args) : isRef(prop) ? prop.value : prop;
}
/**
 * 列配置
 *
 * @param columns 列配置或列配置函数
 * @param mapAddColumns 映射到所有列的配置项
 * @param args 函数参数
 *
 * @example 单独使用 `useColumns` 可获得参数类型提示以及参数校验
 * const columns = useColumns([{ prop: 'name', label: '姓名' }], { align: 'center' })
 *
 * @example 配合 `defineColumns` 使用 （此用法主要用于将配置列拆分于单独文件）
 * const columns = useColumns(
 *    defineColumns((editClick:Fn, deleteClick:Fn) => [{ prop: 'name', label: '姓名' }]),
 *    editClick,
 *    deleteClick
 * )
 *
 */
function useColumns(columns, mapAddColumns, ...args) {
    return (typeof columns === 'function' ? columns(...args) : columns).map((column) => {
        return { ...column, ...mapAddColumns };
    });
}
/**
 * 定义列配置函数
 * - 使用`defineColumns`与`useColumns`配合可轻松的将配置拆分至多个文件
 *
 * @param fn 列配置函数
 * @returns
 *
 * @example
 * - example/page/xxx/columns/exampleColumns.tsx
 * export default defineColumns((editClick:Fn, deleteClick:Fn) => [{ prop: 'name', label: '姓名' }, ···])
 *
 * - example/page/xxx/index.vue
 * import exampleColumns from './columns/exampleColumns'
 *
 * <el-tablex :data="data" :columns="useColumns(exampleColumns, editClick, deleteClick)" />
 */
function defineColumns(fn) {
    return fn;
}
/**
 * 定义Tablex插件 fn
 * @param fn 插件函数
 * @returns
 *
 * @example
 * const xxxTableplugin = defineColumnsPlugin((props) => props.columns)
 */
function defineColumnsPlugin(fn) {
    return fn;
}
/**
 * 注册组件
 * @param main 主组件
 * @param extra 挂载的子组件
 * @returns
 */
function useWithInstall(main, extra) {
    main.install = (app, options) => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component((options?.prefix ?? comp.prefix) + comp.name, comp);
        }
    };
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
        }
    }
    return main;
}

export { defineColumns, defineColumnsPlugin, useColumns, useFnOrRefProp, useWithInstall };
