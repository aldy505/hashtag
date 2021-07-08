import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import windiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [reactRefresh(), windiCSS()],
});
