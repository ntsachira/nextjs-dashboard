// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, node: true, es2021: true },
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2021, sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'tailwindcss/classnames-order': 'warn'
  },
  settings: { react: { version: 'detect' } }
};