
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns:[
    'dist'
  ],
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed']
  }
}
