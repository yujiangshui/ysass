ysass
=====

基于 Sass 的简单高效的前端页面重构项目框架。 

采用了中文排版优化的 [typo](https://github.com/sofish/typo.css)  。

目标：提供一个合理的框架结构以及实用工具，简化重构项目流程，方便前端重构项目开发。

更多信息请看文章：[构建初级前端页面重构开发环境](http://yujiangshui.com/build-your-frontend-workflow/)

##一、目录结构

	.
	├── README.md            --- 使用帮助
	├── PSD                  --- 把设计稿扔进来
	└── html                 --- 前端项目结构
		├──css               --- 其他项目需要的 CSS 文件
		├──fonts             --- WebFonts 放在这里
		├──images            --- 图片
		├──js                --- 常用 JS 组件
		├──scss              --- SCSS 文件
		├──convert.bat       --- 编译 SCSS 小工具
		├──index.html        --- HTML 文件
		└──style.scss        --- 配置信息 + 引用 SCSS


##二、使用方法

1. 下载、解压、将 ysass 命名为项目名称，删掉里面 `README.md` 等无用文件。
2. 将设计稿扔进 PSD 文件夹中，观看 PSD 确定不需要的组件或功能，在相应文件夹中删掉无用文件。
3. 打开 `style.scss` 文件，配置头部项目信息。
4. 双击 `convert.bat` 文件，开始监听 SCSS 文件变动并编译。
5. 打开 `index.html` ，修改头部信息，删掉或增加你的 JS 组件，开始书写你的语义化的 HTML 结构。
6. 打开 `scss\_var.scss` 文件，添加项目常用变量。
7. 打开 `scss\_utils.scss` 文件，添加你常用的 SCSS 函数。
8. **打开 `scss\_custom.scss` 文件，编写项目主要 CSS 代码。**
9. 打开 `scss\_media-queries.scss` 文件，编写响应式相关功能。

需要注意的是，如果没有设置过 ruby 的编码等相关设置，在 CSS 文件中出现中文（注释等）将会导致无法编译。

##三、升级与改造

这套框架为本人基于一些前端页面重构的项目经验所得，基于 `Sass` 和 `typo` 为中文前端重构项目提供了一套比较规范的框架结构，用来做项目初始化。

该框架没有经过大量的项目检验，如果你在使用过程中，遇到了问题或者有好的建议，欢迎随时在 github 上提出。

如果你扩展了一些非常有用的函数，也欢迎 Pull Requests，一起完善！

##四、使用许可

基于 MIT 协议，不限制商业或者以营利目的使用，就像 [WordPress](http://wordpress.org/) 那样！
