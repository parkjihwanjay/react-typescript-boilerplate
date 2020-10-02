module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  parser: 'babel-eslint',
};
