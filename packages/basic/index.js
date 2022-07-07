module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist'],
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      2,
      {
        tabWidth: 2, // tab两个空格
        semi: false, // 去掉尾分号
        singleQuote: true, // 双引号变单引号
        trailingComma: 'none', // 尾随逗号
        arrowParens: 'avoid', // 箭头函数一个参数省略括号
        vueIndentScriptAndStyle: true, // vue文件的<script>和<style>进行首行缩进
        endOfLine: 'auto' // 行结束
      }
    ],
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
    'no-useless-return': 0
  }
}
