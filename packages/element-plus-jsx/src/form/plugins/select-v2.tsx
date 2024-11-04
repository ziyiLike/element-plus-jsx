import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElSelectV2 } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'select-v2') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElSelectV2
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              v-slots={item.selectV2Props?.slots}
              {...item.selectV2Props}
            />
          )
        }
      }
    }
    return item
  })
})
