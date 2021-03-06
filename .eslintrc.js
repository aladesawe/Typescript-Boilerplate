module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    env: { node: true },
    ignorePatterns: ['dist/', 'logs/'],
    rules: {
      '@typescript-eslint/quotes': [
        'error',
        'single',
        { allowTemplateLiterals: true, avoidEscape: true }
      ]
    }
  };
  