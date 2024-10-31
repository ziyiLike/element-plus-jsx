<script lang="tsx">
import { defineComponent, shallowRef, useModel } from 'vue'
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElForm, ElFormItem } from 'element-plus'
import { FormItemProps } from './types'

export default defineComponent({
  props: {
    modelValue: { type: Object as PropType<any>, default: () => ({}) },
    formFn: { type: Array as PropType<FormItemProps[]>, default: () => [] }
  },
  setup(props, ctx) {
    const form = useModel(props, 'modelValue')
    const formRef = shallowRef<FormInstance>()

    ctx.expose({ formRef })

    return () => (
      <ElForm
        ref={formRef}
        {...ctx.attrs}
        v-slots={ctx.slots}
        model={form.value}
        element-loading-text={ctx.attrs.elementLoadingText || 'Loading ...'}
      >
        {props.formFn.map((fn, index) => (
          <ElFormItem key={index} {...fn} v-slots={fn.slots} />
        ))}
      </ElForm>
    )
  }
})
</script>
