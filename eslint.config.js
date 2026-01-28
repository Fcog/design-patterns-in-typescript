import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['node_modules/', 'dist/', '*.config.js'] },
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
        global: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
