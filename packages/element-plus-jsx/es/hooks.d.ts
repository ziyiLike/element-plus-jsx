import { TableColumn, TablePluginsProps } from './table/types';
import type { Fn, WithInstall } from './tools';
export declare function useFnOrRefProp<T = any>(prop: any, ...args: any[]): T;
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
 *    { align: 'center' },
 *    editClick,
 *    deleteClick
 * )
 *
 */
export declare function useColumns<T = unknown>(columns: TableColumn<T>[] | ((...args: any[]) => TableColumn<T>[]), mapAddColumns: TableColumn<T>, ...args: any[]): {
    [x: string]: any;
    id?: string | undefined;
    realWidth?: number | undefined;
    type?: string | undefined;
    label?: string | undefined;
    className?: string | undefined;
    labelClassName?: string | undefined;
    property?: string | undefined;
    prop?: string | (string & keyof T) | undefined;
    width?: string | number | undefined;
    minWidth?: string | number | undefined;
    renderHeader?: ((data: {
        column: import("element-plus").TableColumnCtx<T>;
        $index: number;
    }) => import("vue").VNode) | undefined;
    sortable?: string | boolean | undefined;
    sortMethod?: ((a: T, b: T) => number) | undefined;
    sortBy?: string | string[] | ((row: T, index: number) => string) | undefined;
    resizable?: boolean | undefined;
    columnKey?: string | undefined;
    rawColumnKey?: string | undefined;
    align?: string | undefined;
    headerAlign?: string | undefined;
    showOverflowTooltip?: boolean | import("element-plus/es/components/table/src/util").TableOverflowTooltipOptions;
    fixed?: string | boolean | undefined;
    formatter?: ((row: T, column: import("element-plus").TableColumnCtx<T>, cellValue: any, index: number) => import("vue").VNode | string) | undefined;
    selectable?: ((row: T, index: number) => boolean) | undefined;
    reserveSelection?: boolean | undefined;
    filterMethod?: import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<T> | undefined;
    filteredValue?: string[] | undefined;
    filters?: import("element-plus/es/components/table/src/table-column/defaults").Filters | undefined;
    filterPlacement?: string | undefined;
    filterMultiple?: boolean | undefined;
    filterClassName?: string | undefined;
    index?: number | ((index: number) => number) | undefined;
    sortOrders?: ("ascending" | "descending" | null)[] | undefined;
    renderCell?: ((data: any) => void) | undefined;
    colSpan?: number | undefined;
    rowSpan?: number | undefined;
    children?: import("element-plus").TableColumnCtx<T>[] | undefined;
    level?: number | undefined;
    filterable?: boolean | import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<T> | import("element-plus/es/components/table/src/table-column/defaults").Filters | undefined;
    order?: string | undefined;
    isColumnGroup?: boolean | undefined;
    isSubColumn?: boolean | undefined;
    columns?: import("element-plus").TableColumnCtx<T>[] | undefined;
    getColumnIndex?: (() => number) | undefined;
    no?: number | undefined;
    filterOpened?: boolean;
    show?: import("./tools").FnRefAble<boolean>;
    slots?: {
        default?: ((props: {
            row: T;
            column: import("element-plus").TableColumnCtx<T>;
            $index: number;
        }) => import("vue").Component | null) | undefined;
        header?: ((props: {
            column: import("element-plus").TableColumnCtx<T>;
        }) => import("vue").Component | null) | undefined;
    } | undefined;
}[];
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
 * <el-tablex :data="data" :columns="useColumns(exampleColumns, {} editClick, deleteClick)" />
 */
export declare function defineColumns<T = unknown>(fn: Fn<TableColumn<T>[]>): Fn<TableColumn<T>[]>;
/**
 * 定义Tablex插件 fn
 * @param fn 插件函数
 * @returns
 *
 * @example
 * const xxxTableplugin = defineColumnsPlugin((props) => props.columns)
 */
export declare function defineColumnsPlugin<T = unknown>(fn: (props: TablePluginsProps) => TableColumn<T>[]): (props: TablePluginsProps) => TableColumn<T>[];
/**
 * 注册组件
 * @param main 主组件
 * @param extra 挂载的子组件
 * @returns
 */
export declare function useWithInstall<T, E extends Record<string, any>>(main: T, extra?: E): WithInstall<T> & E;
