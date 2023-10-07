import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/if-newline': 0,
    'style/comma-dangle': [0, 'never'],
    'node/prefer-global/process': 0
  }
})
