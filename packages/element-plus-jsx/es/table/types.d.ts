import { TableColumnCtx, TableProps as ElTableProps } from 'element-plus';
import type { Component, Ref } from 'vue';
import type { FnRefAble } from '../tools';
import { CSSProperties, HTMLAttributes } from 'vue';
export type TableColumn<T = unknown> = Partial<TableColumnCtx<T>> & {
    prop?: string | keyof T;
    show?: FnRefAble<boolean>;
    slots?: {
        default?: (props: {
            row: T;
            column: TableColumnCtx<T>;
            $index: number;
        }) => Component | null;
        header?: (props: {
            column: TableColumnCtx<T>;
        }) => Component | null;
    };
    [key: string]: any;
};
export interface TableProps<T = unknown> extends ElTableProps<T> {
    columns: TableColumn<T>[];
    class?: HTMLAttributes['class'];
    style?: CSSProperties;
}
export type TablePluginsProps<T = unknown> = {
    columns: TableColumn<T>[];
    slots?: Record<string, Component>;
    attrs?: Record<string, any>;
    data: T[];
    tableRef: Ref<any>;
    [key: string]: any;
};
