module.exports = {
    extends: ['react-app',],
    rules: {
        /* 'object-curly-spacing': [1, 'always'], */
        'semi': 'warn',
        'no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'quotes': ['warn', 'single',]
    }
};
