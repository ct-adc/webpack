## 初始化项目

```
  vue init ct-adc/webpack [你的项目名称]
```

## 配置项说明 

项目根目录下的build/config/mock文件为项目构建配置文件

* build
    * [build.js](https://github.com/ct-adc/webpack/blob/master/template/build/build.js)  ``正式版构建主文件``
    * [check-versions.js](https://github.com/ct-adc/webpack/blob/master/template/build/check-versions.js)
    * [dev-client.js](https://github.com/ct-adc/webpack/blob/master/template/build/dev-client.js)
    * [dev-server.js](https://github.com/ct-adc/webpack/blob/master/template/build/dev-server.js) ``开发版构建主文件，关于支持热更新的dev-server配置基本都在这里``
    * [utils.js](https://github.com/ct-adc/webpack/blob/master/template/build/utils.js)
    * [vue-loader.conf.js](https://github.com/ct-adc/webpack/blob/master/template/build/vue-loader.conf.js)  ``.vue文件的loader配置,供webpack.base.conf.js引用``
    * [webpack.base.conf.js](https://github.com/ct-adc/webpack/blob/master/template/build/webpack.base.conf.js)  ``webpack的基本配置,包含entry/output/resolve/各种loader``
    * [webpack.dev.conf.js](https://github.com/ct-adc/webpack/blob/master/template/build/webpack.dev.conf.js)  ``webpack在开发环境中的配置``
    * [webpack.prod.conf.js](https://github.com/ct-adc/webpack/blob/master/template/build/webpack.prod.conf.js) ``webpack在生产环境中的配置``
    * [webpack.test.conf.js](https://github.com/ct-adc/webpack/blob/master/template/build/webpack.test.conf.js)  ``webpack在测试环境中的配置``
* config
    * [dev.env.js](https://github.com/ct-adc/webpack/tree/master/template/config/dev.env.js)
    * [entry.js](https://github.com/ct-adc/webpack/tree/master/template/config/entry.js)  ``关于webpack入口的配置，默认自动读取./src/js/app中的每个文件作为入口文件``
    * [index.js](https://github.com/ct-adc/webpack/tree/master/template/config/index.js)  ``向外释放开发版和正式版的各种参数，供构建过程使用``
    * [plug.html.js](https://github.com/ct-adc/webpack/tree/master/template/config/plug.html.js)  ``读取ejs文件并生成htmlPlugins，以便生成html文件.``
    * [prod.env.js](https://github.com/ct-adc/webpack/tree/master/template/config/prod.env.js)
    * [test.env.js](https://github.com/ct-adc/webpack/tree/master/template/config/test.env.js)
* mock
    * [data](https://github.com/ct-adc/webpack/blob/master/template/mock/data)  ``设置mock数据,可以在其中按页面进行设置``
        * a.js
        * b.js
    * [define.js](https://github.com/ct-adc/webpack/blob/master/template/mock/define.js)  ``设置代理的方式和域名等内容``
    * [index.js](https://github.com/ct-adc/webpack/blob/master/template/mock/index.js)  ``设置express实例的路由规则``

## 命令使用

* 开发环境调试

```
npm run dev
```

可以带参数如 `npm run dev view/app` 则可以自动打开/view/app.html; 默认则打开view/index.html，此项在config/index.js中配置。

* 生产环境构建

```
npm run build
```

## Q & A

### 正式版上的资源访问不是/asset，是/static/projectName/asset，该怎么设置?

设置config/index中的dev.assetsSubDirectory设置为'static/projectName/asset'。


## TODO

遍历ejs和entry文件夹

打开根目录中的index.html

html页面改成不区分大小写










