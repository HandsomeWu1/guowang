|-- vue-cli2.0脚手架文件说明
    |-- public                             项目所有静态文件
    |   |-- index.html                     入口html文件
    |   |-- js                             全局配置文件
    |   |   |-- config.js
    |   |   |-- uino.js
    |   |-- static                         字体图标、字体、视频等不需要打包的静态文件
    |   |   |-- SourceHanSansCN-Light.otf
    |   |   |-- font
    |   |   |   |-- iconfont.css
    |   |   |   |-- iconfont.eot
    |   |   |-- svg
    |   |       |-- ad.svg
    |   |-- vendor                          第三方库、插件
    |       |-- cesiumWorkerBootstrapper.js
    |       |-- createVerticesFromHeightmap.js
    |-- src
    |   |-- App.vue                        程序入口组件
    |   |-- main.js                        程序入口文件，创建vue实例，引入各种插件
    |   |-- router.js                      路由文件
    |   |-- store.js                       全局状态管理文件
    |   |-- assets                         需要打包的静态文件 图片 公共css样式等
    |   |   |-- img
    |   |   |-- style
    |   |       |-- reset.css
    |   |-- common                          项目公用的js文件
    |   |   |-- http
    |   |       |-- http.js
    |   |-- components                      vue组件库，所有vue组件分模块
    |   |   |-- index
    |   |       |-- Index.vue
    |   |-- plugins                         项目所用插件 一般为全局引入
    |   |   |-- animejs.js
    |   |-- views                           单个路由入口文件
    |       |-- Home.vue
    |
    |-- .eslintignore                       忽略eslint语法检测的配置文件
    |-- .eslintrc.js                        eslint语法检测配置
    |-- .gitignore                          忽略git提交的文件
    |-- .stylelintignore                    忽略stylelint样式检查的配置文件
    |-- .stylelintrc.js                     stylint样式检查的配置文件
    |-- package-lock.json                   项目依赖包详细版本配置
    |-- package.json                        项目依赖包大版本配置
    |-- README.md                           项目说明文档
    |-- vue.config.js                       项目全局配置和webpack打包配置
