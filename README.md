ysass
=====

基于 Sass 和 Grunt 的简单高效的前端页面重构项目结构。特别适合开发类似 WordPress 主题的项目。

**目标**：提供一个合理的项目结构以及实用工具，简化重构项目流程，方便前端重构项目开发。让前端拿到需求后，马上开始编码。

**实现功能**：

1.	使用 Grunt 对项目进行打包：对 JS 进行 jshint 规范化校验、将 JS 插件合并并压缩、编译 SCSS 文件、实现 livereload 浏览器无刷新实时看到效果。
2.	使用 Sass 快速编写 CSS 代码，分模块的提供变量定义（var.scss）、实用 SCSS 函数（util.scss）、CSS Reset 和中文排版（[typo.scss](https://github.com/sofish/typo.css)）等。

更多信息请看文章：[构建初级前端页面重构开发环境](http://yujiangshui.com/build-your-frontend-workflow/)

##主要目录结构

	.
	├──README.md         --- 使用帮助
	├──PSD               --- 设计稿及其他项目资源
	├──html              --- 项目 HTML 页面
	├──css               --- 其他项目需要的其他 CSS 文件
	├──fonts             --- WebFonts 放在这里
	├──images            --- 图片们
	├──js                --- JS 组件
	  ├──plugins            --- JS 插件存放目录，Grunt 会将此目录所有文件合并压缩为 /js/plugins.min.js 文件
	├──scss              --- SCSS 模块文件
	└──style.scss        --- SCSS 主文件


##使用方法

1. clone 或者下载下来，将文件夹命名为项目名称，删掉无用文件。
2. 将资源文件放在 PSD 文件夹中。
3. 如果需要使用 git 管理项目，使用 git clone 下来的，请注意使用 `git remote -v` 查看 repo url 并修改为你自己的项目 repo url。
4. 如果使用 git 管理项目，请编辑根目录下面的 `gitignore` 添加不需要追踪的文件，并将其修改为 `.gitignore` 使其生效。
5. 确保安装过 nodejs 和 grunt，在项目目录下面，执行 `npm install` 和 `grunt`，会自动打开浏览器，提供文件编译和实时刷新等功能。
6. Just code it！


### HTML 开发建议
* 建议使用 [section-wrap 和 section 的 HTML 结构和命名方式](http://yujiangshui.com/section-wrap-and-section/)。
* 本项目将 HTML 文件放在二级目录 `html/` 的目的是，如果需要与后端协作开发该项目，则后端可以直接在项目根目录下面进行同步开发，共用同一份 CSS、JS 文件，这样前端对 HTML 的修改，可以与后端页面同步。


### CSS 开发建议

* 预先审查设计稿，将其常见颜色、尺寸等保存为变量，统一管理在 `var.scss` 文件中，将 web font 也定义在这个文件里面。
* 查看 `util.scss` 文件，会发现一些很有帮助的工具函数，提高开发效率。
* 在 `custom.scss` 文件编写主要代码，在 `media-queries.scss` 文件编写响应式有关代码，如果不需要则可以在 `style.scss` 文件中注释掉有关 `@import` 。
* 需要注意的是，如果没有设置过 ruby 的编码等相关设置，在 CSS 文件中出现中文（注释等）将会导致编译出错。

### JS 开发建议

* 将 JS 插件的 JS 文件放在 `js/plugins` 文件夹下面，Grunt 会将该文件夹下面所有文件合并压缩为 `js/plugins.min.js` 文件。
* 在 `js/global.js` 文件中编写 JS 有关代码，Grunt 会检测变化，进行 jshint 校验并压缩为 `js/global.min.js` 文件。
* 如果你使用 jQuery，这样在你的 HTML 页面中，引入三个 JS 文件链接即可。


##TODO

* 提供中英文排版 CSS 文件，整合 normalize.css 的 CSS Reset 方案，去掉 typo.css。
* 针对更多的前端开发流程，修改提供更为合理的结构和工具函数等，提供最佳实现的样例。
* 提供命令行的项目结构生成工具，并提供一些参数方便自定义。

欢迎大家提 Issue ，也希望该项目可以帮助大家构造适合自己的开发 Workflow 切实提高开发效率和质量。

##使用许可

基于 MIT 协议，不限制商业或者以营利目的使用。