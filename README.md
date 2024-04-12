# @antzy/eslint-config
[![npm](https://img.shields.io/npm/v/@antzy/eslint-config?color=444&label=)](https://npmjs.com/package/@antzy/eslint-config)

Antzy ESLint config presets

## Usage

### Install
```
pnpm add eslint -D
pnpm add @antzy/eslint-config -D
```

### Config eslint.config.js
With `"type"`: `"module"` in package.json (recommended):
```
import { antzy } from '@antfu/eslint-config'

export default antzy({
  rules:{
     /* your custom config */
  }
})
```
With CJS:
```
const { antzy } = require('@antfu/eslint-config')

module.exports = antzy({
  rules:{
     /* your custom config */
  }
})

```
