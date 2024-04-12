import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export default {
  rules: {
    /* 可以写 console */
    'no-console': 0,
    /* 没引入清空 */
    'unused-imports/no-unused-imports': 2,
    /* if 保留括号 */
    'curly': 0,
    /* else 不换行 */
    'style/brace-style': [2, '1tbs'],
    /* 最后一行不出现逗号 */
    'style/comma-dangle': [2, 'never'],
    /* 对象换行 */
    'object-curly-newline': [
      2,
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 6
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 6
        }
      }
    ],
    /* 使用字符串模板拼接 */
    'prefer-template': 2,
    /* 箭头函数只有一个参数或没有参数时，省略括号 */
    'style/arrow-parens': [2, 'as-needed']
  }
} as TypedFlatConfigItem
