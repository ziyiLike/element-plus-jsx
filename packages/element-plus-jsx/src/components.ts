// @ts-nocheck

declare module 'vue' {
  export interface GlobalComponents {
    ElTablex: typeof import('element-plus-jsx')['ElTablex']
    ElFormx: typeof import('element-plus-jsx')['ElFormx']
  }

  export interface ComponentCustomProperties {}
}

export {}
