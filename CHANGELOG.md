## 更新日志

**2018-06-26**

- 修复 code-msg 中关于默认值的获取

- 优化 添加代理path，yapi时代理的地址不只是域名 还有路径

**2018-05-27**

- 优化 去除初始化时的eslint和test选项, 添加自动安装选项

- 优化 去除热更新时的reload

- 优化 build生成的页面添加view文件夹

- 新增 在babelrc中加入"transform-vue-jsx"插件，支持jsx语法

- 新增 新增请求 & 错误处理相关代码供参考使用

- 删除 删除 minimsg / popover 资源引入

**2018-04-13**

- 优化 升级jdpicker到2.2.1

**2018-04-11**

- 优化 docker构建地址修复为staticadm

**2018-04-08**

- 优化 将babel preset升级为babel-preset-env。替换"babel-preset-latest": "^6.22.0", "babel-preset-stage-2": "^6.22.0",

- 优化 升级"babel-loader": "^7.1.4"

- 优化 升级"extract-text-webpack-plugin": "^3.0.2"

**2018-04-08**

- 优化 当开发组件时，将readme中的使用说明默认使用组件名称

- 优化 当开发组件时，build时设置vue从外部获得

- 优化 当开发组件时，package.json中的vue和vue-router依赖改为开发依赖

- 删除 common/premission.js common/const.js 相关内容已独立为组件形式

- 修改 修改index.js示例文件

**2018-03-26**

- 修改 将vue和vue-template-compiler 的版本固定到2.5.x

**2018-03-20**

- 修改 将构建目录修改到dist(/assets,/html)中，并加入docker版本

**2018-03-09**

- 修改 将bootstrap版本同步到v1.0.4

**2018-02-27**

- 修改 将bootstrap版本同步到v1.0.3

**2018-02-08**

- 修改 vue-filter中时间过滤器的传参问题

**2018-02-01**

- 修改 将vue版本固定至2.5.x

- 优化 升级webpack到V3

- 新增 新增module/common/vue-filter.js

**2017-12-22**

- 修复 将webpack.umd.con.js中的resolve.module改为['src/component','node_modules'], 以便组件打包时根据该路径查找资源

- 优化 添加externals.utility

**2017-12-19**

- 新增 新增projectType配置项，兼容组件开发

**2017-12-05**

- 新增 新增code-msg.js，用于对响应信息中的code码进行处理并得到其对应的信息

**2017-12-02**

- 删除 删除editor的配置文件

**2017-12-01**

- 修改 将 interface中的一个let改为const

**2017-11-30**

- 优化 将script后加上时间戳(之前只有调试环境有，现在生产环境上也加上)

- 修改 将环境判断的逻辑加上提测版和开发版的支持，方式变得更加直接

**2017-11-22**

- 优化 将资源地址直接加上A

**2017-10-25**

- 修改 修改index.html中的链接为相对地址

*2017-10-18*

- 修改 修改readme模板

- 新增 新增doc目录，用于存放接口文档

**2017-09-30**

- 新增 加入页面的文件扩展定制 config.pageExtend

**2017-09-27**

- 修改 将页面中的外部资源引用由http://改为//

**2017-09-26**

- 新增 加入资源站配置项 config.toScriptServer

**2017-09-08**

- 新增 加入pace引用

- 修改 将css版本升级到1.0.1

**2017-09-03**

- 修复 isProxy:true时post数据无法被服务端接收。mock中仅当isProxy:false时加入bodyParser解析，并由原来的bodyParser()变为bodyParser.urlencoded({extended:true})和bodyParser.json()

**2017-08-14**

- 修复 fix bug 加入"babel-plugin-transform-vue-jsx": "^3.4.3"

**2017-08-11**

- 修复 将上述的path中结尾的'/'去除

**2017-08-04**

- 修复 mock数据时匹配全路径（将baseUrl修改为baseUrl+path形式）

**2017-08-01**

- 修复 在项目中加入babel-polyfill的支持

- 新增 package.json中加入jsx语法编译支持 "babel-helper-vue-jsx-merge-props": "^2.0.2","babel-plugin-syntax-jsx": "^6.18.0",

- 优化 加入restful接口数据模拟支持(通过mock/data中配置$method/$specParams/$contentType/$params检测请求是否符合)

**2017-07-30**

- 修改 将jdpicker版本改为2.0.0

**2017-07-25**

- 优化 给const添加注释

**2017-07-07**

- 优化 修改const

- 添加 添加permission

**2017-07-06**

- 修改 删除脚手架中的内置默认依赖如ct-adc-page等，更新直接引入的脚本版本如bootstrap等

**2017-06-22**

- 修复 interface中关于环境检测的代码: 1.去除debug环境，统一使用test; 2.分离预发和正式；

**2017-06-09**

- 优化 在构建完成的js后添加v=timestamp，便于浏览器获取最新的资源

**2017-06-06**

- 修复 interface中对于tdl的获取的bug

**2017-05-23**

- 修复 缺失body-parser引发的bug

- 修复 express-http-proxy转发大文件请求时失败(添加limit为更大的值)

**2017-05-11**

- 修复 当mock/data文件夹不存在时提示

- 优化 const.js支持异步获取常量列表

- 优化 mock支持同样的接口根据参数的不同返回不同的数据

- 修复 将支持多个domain改成支持一个(因为在真实的项目中,主domain永远只有一个,其他的跨域请求都会在接口层面被处理)
























