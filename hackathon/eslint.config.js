const eslintConfig = [
    {
      extends: ['next/core-web-vitals'], // Next.js recommended settings
      rules: {
        'react/no-unescaped-entities': 'off', // Allow unescaped entities in JSX
        '@next/next/no-page-custom-font': 'off', // Allow custom fonts
      },
    },
  ];
  
  export default eslintConfig;
  