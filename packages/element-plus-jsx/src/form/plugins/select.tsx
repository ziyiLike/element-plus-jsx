import { _get, _set } from '../../_utils'
import { defineFormFnPlugin, useFnOrRefProp } from '../../hooks'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'

export default defineFormFnPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'select') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElSelect
              style={{ width: '100%' }}
              modelValue={_get(props.form.value, item.prop)}
              onUpdate:modelValue={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              disabled={useFnOrRefProp(item.disabled, props)}
              v-slots={item.selectProps?.slots}
              {...item.selectProps}
            >
              {item.selectGroupOptions?.map((groupOption) => {
                return (
                  <ElOptionGroup {...groupOption} v-slots={groupOption.slots}>
                    {groupOption.selectOptions?.map((option) => {
                      return <ElOption {...option} v-slots={option.slots} />
                    })}
                  </ElOptionGroup>
                )
              })}
              {item.selectOptions?.map((option) => {
                return <ElOption {...option} v-slots={option.slots} />
              })}
            </ElSelect>
          )
        }
      }
    }
    return item
  })
})
