import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

// Get the directory name (fallback for CommonJS environment)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    plugins: ['unused-imports'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }),
]

export default eslintConfig
