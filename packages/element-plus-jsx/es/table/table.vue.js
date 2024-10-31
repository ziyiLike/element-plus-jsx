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
  setup(_, {
    attrs,
    slots
  }) {
    const tableRef = shallowRef();
    const plugins = getConfig(getCurrentInstance(), 'tablePlugins') || [];
    return {
      attrs,
      slots,
      plugins,
      tableRef
    };
  },
  render() {
    const {
      slots,
      attrs,
      data
    } = this;
    return createVNode(ElTable, mergeProps({
      "ref": "tableRef"
    }, attrs, {
      "data": data,
      "element-loading-text": attrs.elementLoadingText || 'Loading ...'
    }), {
      default: () => [shallowReactive(installPlugins(this, 'columns')).filter(res => useFnOrRefProp(res.show) ?? true).map((column, index) => createVNode(ElTableColumn, mergeProps({
        "key": index
      }, column), {
        default: column.slots?.default,
        header: column.slots?.header
      }))],
      ...slots
    });
  }
});

export { _sfc_main as default };
