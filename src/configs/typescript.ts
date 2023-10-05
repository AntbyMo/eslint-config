import { parserTs, pluginTs } from '../plugins'

export default [
  {
    languageOptions: {
      parser: parserTs
    },
    plugins: {
      ts: pluginTs as any
    },
    rules: {
      ...pluginTs.configs['eslint-recommended'].overrides![0].rules,

      // 可以使用any
      'ts/no-explicit-any': 0,

      // 可以使用require
      'ts/no-var-requires': 0,

      // 去掉禁止使用!后缀运算符
      'ts/no-non-null-assertion': 0,

      // 使用数组 T[]
      'ts/array-type': 2,

      // 中缀运算符周围需要间距
      'ts/space-infix-ops': 2,

      // 禁止不必要的分号
      'ts/semi': [2, 'never'],

      // 禁止 if else 换行
      'ts/brace-style': 0,

      // 禁止函数没在声明前使用
      'ts/no-use-before-define': 0,

      // 要求或不允许尾随逗号
      'ts/comma-dangle': [2, 'never'],

      // 类型注释间距
      'ts/type-annotation-spacing': [
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
      'ts/consistent-generic-constructors': [2, 'constructor'],

      // 强制使用 Record
      'ts/consistent-indexed-object-style': [2, 'record'],

      // interface type 不要分号和逗号
      'ts/member-delimiter-style': [
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
      'ts/method-signature-style': [2, 'property'],

      // interface 后面加空格
      'ts/space-before-blocks': 2,

      // 使用引用类型时自动加上 type
      'ts/consistent-type-imports': [
        2,
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false
        }
      ],

      // 对象类型使用interface
      'ts/consistent-type-definitions': [2, 'interface'],

      // 缩进
      'indent': 0,
      'ts/indent': [2, 2],

      // 可以使用 @ts-xxx
      'ts/ban-ts-comment': 0
    }
  }
]
