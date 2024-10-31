import { toRaw } from 'vue';

const GLOBAL_CONFIG_NAME = '$el-element-jsx';
const setGlobalConfig = (app, extract) => {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
        ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
        ...extract
    };
};
const getConfig = (instance, key) => {
    return instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.[key];
};
const installPlugins = (args, useKey) => {
    console.log(toRaw(args));
    let pluginReturn = args[useKey];
    args.plugins.forEach((fn) => {
        pluginReturn = fn(Object.assign(toRaw(args), { [useKey]: pluginReturn }));
    });
    return pluginReturn;
};

export { getConfig, installPlugins, setGlobalConfig };
