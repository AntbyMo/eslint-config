import type { FlatESLintConfigItem } from 'eslint-define-config'

import { antfu, javascript, react, typescript, vue } from './configs'

export function antzy(config: FlatESLintConfigItem) {
  const all = [...antfu, ...javascript, ...typescript, ...vue, ...react]
  return config ? [...all, config] : all
}
