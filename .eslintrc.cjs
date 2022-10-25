module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
  ],
  ignorePatterns: ['src/auto-imports.d.ts', 'src/components.d.ts'],
  rules: {
    'no-console': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        svg: 'never',
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
      },
    ],
    'vue/prefer-import-from-vue': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
  },
}
