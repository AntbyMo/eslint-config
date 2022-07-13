module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist'],
  extends: ['standard'],
  parserOptions: { ecmaVersion: 'latest' },
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
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single'
        ]
      }
    ],

    // 关闭不允许多余的return
    'no-useless-return': 0,

    // 最后不能留空行
    'no-multiple-empty-lines': [2, { max: 1 }],

    // 括号前后 >= 3个换行
    'array-bracket-newline': [
      2,
      {
        multiline: true,
        minItems: 3
      }
    ],

    // 括号内的元素 >= 3个换行
    'array-element-newline': [
      2,
      {
        multiline: true,
        minItems: 3
      }
    ],

    // 函数括号内参数有一个换行就换行
    'function-paren-newline': [2, 'multiline'],

    // 方法链 >= 3个换行
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],

    // import 超过6个换行
    'object-curly-newline': [
      2,
      {
        ImportDeclaration: {
          multiline: true,
          minProperties: 6
        }
      }
    ],

    // 花括号属性强制换行，
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }]
  }
}
