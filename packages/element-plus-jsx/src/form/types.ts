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
import { InstallCustomType, Fn, FnRefAble, ArrayAble, LooseRequired, Merge } from '../tools'
import { Component, Ref } from 'vue'

export type FormItemProps<T = unknown> = Merge<
  Omit<LooseRequired<FormItemInstance>, 'prop'> & {
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
      | string

    key?: string | number
    rules?: ArrayAble<FormItemRule>
    placeholder?: string
    disabled?: FnRefAble<boolean, FormPluginsProps<T>>

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
  formFn: FormItemProps[]
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
