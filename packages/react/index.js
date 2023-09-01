module.exports = {
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@antzy/eslint-config-ts'],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-wrap-multilines': 2,
        'react/no-unknown-property': 0,
        'react/jsx-child-element-spacing': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,

        // 第一个ayyr要换行
        'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],

        // 强制解构 props
        'react/destructuring-assignment': 2,

        // isTrue={true} => isTrue
        'react/jsx-boolean-value': 2,

        // 等号两边不允许有空格
        'react/jsx-equals-spacing': 2,

        // attr的间距
        'react/jsx-indent-props': [2, 2],
        '@typescript-eslint/indent': 0,

        // jsx的缩进
        'react/jsx-indent': [2, 2],

        // attr超过3个换行
        'react/jsx-max-props-per-line': [2, { maximum: 3 }],

        // {count && title} => {count ? title : null}
        'react/jsx-no-leaked-render': [2, { validStrategies: ['ternary', 'coerce'] }],

        // 禁止不必要的<></>
        'react/jsx-no-useless-fragment': 2,

        // 换行
        'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],

        'react/jsx-curly-newline': [
          2,
          {
            multiline: 'consistent',
            singleline: 'consistent'
          }
        ],

        'react/jsx-curly-spacing': [
          2,
          {
            when: 'always',
            children: true,
            attributes: {
              when: 'never'
            },
            spacing: {
              objectLiterals: 'never'
            }
          }
        ],

        // attr 排序
        'react/jsx-sort-props': [
          2,
          {
            ignoreCase: true,
            callbacksLast: true,
            multiline: 'last'
          }
        ],

        // <div/> => <div />
        'react/jsx-tag-spacing': [
          2,
          {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'proportional-always'
          }
        ],

        // 自闭合标签
        'react/self-closing-comp': [
          2,
          {
            component: true,
            html: true
          }
        ]
      }
    }
  ]
}
