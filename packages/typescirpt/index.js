module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@antzy/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {

    // 去掉禁止使用!后缀运算符
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 使用数组 T[]
    '@typescript-eslint/array-type': 2,

    // | or && 排序
    '@typescript-eslint/sort-type-union-intersection-members': 2,

    // 中缀运算符周围需要间距
    '@typescript-eslint/space-infix-ops': 2,

    // 禁止不必要的分号
    '@typescript-eslint/semi': [2, 'never'],

    // 要求或不允许尾随逗号
    '@typescript-eslint/comma-dangle': [
      2,
      {
        tuples: 'never',
        objects: 'never'
      }
    ],

    // 类型注释间距
    '@typescript-eslint/type-annotation-spacing': [
      2,
      {
        overrides: {
          colon: {
            before: false,
            after: true
          },
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],

    // 如果使用构造函数 泛型就要这样写 new Map<string,number>()
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],

    // 强制使用 Record
    '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],

    // interface type 不要分号和逗号
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],

    // 函数声明 func: (arg: string) => number
    '@typescript-eslint/method-signature-style': [2, 'property'],

    // interface 后面加空格
    '@typescript-eslint/space-before-blocks': 2,

    // 使用引用类型时自动加上 type
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }
    ],

    // 对象类型使用interface
    '@typescript-eslint/consistent-type-definitions': [2, 'interface']

  }
}
