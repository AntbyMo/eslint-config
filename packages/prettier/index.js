module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        printWidth: 120,
        jsxSingleQuote: true,
        // 双引号变单引号
        singleQuote: true,
        // 去除分号
        semi: false,
        tabWidth: 2,
        // 尾随逗号
        trailingComma: 'none',
        // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素
        bracketSameLine: false,
        // 箭头函数一个参数省略括号
        arrowParens: 'avoid',
        // 行结束
        endOfLine: 'auto',
        // vue 缩进
        vueIndentScriptAndStyle: true,
        // html vue jsx 多个属性换行
        singleAttributePerLine: true
      }
    ]
  }
}
