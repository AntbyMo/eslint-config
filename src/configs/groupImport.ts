// @ts-expect-error no types for eslint-plugin-group-import
import pluginGruopImport from 'eslint-plugin-group-import'
import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export default {
  plugins: {
    groupImport: pluginGruopImport
  },
  rules: {
    // import
    'import/order': 0,
    'import/first': 0,
    'import/no-mutable-exports': 0,
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
    'sort-imports': [2, { ignoreDeclarationSort: true }],
    'groupImport/imports': 2
  }
} as TypedFlatConfigItem
