`public`: 静态文件

*（public中的文件，是不会经过编译的，打包后会生成dist文件夹，public中的文件只是复制一遍，且必须使用绝对路径来引用这些文件（ 这个取决于你vue.config.js中publicPath的配置，默认的是/ ））*

`src`: 

`assets`: 静态文件

*（使用assets下面的资源，在js中使用的话，路径要经过webpack中的file-loader编译，路径不能直接写。在动态绑定中，assets路径的图片会加载失败（因为webpack使用的是commenJS规范，必须使用require（或import）才可以）*

`components`: 组件

`modules(plugins)`: 插件

*（插件通常用来为 Vue 添加全局功能，如router,pinia）*

`pages`:  页面

`router`: 路由守卫

`stores`:  实体

*（Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods。）*

ps: 本模型中配置了element-plus和其图标可直接使用