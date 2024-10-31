import {
  FormProps as ElFormProps,
  FormItemProps as ElFormItemProps,
  FormContext
} from 'element-plus'
import { Fn, FnAble } from '../tools'
import { Component } from 'vue'

export type FormItemProps = Partial<ElFormItemProps> & {
  slots?: {
    default?: Fn<Component | null>
    label?: ({ label }: { label: string }) => Component | null
    error?: ({ error }: { error: string }) => Component | null
  }
  [key: string]: any
}

export type FormProps = ElFormProps & {
  slots?: {
    default?: Fn<Component | null>
  }
  formFn: FnAble<FormItemProps[]>
  [key: string]: any
}
