import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import windiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [vue(), windiCSS()],
});
