import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElColorPicker } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'color-picker') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElColorPicker
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              v-slots={item.colorPickerProps?.slots}
              {...item.colorPickerProps}
            />
          )
        }
      }
    }
    return item
  })
})
