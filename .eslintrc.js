module.exports = {
  parser: "babel-eslint",
  plugins:['react-hooks'],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    window: true,
    __PRODUCTION__: true,
    __STATIC__: true,
    __DEV__: true,
    __PRODUCTION__: true,
    __TESTING__: true,
    __MOCKING__: true,
  },
  rules: {
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-delete-var": "error",
    eqeqeq: ["error", "allow-null"],
    "prefer-destructuring": ["warn"],
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": ["warn"],
    "import/no-extraneous-dependencies":['warn']
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
            modules: ["node_modules"],
          },
        },
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "./"],
      },
    },
  },
};
