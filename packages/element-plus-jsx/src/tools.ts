import type { Ref, Plugin, Component } from 'vue'

export type Fn<T = any> = (...args: any[]) => T
export type FnAble<T> = T | ((...args: any[]) => T)
export type ArrayAble<T> = T | T[]
export type RefAble<T> = Ref<T> | T
export type FnRefAble<T, R = any> = T | Ref<T> | ((args: R) => T)
export type LooseRequired<T> = { [P in keyof T & Required<T>]: T[P] }
export type LooseValueOf<T> = T extends ArrayAble<infer U> ? U : T
export type Options<T = any, E = any> = {
  prefix?: string
  tablePlugins?: T[]
  formPlugins?: E[]
}
export type WithInstall<T> = T & Plugin
export type InstallCustomType<T> = Partial<LooseRequired<T>> & {
  slots?: Record<string, Fn<Component | null>>
  [key: string]: any
}
export type Merge<T, U> = {
  [K in keyof T | keyof U]?: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never
}
