import antfu from '@antfu/eslint-config'
import type { TypedFlatConfigItem } from '@antfu/eslint-config'

import { antfu as antfuRules, groupImport, vue } from './configs'

export function antzy(config: TypedFlatConfigItem): ReturnType<typeof antfu>
export function antzy(config: TypedFlatConfigItem) {
  const restRules: TypedFlatConfigItem[] = [groupImport, vue, config]

  return antfu(antfuRules, restRules)
}
