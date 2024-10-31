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
}>, () => any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
