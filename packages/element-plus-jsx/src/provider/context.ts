import { FormItemProps, FormProps } from '../form/types'
import { TableColumn, TableProps } from '../table/types'
import { Fn } from 'src/tools'
import { InjectionKey } from 'vue'

export interface provider {
  slots?: Readonly<Record<string, any>>
  tableProps?: TableProps<any>
  formProps?: FormProps<any>
  tablePlugins?: Fn<TableColumn<any>[]>[]
  formPlugins?: Fn<FormItemProps<any>[]>[]
}

export const providerInjectKey: InjectionKey<provider> = Symbol('EPXProvider')
