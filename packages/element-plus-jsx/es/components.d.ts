declare module 'vue' {
    interface GlobalComponents {
        ElTablex: typeof import('element-plus-jsx')['ElTablex'];
    }
    interface ComponentCustomProperties {
    }
}
export {};
