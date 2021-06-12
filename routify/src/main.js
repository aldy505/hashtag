import hmr from '@roxi/routify/hmr';
import App from './App.svelte';
// A import 'virtual:windi.css';

const app = hmr(App, {target: document.body}, 'routify-app');

export default app;
