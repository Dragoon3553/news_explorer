const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");

module.exports = [
  {
    // Global ignores for the flat config
    ignores: ["dist/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,cjs,mjs}"],
    plugins: {
      react: react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Allow unescaped single quotes in JSX text
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
