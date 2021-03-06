module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'max-len': 0,
        'object-curly-newline': 0,
        'import/extensions': 0,
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/sort-comp': 0,
        'arrow-parens': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/anchor-is-valid': ['error', { aspects: ['invalidHref', 'preferButton'] }],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.json',
            },
            rules: {
                '@typescript-eslint/ban-ts-ignore': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/no-unused-vars': ['warn', {
                    args: 'after-used',
                    ignoreRestSiblings: true,
                }],
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.tsx'],
            },
        },
    },
};
