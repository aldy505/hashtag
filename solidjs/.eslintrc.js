module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo-space',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    // 'jsx-a11y',
  ],
  rules: {
    'new-cap': ['off'],
  },
};