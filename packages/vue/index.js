module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
      rules: { indent: 0 }
    }
  ],
  extends: ['plugin:vue/vue3-recommended', '@antzy/eslint-config-ts'],
  rules: {
    // 关闭强制props有默认值
    'vue/require-default-prop': 'off',

    // setup可以解构
    'vue/no-setup-props-destructure': 'off',

    // 组价名不能简短
    'vue/multi-word-component-names': 'off',

    // template 缩进两列
    'vue/html-indent': ['error', 2],

    // script 缩进两列
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1 }
    ],

    // 属性超过3个自动换行，换行后 同一行不能超过1个
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 3 },
        multiline: { max: 1 }
      }
    ],

    // 标签右箭头换行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],

    // 禁止右箭头有空格
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],

    // 自闭合标签
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // {{ 这里有空格 }}
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'vue/no-multi-spaces': ['error', { ignoreProperties: false }],

    // 属性周围不允许等号有空格
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

    // template格式
    'vue/component-tags-order': ['error', { order: [['script', 'template'], 'style'] }],

    // 强制 defineProps defineEmits的顺序
    'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],

    // class名排序
    'vue/static-class-names-order': 2
  }
}
