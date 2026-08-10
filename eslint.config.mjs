import nextConfig from '@tooling-configs/eslint-config/next';

export default [
  {
    ignores: [
      '.next/**',
      'build/**',
      'node_modules/**',
      '.pnpm-store/**',
      '.tmp-tooling-configs/**',
    ],
  },
  ...nextConfig,
];
