---
outline: deep
---

# useFormFn

此 hook 用于在配置`el-formx`对应的`formFn`参数时提供类型校验以及相应提示，属于`el-formx`的辅助性方法。

## 示例

```vue
<template>
  <el-formx :formFn="formFn" :model="form" />
</template>

<script setup lang="ts">
import { useFormFn } from 'element-plus-jsx'

type IForm = { name: string }

const form: IForm = {
  name: ''
}

const formFn = useFormFn<IForm>([
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
    placeholder: '请输入姓名',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  }
])
</script>
```

## Type Declarations

```ts
/**
 * 表单配置
 *
 * @param formFn 表单配置或表单配置函数
 * @param mapAddFormFn 映射到所有表单项的配置
 * @param args 函数参数
 *
 * @example 单独使用 `useFormFn` 可获得参数类型提示以及参数校验
 * const formFn = useFormFn([{ prop: 'name', label: '姓名', type: 'input' }], { size: 'mini' })
 *
 * @example 配合 `defineFormFn` 使用 （此用法主要用于将配置列拆分于单独文件）
 * const formFn = useFormFn(
 *    defineFormFn((userList:any[]) => [{ prop: 'name', label: '姓名', type: 'select', selectProps:{ options: userList } }]),
 *    { size: 'mini' },
 *    userList
 * )
 *
 */
export function useFormFn<T = unknown>(
  formFn: FormItemProps<T>[] | Fn<FormItemProps<T>[]>,
  mapAddFormFn: FormItemProps<T> = {},
  ...args: any[]
) {
  return (typeof formFn === 'function' ? formFn(...args) : formFn).map(formItem => {
    return { ...mapAddFormFn, ...formItem }
  })
}
```

## Type Association

```ts
export type FormItemProps<T = unknown> = Merge<
  Omit<Mutable<FormItemInstance>, 'prop'> & {
    width?: string | number
    show?: FnRefAble<boolean, FormPluginsProps<T>>
    prop?: keyof T | (string & {})
    slots?: {
      default?: (args: FormPluginsProps<T>) => Component | null
      row?: (args: FormPluginsProps<T>) => Component | null
      label?: ({ label }: { label: string }) => Component | null
      error?: ({ error }: { error: string }) => Component | null
    }

    type?:
      | 'input'
      | 'autocomplete'
      | 'cascader'
      | 'checkbox'
      | 'color-picker'
      | 'date-picker'
      | 'mention'
      | 'radio'
      | 'rate'
      | 'select'
      | 'select-v2'
      | 'slider'
      | 'switch'
      | 'time-picker'
      | 'time-select'
      | 'transfer'
      | 'tree'
      | 'upload'
      | (string & {})

    key?: string | number
    rules?: ArrayAble<FormItemRule>
    placeholder?: string
    disabled?: FnRefAble<boolean, FormPluginsProps<T>>

    // install type.
    inputProps?: InstallCustomType<InputInstance | InputNumberInstance | InputTagInstance>
    autocompleteProps?: InstallCustomType<AutocompleteInstance>
    cascaderProps?: InstallCustomType<CascaderInstance>
    checkboxProps?: InstallCustomType<CheckboxGroupInstance & { button: boolean }>
    checkboxOptions?: InstallCustomType<CheckboxInstance>[]
    checkboxButtonOptions?: InstallCustomType<CheckboxInstance>
    colorPickerProps?: InstallCustomType<ColorPickerInstance>
    datePickerProps?: InstallCustomType<DatePickerInstance>
    mentionProps?: InstallCustomType<MentionInstance>
    radioProps?: InstallCustomType<RadioGroupInstance>
    radioOptions?: InstallCustomType<RadioInstance>[]
    rateProps?: InstallCustomType<RateInstance>
    selectProps?: InstallCustomType<InstanceType<typeof ElSelect>>
    selectOptions?: InstallCustomType<InstanceType<typeof ElOption>>[]
    selectGroupOptions?: InstallCustomType<
      InstanceType<typeof ElOptionGroup> & {
        selectOptions?: InstallCustomType<InstanceType<typeof ElOption>>
      }
    >[]
    selectV2Props?: InstallCustomType<InstanceType<typeof ElSelectV2>>
    sliderProps?: InstallCustomType<SliderInstance>
    switchProps?: InstallCustomType<SwitchInstance>
    timePickerProps?: InstallCustomType<InstanceType<typeof ElTimePicker>>
    timeSelectProps?: InstallCustomType<TimeSelectInstance>
    transferProps?: InstallCustomType<TransferInstance>
    treeProps?: InstallCustomType<TreeInstance>
    uploadProps?: InstallCustomType<UploadInstance>
  },
  ElementPlusJsx.FormFnExtend<T>
>

export type FormProps<T = unknown> = ElFormProps & {
  model?: T
  slots?: {
    default?: Fn<Component | null>
  }
  plugins: Fn<FormItemProps<any>[]>[]
  formFn: FnAble<FormItemProps[]>
  [key: string]: any
}

export type FormPluginsProps<T = unknown> = {
  form: Ref<T>
  formFn: FormItemProps<T>[]
  slots?: Record<string, Component>
  attrs?: Record<string, any>
  formRef: Ref<FormInstance>
  emit: (event: string, ...args: any[]) => void
  expose: any
}
```
