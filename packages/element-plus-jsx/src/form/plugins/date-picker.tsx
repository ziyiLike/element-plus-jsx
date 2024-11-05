import { _get, _set } from '../../_utils'
import { defineFormFnPlugin, useFnOrRefProp } from '../../hooks'
import { ElDatePicker } from 'element-plus'

export default defineFormFnPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'date-picker') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElDatePicker
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              disabled={useFnOrRefProp(item.disabled, props)}
              placeholder={item.placeholder}
              v-slots={item.datePickerProps?.slots}
              {...item.datePickerProps}
            />
          )
        }
      }
    }
    return item
  })
})
