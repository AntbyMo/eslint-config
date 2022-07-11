module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist'],
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // arrow function omit bracket
    'arrow-parens': ['error', 'as-needed'],
    // import 排序
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    // 关闭不允许多余的return
    'no-useless-return': 0,

    // 最后不能留空行
    'no-multiple-empty-lines': [2, { max: 1 }]

  }
}
