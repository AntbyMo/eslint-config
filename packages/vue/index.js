module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@antzy/eslint-config-ts'],
  rules: {
    'prettier/prettier': 0,

    'vue/require-default-prop': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3, // 属性超过3个自动换行
        },
        multiline: {
          max: 1, // 换行后 同一行不能超过1个
        },
      },
    ],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'vue/mustache-interpolation-spacing': [2, 'always'],
    "vue/no-multi-spaces": ["error", {
      "ignoreProperties": false
    }],

    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],

    "vue/component-tags-order": ["error", {
      "order": [ [ "script", "template" ], "style" ]
    }],

    "vue/define-macros-order": ["error", {
      "order": ["defineProps", "defineEmits"]
    }],

    'vue/static-class-names-order':2
  },
}
