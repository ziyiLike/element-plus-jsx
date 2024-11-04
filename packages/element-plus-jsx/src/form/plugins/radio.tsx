import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElRadioGroup, ElRadio, ElRadioButton } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'radio') {
      const RadioEl = item.radioProps?.button ? ElRadioButton : ElRadio
      return {
        ...item,
        slots: {
          default: () => (
            <ElRadioGroup
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              v-slots={item.radioProps?.slots}
              {...item.radioProps}
            >
              {item.radioOptions?.map((option) => {
                return <RadioEl {...option} v-slots={option.slots}></RadioEl>
              })}
            </ElRadioGroup>
          )
        }
      }
    }
    return item
  })
})