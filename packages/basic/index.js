module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist'],
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['simple-import-sort'],
  rules: {
    indent: ['error', 2],
    // arrow function omit bracket
    'arrow-parens': ['error', 'as-needed'],

    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
