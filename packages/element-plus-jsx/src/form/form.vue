<script lang="tsx">
import { defineComponent, getCurrentInstance, shallowReactive, shallowRef, useModel } from 'vue'
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElForm, ElFormItem } from 'element-plus'
import { FormItemProps } from './types'
import { getConfig, installPlugins } from '../_utils'
import { useFnOrRefProp } from '../hooks'

export default defineComponent({
  props: {
    modelValue: { type: Object as PropType<any>, default: () => ({}) },
    formFn: { type: Array as PropType<FormItemProps[]>, default: () => [] }
  },
  setup(props, ctx) {
    const form = useModel(props, 'modelValue')
    const formRef = shallowRef<FormInstance>()
    const plugins = getConfig(getCurrentInstance()!, 'formPlugins') || []

    ctx.expose({ formRef })

    return () => (
      <ElForm ref={formRef} {...ctx.attrs} v-slots={ctx.slots} model={form.value}>
        {shallowReactive(
          installPlugins<FormItemProps[]>({ ...props, ...ctx, form, formRef, plugins }, 'formFn')
        )
          .filter((res) => useFnOrRefProp(res.show, { ...props, ...ctx, form, formRef }) ?? true)
          .map((fn, index) => (
            <ElFormItem key={index} {...fn} v-slots={fn.slots} />
          ))}
      </ElForm>
    )
  }
})
</script>
