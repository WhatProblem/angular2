# 项目配置参考：https://github.com/gdi2290/angular-starter，如有错误之处请指出

# 使用angular完成多个模块与组件编写，数据通过HttpClientModule模块读取本地data.json数据

# node npm webpack 配置运行环境
# angular underscore 项目依赖以及所需js库
# angular/Router  路由守卫模块实现登录认证，预加载，懒加载
# ng2-translate 语言切换
# EventEmitter2 事件监听与发送

# 醒目结构如下：
angular-starter/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our Angular testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/...                    * WebApp: project file
 │   │
 │   │
 │   │
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage its dependencies
 └──webpack.config.js              * webpack main configuration file

```
# 安装依赖模块
# npm install 或者使用国内镜像 @cnpm install

# 运行项目
# npm start

# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```
# 时间关系，项目持续更新中...
# 如有不当之处请指出，谢谢。。。

# 如有配置不清楚之处请参考：https://github.com/gdi2290/angular-starter