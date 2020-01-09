module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier/react",
    "eslint-config-prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "no-eval": [0],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/destructuring-assignment": [0],
    "import/prefer-default-export": [0],
    "react/prop-types": [0],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
};
