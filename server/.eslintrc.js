module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 'off',
    'default-param-last': 0,
    'react/no-unescaped-entities': 0,
    'arrow-parens': 'off',
    'no-restricted-exports': 0,
    'no-console': 0,
  },
};
