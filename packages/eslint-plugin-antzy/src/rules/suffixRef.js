
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '识别到Ref函数,变量声明自动加上Ref后缀',
      url: 'https://github.com/AntzyMo/eslint-config/tree/main/packages/eslint-plugin-antzy#readme'
    },
    fixable: 'code',
    messages: { suffixRef: '建议加上Ref后缀' },
    schema: []
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.init?.callee?.name === 'ref') {
          if (node.id.name.endsWith('Ref')) return

          context.report({
            node,
            messageId: 'suffixRef',
            fix: fixer => {
              return fixer.insertTextAfter(
                node.id,
                'Ref'
              )
            }
          })
        }
      }
    }
  }
}
