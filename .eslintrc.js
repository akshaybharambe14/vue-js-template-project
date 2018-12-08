module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['prettier', 'prettier/standard', 'plugin:vue/recommended'],
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
