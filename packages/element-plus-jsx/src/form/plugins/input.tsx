import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElInput, ElInputNumber } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    const InputEl = item.inputProps?.type === 'inputNumber' ? ElInputNumber : ElInput
    if (!item.slots?.default && item.type === 'input') {
      return {
        ...item,
        slots: {
          default: () => (
            <InputEl
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(
                  props.form.value,
                  item.prop,
                  ['number', 'inputNumber'].includes(item.inputProps?.type) ? Number(val) : val
                )
              }}
              placeholder={item.placeholder}
              {...item.inputProps}
            />
          )
        }
      }
    }
    return item
  })
})
