const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true, // boolean (default: true)
            // files: '', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
        },
    },
    chainWebpack: (config) => {
    // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));
        // 解决 vue-layer 使用时报错问题
        config.resolve.alias.set('vue$', 'vue/dist/vue.js');
    },
    css: {
        loaderOptions: {
            sass: {
                // 新版sass-loader data-->prependData
            // 全局scss文件
                data: `
                @import "@/plugins/gloable.scss";
                @import "@/assets/style/el-scrollbar.scss";
            `,

            },
        },
    },
};
