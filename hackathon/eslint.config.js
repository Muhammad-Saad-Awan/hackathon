import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // Provide a fallback for baseDirectory in case import.meta.dirname is unavailable
  baseDirectory: process.cwd(),
});

const eslintConfig = [
  {
    // Specify Next.js recommended settings
    extends: ['next/core-web-vitals'],
    rules: {
      'react/no-unescaped-entities': 'off', // Disable unescaped entities warning in JSX
      '@next/next/no-page-custom-font': 'off', // Disable custom font warning
    },
  },
];

export default eslintConfig;
