module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "no-console": 0,
  },
};
