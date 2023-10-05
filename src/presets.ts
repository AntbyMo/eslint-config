import { antfu, javascript, react, typescript, vue } from './configs'

export function antzy() {
  const all = [...antfu, ...javascript, ...typescript, ...vue, ...react]
  return all
}
