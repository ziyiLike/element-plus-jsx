import type { App, ComponentInternalInstance } from 'vue';
export declare const setGlobalConfig: (app: App, extract: Record<string, any>) => void;
export declare const getConfig: (instance: ComponentInternalInstance, key: string) => any;
export declare const installPlugins: <T = any>(args: any, useKey: string) => T;
