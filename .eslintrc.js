module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    globals: {
        CONFIG_MAP: false,
        CONFIG: false,
        THING: false,
        CMAP: false,
        uino: false,
        axios: false,
        $: false,
        _: false,
        Cesium: false,
    },
    rules: {
        // 强制 error
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        // 推荐 warn
        'max-len': ['warn', { 'code': 200 }],
        'vue/html-quotes': 'warn',
        "global-require": 0
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
