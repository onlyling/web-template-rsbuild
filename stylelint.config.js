module.exports = {
  extends: ['@fruits-chain/stylelint-config-preset'],
  rules: {
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': null,
  },
}
