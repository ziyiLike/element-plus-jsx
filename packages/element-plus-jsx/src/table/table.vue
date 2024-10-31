<script lang="tsx">
import { defineComponent, getCurrentInstance, shallowReactive, shallowRef } from 'vue'
import type { PropType } from 'vue'
import type { TableColumn } from './types'
import { ElTable, ElTableColumn, type TableInstance } from 'element-plus'
import { useFnOrRefProp } from '../hooks'
import { getConfig, installPlugins } from '../../src/_utils'

export default defineComponent({
  props: {
    data: { type: Array, default: () => [] },
    columns: { type: Array as PropType<TableColumn[]>, default: () => [], required: true }
  },
  setup(props, ctx) {
    const tableRef = shallowRef<TableInstance>()
    const plugins = getConfig(getCurrentInstance()!, 'tablePlugins') || []

    ctx.expose({ tableRef })

    return () => (
      <ElTable
        ref={tableRef}
        {...ctx.attrs}
        v-slots={ctx.slots}
        data={props.data}
        element-loading-text={ctx.attrs.elementLoadingText || 'Loading ...'}
      >
        {shallowReactive(
          installPlugins<TableColumn[]>({ ...props, ...ctx, tableRef, plugins }, 'columns')
        )
          .filter((res) => useFnOrRefProp(res.show) ?? true)
          .map((column, index) => (
            <ElTableColumn
              key={index}
              {...column}
              v-slots={{ default: column.slots?.default, header: column.slots?.header }}
            />
          ))}
      </ElTable>
    )
  }
})
</script>
