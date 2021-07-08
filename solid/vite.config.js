import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  publicDir: 'public',
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
