module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@antzy/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 类型注释间距
    '@typescript-eslint/type-annotation-spacing': 2,

    // 使用数组 T[]
    '@typescript-eslint/array-type': 2,

    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'semi',
        requireLast: false
      }
    }]
  }
}
