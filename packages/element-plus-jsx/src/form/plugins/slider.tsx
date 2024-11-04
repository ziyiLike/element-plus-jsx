import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElSlider } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'slider') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElSlider
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              v-slots={item.sliderProps?.slots}
              {...item.sliderProps}
            />
          )
        }
      }
    }
    return item
  })
})
