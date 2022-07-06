module.exports = {
  overrides:[
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    }
  ],
  extends: [
    '@antzy/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules:{
    '@typescript-eslint/no-non-null-assertion':'off',
    
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2]
  }
}
