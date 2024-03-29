module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'no-tabs': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': 'off',
    'object-curly-spacing': [2, 'always'],
    'operator-linebreak': 'off',
    'indent': 'off',
  },
};
