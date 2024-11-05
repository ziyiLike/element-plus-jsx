import { _get, _set } from '../../_utils'
import { defineFormPlugin, useFnOrRefProp } from '../../hooks'
import { ElRate } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'rate') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElRate
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              disabled={useFnOrRefProp(item.disabled, props)}
              placeholder={item.placeholder}
              v-slots={item.rateProps?.slots}
              {...item.rateProps}
            />
          )
        }
      }
    }
    return item
  })
})
