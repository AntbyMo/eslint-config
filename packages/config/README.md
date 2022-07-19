# eslint-config
![NPM](https://img.shields.io/npm/l/@antzy/eslint-config) &nbsp;
![npm (scoped)](https://img.shields.io/npm/v/@antzy/eslint-config?color=%20) <br/>

Antzy ESLint config presets

-  Supports `vue`  `ts` `js`

# Install
```
pnpm add eslint -D
pnpm add @antzy/eslint-config -D
```

# Config eslintrc.js
```
{
  "extends":"@antzy"
}
```

# Used Rules
The following configuration has been used and will be fixed automatically <br><br>

## Base Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
|       arrow-parens       |    箭头函数去掉不必要的括号      |
|       sort-imports       |    import 单行从大到小排序      |
|    no-useless-return     |     关闭不允许多余的return      |
| no-multiple-empty-lines  |         不允许多个空行          |
|  array-bracket-newline   |    数组括号前后 >= 3个换行       |
|  array-element-newline   |  数组括号内的元素 >= 3个换行      |
|  function-paren-newline  | 函数括号内参数有一个换行就换行     |
| newline-per-chained-call |       方法链 >= 3个换行         |
|   object-curly-newline   |    import 解构 超过6个换行      |
| object-property-newline  | 花括号属性强制换行，默认一个参数不换行 |
| no-extra-label           | 禁用不必要的标签 |
| object-property-newline  | 花括号属性强制换行，默认一个参数不换行 |
| decimal                  | 禁止浮点小数 |
| switch-colon-spacing     | switch 的冒号左右有空格 |
| implicit-arrow-linebreak  | 箭头函数体后面不能换行 |
| multiline-comment-style  | 对多行注释格式化 |
| operator-assignment      | 简化赋值操作 |
| template-tag-spacing  | 函数调用模板字符串后面不能有空格 |
| object-shorthand  | 对象字面量中方法和属性使用简写语法 |
| prefer-arrow-callback  | 回调使用箭头函数 |
| prefer-template  | 使用字符串模板连接 |
| yield-star-spacing  | yield* 周围空格 |



<br/><br/>

## Typescript Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
|  no-non-null-assertion   |    去掉禁止使用!后缀运算符     |
|       array-type         |            使用数组 T[]      |
| sort-type-union-intersection-members |  （｜ or &） 排序 |
| space-infix-ops          |         中缀运算符周围需要间距 |
| semi                     |         禁止不必要的分号 |
| comma-dangle             |         要求或不允许尾随逗号 |
| type-annotation-spacing  |         类型注释间距 |
| consistent-generic-constructors  |  如果使用构造函数 泛型就要这样写 new Map<string,number>() |
| consistent-indexed-object-style  |         强制使用 Record |
| member-delimiter-style    |   interface type 不要分号和逗号 |
| method-signature-style    |   函数声明 func: (arg: string) => number |
| space-before-blocks   |   interface 后面加空格 |
| consistent-type-imports    |   使用引用类型时自动加上 type |
| consistent-type-definitions    |   对象类型使用interface |






<br/><br/>

## Vue Config 

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
|  require-default-prop   | （off） 关闭强制props有默认值     |
|  no-setup-props-destructure  |   （off）setup可以解构    |
| multi-word-component-names          | （off）  组价名可以简短 |
|        html-indent           |  template 缩进两列 |
|        script-indent           |  script 缩进两列 |
| max-attributes-per-line        |  属性超过3个自动换行，换行后 同一行不能超过1个 |
|  html-closing-bracket-newline  |  标签右箭头换行 |
|  html-closing-bracket-spacing  |  禁止右箭头有空格 |
|  html-self-closing             |  自闭合标签 |
| mustache-interpolation-spacing |  {{ 这里有空格 }} |
|  no-multi-spaces               |  不允许多个空格 |
|no-spaces-around-equal-signs-in-attribute  | 属性周围不允许等号有空格 |
|  component-tags-order          |  vue格式['script','template'] |
|  define-macros-order           |  强制 defineProps defineEmits的顺序 |
|  static-class-names-order      |  class名排序 |









