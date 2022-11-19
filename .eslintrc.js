module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-multi-spaces': ['error'],
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error'
  }
}
