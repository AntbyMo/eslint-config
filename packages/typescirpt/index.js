module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@antzy/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 使用数组 T[]
    '@typescript-eslint/array-type': 2
  }
}
