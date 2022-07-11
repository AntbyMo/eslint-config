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
    '@typescript-eslint/array-type': 2,

    // | or && 排序
    '@typescript-eslint/sort-type-union-intersection-members': 2,

    // 中缀运算符周围需要间距
    '@typescript-eslint/space-infix-ops': 2

  }
}
