import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'checkbox') {
      const CheckBoxEl = item.checkboxProps?.button ? ElCheckboxButton : ElCheckbox
      return {
        ...item,
        slots: {
          default: () => (
            <ElCheckboxGroup
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              v-slots={item.checkboxProps?.slots}
              {...item.checkboxProps}
            >
              {item.checkboxOptions?.map((option) => {
                return <CheckBoxEl {...option} v-slots={option.slots}></CheckBoxEl>
              })}
            </ElCheckboxGroup>
          )
        }
      }
    }
    return item
  })
})
