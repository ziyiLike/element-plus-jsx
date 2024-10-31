/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');
const rollup = require('rollup').rollup;
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const typescript = require('rollup-plugin-typescript2');
const nodeResolve = require('@rollup/plugin-node-resolve');
const rimraf = require('rimraf');

const build = async () => {
  const bundle = await rollup({
    input: 'src/index.ts',
    plugins: [nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.vue'] }), typescript({ abortOnError: false, check: false }), vue(), vueJsx()],
    external: ['vue', 'lodash-es', /^element-plus/],
  });

  rimraf.sync('es');

  return await bundle.write({
    format: 'esm',
    dir: 'es',
    entryFileNames: `[name].js`,
    preserveModules: true,
    preserveModulesRoot: path.resolve(__dirname, './src'),
  });
};

build();
