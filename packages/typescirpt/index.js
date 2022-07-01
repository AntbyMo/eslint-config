module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@antzy/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules:{
    'indent': 'off',
    '@typescript-eslint/indent': ['error']
  }
}
