import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export default {
  files: ['**/*.vue'],
  rules: {
    'style/indent': 0,
    /* script 缩进两列 */
    'vue/script-indent': [2, 2, { baseIndent: 1 }],
    /* 属性超过3个自动换行，换行后 同一行不能超过1个 */
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: { max: 3 },
        multiline: { max: 1 }
      }
    ]
  }
} as TypedFlatConfigItem
