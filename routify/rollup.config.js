import svelte from 'rollup-plugin-svelte-hot';
import hmr from 'rollup-plugin-hot';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import {copySync, removeSync} from 'fs-extra';
import {spassr} from 'spassr';
import getConfig from '@roxi/routify/lib/utils/config';
import autoPreprocess from 'svelte-preprocess';
import postcssImport from 'postcss-import';
import {injectManifest} from 'rollup-plugin-workbox';
// A import windiCSS from 'rollup-plugin-windicss';
import css from 'rollup-plugin-css-only';
import {windi} from 'svelte-windicss-preprocess';

const {distDir} = getConfig(); // Use Routify's distDir for SSOT
const assetsDir = 'assets';
const buildDir = `${distDir}/build`;
const isNollup = Boolean(process.env.NOLLUP);
const production = !process.env.ROLLUP_WATCH;

// Clear previous builds
removeSync(distDir);
removeSync(buildDir);

const serve = () => ({
  writeBundle: async () => {
    const options = {
      assetsDir: [assetsDir, distDir],
      entrypoint: `${assetsDir}/__app.html`,
      script: `${buildDir}/main.js`
    };
    spassr({...options, port: 5000});
    spassr({...options, ssr: true, port: 5005, ssrOptions: {inlineDynamicImports: true, dev: true}});
  }
});
const copyToDist = () => ({writeBundle() {
  copySync(assetsDir, distDir);
}});

export default {
  preserveEntrySignatures: false,
  input: ['src/main.js'],
  output: {
    sourcemap: true,
    format: 'esm',
    dir: buildDir,
    // For performance, disabling filename hashing in development
    chunkFileNames: `[name]${(production && '-[hash]') || ''}.js`
  },
  plugins: [
    svelte({
      emitCss: false,
      hot: isNollup,
      preprocess: [
        windi({
          configPath: 'windi.config.js'
        }),
        autoPreprocess({
          postcss: {plugins: [postcssImport()]},
          defaults: {style: 'postcss'}
        })
      ]
    }),
    css({output: 'bundle.css'}),

    // Resolve matching modules from current working directory
    resolve({
      browser: true,
      dedupe: importee => Boolean(importee.match(/svelte(\/|$)/))
    }),
    commonjs(),

    production && terser(),
    !production && !isNollup && serve(),
    !production && !isNollup && livereload(distDir), // Refresh entire window when code is updated
    !production && isNollup && hmr({inMemory: true, public: assetsDir}), // Refresh only updated code
    {
      // Provide node environment on the client
      transform: code => ({
        code: code.replace(/process\.env\.NODE_ENV/g, `"${process.env.NODE_ENV}"`),
        map: {mappings: ''}
      })
    },
    injectManifest({
      globDirectory: assetsDir,
      globPatterns: ['**/*.{js,css,svg}', '__app.html'],
      swSrc: 'src/sw.js',
      swDest: `${distDir}/serviceworker.js`,
      maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
      mode: 'production'
    }),
    production && copyToDist()
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100
  }
};
