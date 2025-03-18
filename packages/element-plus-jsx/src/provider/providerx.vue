<template>
  <slot />
</template>

<script setup lang="tsx">
import { getCurrentInstance, provide, reactive, toRefs, useSlots } from 'vue'
import { providerInjectKey } from './context'
import { Fn } from 'src/tools'
import { TableColumn, TableProps } from 'src/table/types'
import { FormItemProps, FormProps } from 'src/form/types'

const props = defineProps<{
  tableProps?: TableProps<any>
  formProps?: FormProps<any>
  tablePlugins?: Fn<TableColumn<any>[]>[]
  formPlugins?: Fn<FormItemProps<any>[]>[]
}>()

const slots = useSlots()

const { tableProps, formProps, tablePlugins, formPlugins } = toRefs(props)

const contextConfig = reactive({
  slots,
  tableProps,
  formProps,
  tablePlugins,
  formPlugins
})

const instance = getCurrentInstance()

if (instance) {
  instance.appContext.app.provide(providerInjectKey, contextConfig)
} else {
  provide(providerInjectKey, contextConfig)
}
</script>
