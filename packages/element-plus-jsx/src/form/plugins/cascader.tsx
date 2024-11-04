import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElCascader } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'cascader') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElCascader
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              v-slots={item.cascaderProps?.slots}
              {...item.cascaderProps}
            />
          )
        }
      }
    }
    return item
  })
})
