import type {
  FormProps as ElFormProps,
  FormItemInstance,
  FormItemRule,
  FormInstance,
  InputInstance,
  InputNumberInstance,
  AutocompleteInstance,
  CascaderInstance,
  CheckboxGroupInstance,
  CheckboxInstance,
  ColorPickerInstance,
  DatePickerInstance,
  MentionInstance,
  RadioGroupInstance,
  RadioInstance,
  RateInstance,
  ElSelect,
  ElOptionGroup,
  ElOption,
  ElSelectV2,
  SliderInstance,
  SwitchInstance,
  ElTimePicker,
  TimeSelectInstance,
  TransferInstance,
  TreeInstance,
  UploadInstance
} from 'element-plus'
import { InstallCustomType, Fn, FnAble, FnRefAble, ArrayAble } from '../tools'
import { Component, Ref } from 'vue'

export type FormItemProps<T = unknown> = Partial<FormItemInstance> & {
  width?: string | number
  show?: FnRefAble<boolean, FormPluginsProps<T>>
  prop?: string | keyof T
  slots?: {
    default?: ({ form, formRef }: { form: T; formRef: Ref<FormInstance> }) => Component | null
    row?: ({ form, formRef }: { form: T; formRef: Ref<FormInstance> }) => Component | null
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

  key?: string | number
  rules?: ArrayAble<FormItemRule>
  placeholder?: string

  // install type.
  inputProps?: InstallCustomType<InputInstance | InputNumberInstance>
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
  selectGroupOption?: InstallCustomType<
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

  [key: string]: any
}

export type FormProps<T = unknown> = ElFormProps & {
  modelValue?: T
  slots?: {
    default?: Fn<Component | null>
  }
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
