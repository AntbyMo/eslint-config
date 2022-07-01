module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      }
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@antzy/eslint-config-ts'
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3, // 属性超过3个自动换行
        },
        multiline: {
          max: 1, // 换行后 同一行不能超过1个
        },
      },
    ],
  },
}
