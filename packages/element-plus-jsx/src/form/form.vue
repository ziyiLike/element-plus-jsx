<script lang="tsx">
import { defineComponent, getCurrentInstance, shallowReactive, shallowRef, useModel } from 'vue'
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElForm, ElFormItem } from 'element-plus'
import { FormItemProps } from './types'
import { getConfig, installPlugins, transWidth } from '../_utils'
import { useFnOrRefProp } from '../hooks'
import defaultPlugins from './plugins'

export default defineComponent({
  props: {
    model: { type: Object as PropType<any>, default: () => ({}) },
    formFn: { type: Array as PropType<FormItemProps[]>, default: () => [] }
  },
  setup(props, ctx) {
    const form = useModel(props, 'model')
    const formRef = shallowRef<FormInstance>()
    const plugins = getConfig(getCurrentInstance()!, 'formPlugins') || []

    // install default plugins
    plugins.unshift(...defaultPlugins)

    ctx.expose({ formRef })

    return () => (
      <ElForm
        style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
        ref={formRef}
        {...ctx.attrs}
        v-slots={ctx.slots}
        model={form.value}
      >
        {shallowReactive(
          installPlugins<FormItemProps[]>({ ...props, ...ctx, form, formRef, plugins }, 'formFn')
        )
          .filter((res) => useFnOrRefProp(res.show, { ...props, ...ctx, form, formRef }) ?? true)
          .map((fn, index) =>
            fn.slots?.row ? (
              <span style={{ width: transWidth(fn.width) || '100%' }}>
                {fn.slots.row({ ...props, ...ctx, form, formRef })}
              </span>
            ) : (
              <ElFormItem
                style={{ width: transWidth(fn.width) || '100%' }}
                key={index}
                v-slots={{
                  ...fn.slots,
                  default: () => fn.slots?.default?.({ ...props, ...ctx, form, formRef })
                }}
                {...fn}
              />
            )
          )}
      </ElForm>
    )
  }
})
</script>
