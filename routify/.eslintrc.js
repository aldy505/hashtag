module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'xo-space/esnext'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
  }
};
