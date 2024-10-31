import { defineComponent, shallowRef, getCurrentInstance, createVNode, mergeProps, shallowReactive } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
import { useFnOrRefProp } from '../hooks.js';
import { getConfig, installPlugins } from '../_utils/index.js';

var _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(props, ctx) {
    const tableRef = shallowRef();
    const plugins = getConfig(getCurrentInstance(), 'tablePlugins') || [];
    ctx.expose({
      tableRef
    });
    return () => createVNode(ElTable, mergeProps({
      "ref": tableRef
    }, ctx.attrs, {
      "data": props.data,
      "element-loading-text": ctx.attrs.elementLoadingText || 'Loading ...'
    }), {
      default: () => [shallowReactive(installPlugins({
        ...props,
        ...ctx,
        tableRef,
        plugins
      }, 'columns')).filter(res => useFnOrRefProp(res.show) ?? true).map((column, index) => createVNode(ElTableColumn, mergeProps({
        "key": index
      }, column), {
        default: column.slots?.default,
        header: column.slots?.header
      }))],
      ...ctx.slots
    });
  }
});

export { _sfc_main as default };
