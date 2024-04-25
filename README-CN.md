
# @antzy/eslint-config

<p align="center">
<a href="https://github.com/AntzyMo/eslint-config">English</a> | 中文
</p>

感谢 [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)，正因为有了它，制定属于自己风格的代码格式已经不再是难事了。

## 用法

> Tips: 如果不想手动安装，[这里提供快速安装方法](https://github.com/AntzyMo/ieslint-cli)，输入一条命令，省去重复配置操作。


### 手动安装
```bash
pnpm add eslint -D
pnpm add @antzy/eslint-config -D
```

### Config eslint.config.js
With `"type"`: `"module"` in package.json (recommended):
```js
import { antzy } from '@antfu/eslint-config'

export default antzy({
  rules:{
     /* your stylistic rules */
  }
})
```

With CJS:
```js
const { antzy } = require('@antfu/eslint-config')

module.exports = antzy({
  rules:{
     /* your stylistic rules */
  }
})

```

## License
[MIT](./LICENSE) License &copy; 2023-PRESENT [AntzyMo](https://github.com/AntzyMo)


