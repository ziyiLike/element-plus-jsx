import { ElTablex } from './table/index.js';
import { setGlobalConfig } from './_utils/index.js';

const components = { ElTablex };
const install = (app, options) => {
    if (options?.tablePlugins) {
        setGlobalConfig(app, { tablePlugins: options.tablePlugins });
    }
    for (const key of Object.keys(components)) {
        app.use(components[key], options);
    }
};
const ElementPlusJsx = {
    install,
    ...components
};

export { ElementPlusJsx as default };
