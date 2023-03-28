/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "quote-props": ["error", "consistent"],
    "comma-dangle": ["warn", "only-multiline"],
    "quotes": ["error", "double", {
      "avoidEscape": true,
      "allowTemplateLiterals": true,
    }],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"],
  },
};
