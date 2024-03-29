module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@next/next/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    rules: {
        'import/extensions': ['error', 'never'],
        'no-nested-ternary': 'off',
        '@next/next/no-img-element': 'off'
    },
};
