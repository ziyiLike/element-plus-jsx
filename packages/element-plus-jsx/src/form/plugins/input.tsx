import { _get, _set } from '../../_utils'
import { defineFormFnPlugin, useFnOrRefProp } from '../../hooks'
import { ElInput, ElInputNumber, ElInputTag } from 'element-plus'

export default defineFormFnPlugin((props) => {
  return props.formFn.map((item) => {
    const InputEl =
      item.inputProps?.type === 'input-number'
        ? ElInputNumber
        : item.inputProps?.type === 'input-tag'
        ? ElInputTag
        : ElInput
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
                  ['number', 'input-number'].includes(item.inputProps?.type) ? Number(val) : val
                )
              }}
              disabled={useFnOrRefProp(item.disabled, props)}
              placeholder={item.placeholder}
              v-slots={item.inputProps?.slots}
              {...item.inputProps}
            />
          )
        }
      }
    }
    return item
  })
})
