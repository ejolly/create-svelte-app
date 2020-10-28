module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
};
