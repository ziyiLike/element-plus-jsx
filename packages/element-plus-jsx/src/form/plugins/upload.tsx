import { _get, _set } from '../../_utils'
import { defineFormPlugin } from '../../hooks'
import { ElUpload } from 'element-plus'

export default defineFormPlugin((props) => {
  return props.formFn.map((item) => {
    if (!item.slots?.default && item.type === 'upload') {
      return {
        ...item,
        slots: {
          default: () => (
            <ElUpload
              style={{ width: '100%' }}
              file-list={_get(props.form.value, item.prop)}
              onUpdate:file-list={(val) => {
                _set(props.form.value, item.prop, val)
              }}
              placeholder={item.placeholder}
              v-slots={item.uploadProps?.slots}
              {...item.uploadProps}
            />
          )
        }
      }
    }
    return item
  })
})
