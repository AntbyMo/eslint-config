# eslint-config
![NPM](https://img.shields.io/npm/l/@antzy/eslint-config) &nbsp;
![npm (scoped)](https://img.shields.io/npm/v/@antzy/eslint-config?color=%20) <br/>

Antzy ESLint config presets

-  Supports `vue` 、`react`、 `ts` 、`js`

# Install
```
pnpm add eslint -D
pnpm add @antzy/eslint-config -D
```

# Config eslintrc.config.js
```
import { antzy } from '@antfu/eslint-config'

export default antzy({
  rules:{
     /* your custom config */
  }
})
```
# Add script for package.json
```
{
  "scripts": {
    "lint": "eslint ./src --fix"
  }
}
```