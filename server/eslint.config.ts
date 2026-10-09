import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  // 1. Recommended Base JavaScript Rules
  js.configs.recommended,
  // 2. Recommended Base TypeScript Rules
  ...tseslint.configs.recommended,
  // 3. Custom Project Configuration & Rules
  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      eqeqeq: ["error", "always"], // h.w
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
