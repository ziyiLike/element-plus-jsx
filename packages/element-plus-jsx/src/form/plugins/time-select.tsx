import { _get, _set } from '../../_utils'
import { defineFormPlugin, useFnOrRefProp } from '../../hooks'
import { ElTimeSelect } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'time-select') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElTimeSelect
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              disabled={useFnOrRefProp(item.disabled, props)}
              placeholder={item.placeholder}
              v-slots={item.timeSelectProps?.slots}
              {...item.timeSelectProps}
            />
          )
        }
      }
    }
    return item
  })
})
