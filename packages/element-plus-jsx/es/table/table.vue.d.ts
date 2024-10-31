import type { PropType } from 'vue';
import type { TableColumn } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
        required: true;
    };
}>, {
    attrs: {
        [x: string]: unknown;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    plugins: any;
    tableRef: import("vue").ShallowRef<import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: PropType<import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: PropType<((row: any, treeNode: import("element-plus").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean | undefined, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        data: any[];
        style: import("vue").CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        defaultExpandAll: boolean;
        indent: number;
        stripe: boolean;
        treeProps: import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        selectOnIndeterminate: boolean;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: PropType<import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: PropType<((row: any, treeNode: import("element-plus").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean | undefined, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, {}, {}, {}, {
        data: any[];
        style: import("vue").CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        defaultExpandAll: boolean;
        indent: number;
        stripe: boolean;
        treeProps: import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        selectOnIndeterminate: boolean;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }> | undefined, import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: PropType<import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: PropType<((row: any, treeNode: import("element-plus").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean | undefined, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        data: any[];
        style: import("vue").CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        defaultExpandAll: boolean;
        indent: number;
        stripe: boolean;
        treeProps: import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        selectOnIndeterminate: boolean;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        size: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: PropType<string | ((row: any) => string) | undefined>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: PropType<import("element-plus").SummaryMethod<any> | undefined>;
        rowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        rowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        cellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        cellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        headerRowClassName: PropType<import("element-plus").ColumnCls<any> | undefined>;
        headerRowStyle: PropType<import("element-plus").ColumnStyle<any> | undefined>;
        headerCellClassName: PropType<import("element-plus").CellCls<any> | undefined>;
        headerCellStyle: PropType<import("element-plus").CellStyle<any> | undefined>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: PropType<string[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: PropType<import("element-plus").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        spanMethod: PropType<((data: {
            row: any;
            rowIndex: number;
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            columnIndex: number;
        }) => number[] | {
            rowspan: number;
            colspan: number;
        } | undefined) | undefined>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: PropType<import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: PropType<((row: any, treeNode: import("element-plus").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
        style: {
            type: PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: PropType<"auto" | "fixed">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "appendTo" | "transition" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import("element-plus/es/components/table/src/table-layout").default<any>;
        store: any;
        columns: import("vue").ComputedRef<import("element-plus").TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import("vue").ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import("vue").Ref<boolean>;
        isEmpty: import("vue").ComputedRef<boolean>;
        renderExpanded: import("vue").Ref<null>;
        resizeProxyVisible: import("vue").Ref<boolean>;
        resizeState: import("vue").Ref<{
            width: number | null;
            height: number | null;
            headerHeight: number | null;
        }>;
        isGroup: import("vue").Ref<boolean>;
        bodyWidth: import("vue").ComputedRef<string>;
        tableBodyStyles: import("vue").ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import("vue").ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import("lodash-es").DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean | undefined, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[] | undefined) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import("element-plus").Translator;
        setDragVisible: (visible: boolean) => void;
        context: import("element-plus").Table<any>;
        computedSumText: import("vue").ComputedRef<string>;
        computedEmptyText: import("vue").ComputedRef<string>;
        tableLayout: import("vue").ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        tableInnerStyle: import("vue").ComputedRef<{
            height: string | number;
            maxHeight?: undefined;
        } | {
            maxHeight: string | number;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollbarStyle: import("vue").ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import("vue").Ref<any>;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
        setScrollLeft: (left?: number | undefined) => void;
        setScrollTop: (top?: number | undefined) => void;
    }, {}, {}, {}, {
        data: any[];
        style: import("vue").CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        defaultExpandAll: boolean;
        indent: number;
        stripe: boolean;
        treeProps: import("element-plus/es/components/table/src/table/defaults").TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        selectOnIndeterminate: boolean;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }> | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
        required: true;
    };
}>> & Readonly<{}>, {
    data: unknown[];
    columns: TableColumn[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
