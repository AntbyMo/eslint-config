# eslint-plugin-antzy
![npm](https://img.shields.io/npm/v/eslint-plugin-antzy?color=%20)<br/>

Some rules belonging to Antzy's Vue, `@antzy/eslint-config` already includes this plugin

# Install
```
pnpm add eslint-plugin-antzy -D
```

# Config eslintrc.js
```
{
  "plugins":['antzy'],
  rules:{
     'antzy/suffixRef': 2,
  }
}
```

## Used Rules
The following configuration has been used and will be fixed automatically <br><br>

|        used rules        |            explain             |
| :----------------------: | :----------------------------: |
|       suffixRef       |    识别到Ref函数,变量声明自动加上Ref后缀      |
