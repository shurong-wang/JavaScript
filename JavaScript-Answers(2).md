
## 前端框架相关

### 介绍单页面应用(SPA)？

* 单页面应用(SPA) -- 核心是“无刷新”，整个 web 应用只在初始化时加载一个导航页及相关静态资源，之后的操作不再刷新页面

* 目标：旨在用为用户提供了更接近原生移动 APP 或桌面应用程序的体验

* 流程：第一次请求时，将导航页传输到客户端。之后，各功能页通过 JS 操作 URL HASH 或者 History API 进行路由切换，利用 ajax 或 fetch 异步获取 REST 接口数据（JSON）

* 优点：交互流畅；前后端职责分离；减轻服务端压力；后端接口可复用
* 缺点：初次加载相对耗时；前进、后退管理复杂；不利于 SEO

### 什么是“前端路由”? 什么时候适用“前端路由”? 有哪些优点和缺点?

* 前端路由通过 URL HASH 和 History 来实现“无刷新”页面切换
* 应用：前端路由主要适用于“前后端分离”的单页面应用(SPA)项目
* 优点：用户体验好，交互流畅
* 缺点：浏览器“前进”、“后退”会重新请求，无法合理利用缓存，无法记住之前滚动的位置

### JS 模块化开发方案有哪些？

* 封装对象作为命名空间 -- 内部状态可以被外部改写
* 立即执行函数(IIFE) -- 需要依赖多个 JS 文件，并且严格按顺序加载
* 使用模块加载器 -- require.js, sea.js
* 使用 ES6 模块

### 通行的 Javascript 模块的规范有哪些？

* CommonJS -- 主要用在服务器端 node.js

	```Javascript
	var math = require('./math');
	math.add(2,3);
	```

* AMD(异步模块定义) -- require.js

	```Javascript
	require(['./math'], function (math) {
	    math.add(2, 3);
	});
	```
	
* CMD(通用模块定义) -- sea.js

	```Javascript
	var math = require('./math');
	math.add(2,3);
	```
	
* E6 模块

	```Javascript
	import {math} from './math';
	math.add(2, 3);
	```

### AMD 与 CMD 规范的区别？

* 规范化产出：
	- AMD 由 RequireJS 推广产出（require.js）
	- CMD 由 SeaJS 推广产出（sea.js）

* 模块的依赖:
	- AMD 提前执行，推崇依赖前置
	- CMD 延迟执行，推崇依赖就近

* API 功能:
	- AMD 的 API 默认多职责（分为全局 require 和局部 require）
	- CMD 的 API 推崇职责单一纯粹（没有全局 require）

* 模块定义规则：

	```Javascript
	// AMD 默认一开始就载入全部依赖模块
	define(['./a', './b'], function(a, b) {
		a.doSomething();
		b.doSomething();
	});
	
	// CMD 依赖模块在用到时才就近载入
	define(function(require, exports, module) {
		var a = require('./a');
		a.doSomething();
	  	var b = require('./b');
	  	b.doSomething();
	});
	```

### requireJS 的核心原理是什么？

* 每个模块所依赖模块都会比本模块预先加载

### 介绍 Node.js 的优缺点？ Node.js 的特点和适用场景？

* Node.js的特点：单线程，非阻塞 I/O，事件驱动
* Node.js的优点：擅长处理高并发；适合 I/O 密集型应用
* Node.js的缺点：不适合 CPU 密集运算；不能充分利用多核CPU；可靠性低，某个环节出错会导致整个系统崩溃
* Node.js 的适用场景：
	- RESTful API
	- 实时应用：在线聊天、图文直播
	- 工具类应用：前端部署(npm, gulp)
	- 表单收集：问卷系统

### 介绍 route, SSR, middleware, cluster, nodemon, pm2, node-inspector？

* route    	     路由（用来保证用户界面与 URL 的同步）
* SSR			     服务器端渲染（在服务器端将模板和数据合成，返回最终的 HTML 页面）
* middleware      中间件（过滤器 + 增强器）
* cluster         多核处理模块（打破 Node.js 只支持单核 CPU 的限制）
* nodemon         监控 Node.js 源代码（修改自动重启服务）
* pm2             Node.js 进程管理器（0秒停机重载进程）
* node-inspector  Node.js 调试工具（在浏览器调试服务器端 Node.js 代码）

### 如何判断当前脚本运行在浏览器还是 node 环境中？

* 区分全局环境下 this 的指向
	- 在 node 中 this 指向 global，而在浏览器中 this 指向 window

## 什么是 npm ？

* npm（Node Package Manager） 是 Node.js 的模块管理和发布工具

### 什么是 WebKit ？

  * WebKit 是一个开源的浏览器内核，由渲染引擎(WebCore)和 JS 解释引擎(JSCore)组成
  * 通常所说的 WebKit 指的是 WebKit(WebCore)，主要工作是进行 HTML/CSS 渲染
  * WebKit 一直是 Safari 和 Chrome 使用的浏览器内核，后来 Chrome 改用 Blink 内核

### 如何测试前端代码? 知道 Unit Test，BDD, TDD 么? 怎么测试你的前端工程(mocha, jasmin ...)?

* 通过为前端代码编写单元测试(Unit Test)来测试前端代码
* Unit Test：一段用于测试一个模块或接口是否能达到预期结果的代码
* BDD：行为驱动开发 -- 业务需求描述产出产品代码的开发方法
* TDD：测试驱动开发 -- 单元测试用例代码产出产品代码的开发方法
* 单元测试框架示例：

	```Javascript
	// mocha 示例
	describe('Test add', function() {
		it('1 + 2 = 3', function() {
	    	expect(add(1, 2)).to.be.equal(3);
		});
	});
	
	// jasmin 示例
	describe('Test add', function () {
		it('1 + 2 = 3', function () {
	    	expect(add(1, 2)).toEqual(3);
		});
	});
	```

### 介绍你知道的前端模板引擎？

* artTemplate, underscore, handlebars

### 什么是 Shim 和 Polyfill？区别是什么？目标是什么？
	
* Shim(垫片)：将一个新的 API 引入到一个旧的环境中，仅靠旧环境中已有的手段实现。Shim 有时候也称为 shiv，比如著名的 HTML5 兼容库 html5shiv
	
* Polyfill：用在浏览器 API 上的 Shim。在旧版浏览器上复制标准 API(HTML5, CSS3) 的补充。通常的做法是先检查当前浏览器是否支持某个 API，如果不支持的话就加载对应的 polyfill 进行模拟增强
例如：geolocation polyfill 可以在 navigator 对象上添加全局的 geolocation 对象及相应成员
	
* 区别：Polyfill 专门用来兼容浏览器，Shim 的范围更大些
	
* 目标：一旦新的标准 API 被普遍的支持，可以方便地去掉 Shim(polyfill)，无需做其他额外工作

### 什么是 Modernizr？Modernizr 工作原理？

* Modernizr 是一个开源的 JavaScript 库，用于检测用户浏览器对 HTML5 与 CSS3 的支持情况

### 移动端最小触控区域是多大？

* 44 * 44 px  -- 参考《iOS 人机界面指南》

### 移动端的点击事件的延迟时间是多长，为什么会有延迟？ 如何解决这个延时？

* 移动端 click 有 300ms 延迟，浏览器为了区分“双击缩放”还是“单击”而设计。浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。这段时间就是上面提到的300毫秒延迟。

* 解决方案：
	- 禁用缩放(对 safari 无效)
		- `<meta name="viewport" content="width=device-width user-scalable=no"> `

	- CSS touch-action (IE 私有特性，且仅 IE10+)

		```css
		a, button {
		    -ms-touch-action: manipulation; /* IE10  */
		    touch-action: manipulation;     /* IE11+ */
		}
		```
	
	- 使用 Zepto 的 tap 事件(有点透 BUG)
	
		```javascript
		$(document).on('tap', function(e){
			$("div.panel").hide();
		});
		```
	
	- 使用 FastClick 插件(体积大[压缩后 8k])
	
		```javascript
		if ('addEventListener' in document) {
			document.addEventListener('DOMContentLoaded', function() {
				FastClick.attach(document.body);
			}, false);
		}
		```

### Zepto 的点透问题如何解决？

* 点透问题的由来：
	- Zepto 定义 tap 事件用来消除移动端 click 事件 300ms 延迟现象时产生的新BUG
* tap 实现原理：
	- 记录 touchstart 和 touchend 间隔和手指位置，两者变化较小且未触发 touchmove，即认为是 tap 操作
* 点透问题表现：
	- 点击弹出层关闭按钮（绑定了tap事件）关闭弹出层时，会误触发按钮正下方内容的 click 事件
* 点透问题原理：
	- 事件执行的顺序：touchstart > touchend > click，而 click 事件有 300ms 的延迟。执行 touchstart 300ms 后触发 click，此时弹出层已消失，click 就被派发到弹出层下面元素身上。
* 点透问题解决：
	- 为弹出层加入(300ms+)过渡动画渐进消失
	- 改用 FastClick 插件
	- 升级 Zepto 最新版本（如果新版本修复了点透BUG）

### 如何实现页面操作不刷新整页，并且能在浏览器“前进”、“后退”时正确响应？

* 方案一（HTML5 历史管理 History API）：
	1. 每次点击导航菜单，将 Ajax 请求的 URL 查询参数(?后面部分)追加到当前地址栏 URL 后面，并记录到浏览器历史
		- 通过 history.pushState 修改地址栏 URL，并记录浏览器历史
	2. “前进”、“后退”操作时，根据地址栏 URL 查询参数变化，反向发起响应 Ajax 请求，实现无刷新效果
	    - 通过 window.onpopstate 事件，监听浏览器的“前进”、“后退”操作
	3. 页面首次载入的时候，如果没有查询地址或查询地址不匹配，则使用第一个导航菜单的 Ajax 地址的查询内容
	    - 使用 history.replaceState 替换地址栏URL和浏览器历史，然后触发Ajax请求

* 方案二（URL锚点变化）：
	- window.location.hash 属性 + window.onhashchange 事件

### 什么是函数式编程？有什么特点和优点？

* 函数式编程是一种"编程范式"，主要思想是把"运算过程"尽量写成一系列嵌套的函数调用
	- 例如：var result = subtract(multiply(add(1,2), 3), 4);

* 函数式编程的特点：
	- 函数是一等公民：函数可以作为变量的赋值、另一函数的参数、另一函数的返回值
	- 只用“表达式”，不用“语句”：要求每一步都是单纯的运算，都必须有返回值
	- 没有"副作用"：所有功能只为返回一个新的值，不修改外部变量
	- 引用透明：运行不依赖于外部变量，只依赖于输入的参数

* 函数式编程的优点：
	- 代码简洁，接近自然语言，易于理解
	- 便于维护，利于测试、除错、组合
	- 易于“并发编程“，不用担心一个线程的数据，被另一个线程修改

### 什么是函数柯里化(Currying)？

* 柯里化：
   - 通常也称“部分求值”，含义是给函数分步传递参数，每次递参部分应用参数，并返回一个更具体的函数，继续接受剩余参数。期间会连续返回具体函数，直至返回最后结果。因此，函数柯里化是逐步传参，逐步缩小函数的适用范围，逐步求解的过程
   - Currying 的重要意义在于可以把函数完全变成「接受一个参数、返回一个值」的固定形式

* 柯里化的作用：
	- 延迟计算；参数复用；动态创建函数

* 柯里化的缺点：
	- 函数柯里化会产生开销（函数嵌套，比普通函数占更多内存），但性能瓶颈首先来自其它原因（DOM 操作等）

### 什么是面向切面编程（AOP）？

* 面向切面的编程（AOP）简单理解：可以在不修改原有代码的情况下，动态添加新功能

### 什么是依赖注入？

* 依赖注入，全称是“依赖注入到容器”， 容器（IOC 容器）是一个设计模式，它也是个对象，把某个类（不管有多少依赖关系）放入这个容器中，可以“解析”出这个类的实例
* 依赖注入将各层的对象以“松耦合”的方式组织在一起，各层对象的调用完全面向接口。当系统重构的时候，代码的改写量将大大减少

### 面向对象设计的原则？

* SRP(Single Responsibility) 单一职责原则 -- 每一个类应该专注于做一件事情
* OCP(Open Close)            开放封闭原则 -- 面向扩展开放，面向修改关闭
* LSP(Liskov Substitution)   里氏替换原则 -- 子类可以替换基类而不会出现错误和异常
* DIP(Dependence Inversion)  依赖倒置原则 -- 实现尽量依赖抽象，不依赖具体实现
* ISP(Interface Segregation) 接口隔离原则 -- 接口应该小而独立，而不是大而全面

### 设计模式：什么是 singleton, factory, strategy, decorator？

* Singleton(单例)   一个类只有唯一实例，这个实例在整个程序中有一个全局的访问点
* Factory (工厂)    解决实列化对象产生重复的问题
* Strategy(策略)    将每一个算法封装起来，使它们还可以相互替换，让算法独立于使用
* Observer(观察者)  多个观察者同时监听一个主体，当主体对象发生改变时，所有观察者都将得到通知
* Prototype(原型)   一个完全初始化的实例，用于拷贝或者克隆
* Adapter(适配器)   将不同类的接口进行匹配调整，尽管内部接口不兼容，不同的类还是可以协同工作
* Proxy(代理模式)   一个充当过滤转发的对象用来代表一个真实的对象
* Iterator(迭代器)  在不需要知道集合内部工作原理的情况下，顺序访问一个集合里面的元素
* Chain of Responsibility(职责连)  处理请求组成的对象一条链，请求链中传递，直到有对象可以处理

### 什么是前端工程化？

* 前端工程化就是把一整套前端工作流程使用工具自动化完成
* 前端开发基本流程：
	- 项目初始化：yeoman, FIS
	- 引入依赖包：bower, npm
	- 模块化管理：npm, browserify, Webpack
	- 代码编译：babel, sass, less, stylus
	- 代码优化(压缩/合并)：Gulp, Grunt
	- 代码检查：JSHint, ESLint
	- 代码测试：Mocha
* 目前最知名的构建工具：Rollup, npm + Webpack, Gulp, Grunt

### 介绍 Yeoman 是什么？

* Yeoman --前端开发脚手架工具，自动将最佳实践和工具整合起来构建项目骨架
* Yeoman 其实是三类工具的合体，三类工具各自独立：
	- yo --- 脚手架，自动生成工具（相当于一个粘合剂，把 Yeoman 工具粘合在一起）
	- Grunt、gulp --- 自动化构建工具 （最初只有 grunt，之后加入了 gulp）
	- Bower、npm --- 包管理工具 （原来是 bower，之后加入了 npm）

### 介绍 Webpack 是什么？有什么优势？

* Webpack 是一款[模块加载器]兼[打包工具]，用于把各种静态资源（js/css/image 等）作为模块来使用

* Webpack 的优势：
	- Webpack 同时支持 commonJS 和 AMD/CMD，方便代码迁移
	- 不仅仅能够模块化 JS ，还包括 CSS、Image 等
	- 能替代大部分 grunt/gulp 的工作，如打包、压缩混淆、图片 base64
	- 扩展性强，插件机制完善，特别是支持 React 热插拔的功能

### Webpack 1 / 2 / 3 的 区别
* webpack2 相对 webpack1 的新增了新特性，需要处理配置文件语法兼容：
	- 增加对 ES6 模块的原生支持
	- 可以混用 ES2015 和 AMD 和 CommonJS
	- 支持 tree-shaking（减少打包后的体积）
	- 新增更多的 CLI 参数项
		- `-p` 指定当前的编译环境为生产环境，即修改：process.env.NODE_ENV 为 "production"
	- 配置选项语法修改
		- resolve（解析）配置
			- 取消了 `extensions ` 空字符串（表示导入文件无后缀名）
			
			- Webpack1
			
			```
			resolve: {
			    extensions: ['', '.js', '.css'],
			    modulesDirectories: ['node_modules', 'src']
			}
			```
			
			- Webpack2
			
			```
			resolve: {
				extensions: ['.js', '.css'],
				modules: [
					path.resolve(__dirname, 'node_modules'),
					path.join(__dirname, './src')
				]
			}
			```
			
		- module（模块）配置
			- 外层 `loaders` 改为 `rules`
			- 内层 `loader` 改为 `use`
			- 所有插件必须加上 `-loader`，不再允许缩写
			- 不再支持使用`!`连接插件，改为数组形式
			- `json-loader` 模块已经移除，不再需要手动添加，webpack2 会自动处理
			
			- Webpack1
			
			```
			module: {
			    loaders: [{
			        test:   /\.(less|css)$/,
			        loader: "style!css!less!postcss"
			    }, {
			        test: /\.json$/,
			        loader: 'json'
			    }]
			}
			```
			
			- Webpack2
			
			```
			module: {
				rules: [{
					test: /\.(less|css)$/,
					use: [
						"style-loader", 
						"css-loader", 
						"less-loader", 
						"postcss-loader"
					]
				}]
		   };
			```	
		
		- plugins（插件）配置
			- 移除（内置）了 OccurenceOrderPlugin 模块、NoErrorsPlugin 模块

* webpack3 几乎与 webpack2 完全兼容，新增新特性：
	- 加入 Scope Hoisting（作用域提升）
		- 之前版本将每个依赖都分别封装在一个闭包函数中来独立作用域。这些包装函数闭包函数降低了浏览器 JS 引擎解析速度
		- Webpack 团队参考 Closure Compiler 和 Rollup JS，将有联系的模块放到同一闭包函数中，从而减少闭包函数数量，使文件大小的少量精简，提高 JS 执行效率
		- 在 Webpack3 配置中加入`ModuleConcatenationPlugin`插件来启用作用域提升

			```
			module.exports = {
				plugins: [
					new webpack.optimize.ModuleConcatenationPlugin()
				]
			};
			```
	
	- 加入 Magic Comments（魔法注解）
		- 在 Webpack2 中引入了 Code Splitting-Async 的新方法 import()，用于动态引入 ES Module，Webpack 将传入 import 方法的模块打包到一个单独的代码块（chunk），但是却不能像 require.ensure 一样，为生成的 chunk 指定chunkName。因此在 Webpack3 中提出了 Magic Comment 用于解决该问题

			```
			import(/* webpackChunkName: "my-chunk-name" */ 'module');
			```

### SPA 项目的 Webpack 配置优化

1. 分离第三方依赖
	- 在开发环境下, 通常会采取 HMR（模块热替换）模式来提高开发效率. 一般情况下, 我们只更改自身项目文件, 不会去更改第三方的依赖. 但 webpack 在 rebuild 的时候, 会 build 所有的依赖. 为减少 rebuild 的时间, 我们可以分离第三方依赖, 在项目启动之前, 将其单独打包和引入. 可以借助 DllPlugin 插件实现
2. 多进程构建项目
	- Webpack 的构建过程是单进程的, 利用 HappyPack 插件可让 loader 对文件进行多进程处理. HappyPack 会充分利用系统的资源来提升 Webpack 的构建效率. 此外,  Happypack 会将每一个文件的编译进行缓存，使得 rebuild 更快
3. 提取公共的依赖模块
	- 在生产环境下, 利用 CommonsChunkPlugin 插件提取公共的依赖模块. 提取公共模块式, 不能简单的将`node_modules`下的所有模块都打包在一起, 应该分析业务依赖和路由, 尽可能将各个路由组件的公共依赖分别提取, 避免 vendor 包过于太大
4. 分离不同类型的静态文件
	- 在生产环境下, 应该将图片和 CSS 从 JS 中分离, 控制最终的 bundle 文件的大小. 可以使用 ExtractTextPlugin 来提取 CSS; 通过设置 url-loader 的 limit 字节参数, 小于 limit 则将图片转为 DataURl，大于 limit 则通过 file-loader 将图片拷贝到相应的路径. url-loader 内置了 file-loader, 不需要再单独安装 file-loader

5. 优化混淆/压缩速度
	- Webpack 提供的 UglifyJS 插件采用单线程压缩, 速度较慢. 可以使用 Parallel 插件(webpack-parallel-uglify-plugin)进行优化

6. Gzip 压缩
	- 在生产环境下, 如果想进一步减小 bundle 文件的大小, 可以使用 Gzip 压缩. 前端使用 compression-webpack-plugin 插件配置, 同时需要服务端开启 gzip 压缩支持

7. 按需加载组件
	- 在单页应用中, 一个应用可能会对应很多路由, 每个路由都会对应一个组件. 如果将这些组件全部放进一个 bundle, 会导致最终的 bundle 文件很大. 可以利用 Webpack 的 Code Splitting 功能（CommonsChunkPlugin 插件）将代码进行分割, 实现路由的按需加载


### Grunt / Gulp / Webpack / Rollup 比较

* Grunt 是一套前端自动化工具，帮助处理反复重复的任务。一般用于：编译，压缩，合并文件，简单语法检查等
* Gulp 是基于“流”的自动化构建工具，采用代码优于配置的策略，更易于学习和使用
* Webpack 是模块化管理工具和打包工具。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、AMD 模块、ES6 模块、CSS、图片等。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载
* Webpack 的定位是模块打包器，而 Gulp/Grunt 属于构建工具。Webpack 可以代替 Gulp/Grunt 的一些功能，但不是一个职能的工具，可以配合使用
* Rollup 是下一代 ES6 模块化工具，它最大的亮点是利用 ES6 模块模块设计，生成更简洁、更简单的代码。尽可能高效地构建出能够直接被其它 JavaScript 库引用的模块
	- 基于权衡，Rollup 目前还不支持代码拆分（Code Splitting）和模块的热更新（HMR）
	- 一般而言，对于应用使用 Webpack，对于类库使用 Rollup；需要代码拆分(Code Splitting)，或者很多静态资源需要处理，再或者你构建的项目需要引入很多 CommonJS 模块的依赖时，使用 webpack。代码库是基于 ES6 模块，而且希望代码能够被其他人直接使用，使用 Rollup 
	- Rollup 与 Webpack 有这不同的用途，因此会共同存在，并相互支持
	- React 已经将构建工具从 Webpack 换成了 Rollup
	
### 介绍类库和框架的区别？

* 类库是一些函数的集合，辅助开发者编写应用，起主导作用的是开发者的代码
* 框架是已实现的特殊应用，开发者只需对它填充具体业务逻辑，起主导作用是框架

### 介绍什么是“单向绑定”和“双向绑定”，及各自的优缺点？
* 单向绑定
	- 把 Model 绑定到 View，当我们用 JS 更新 Model 时，View 就会自动更新
	- 优点：所有状态变化都可以被记录、跟踪，源头易追溯。同时组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性
	- 缺点：代码量会相应的上升，数据的流转过程变长，从而出现很多类似的样板代码 
		- Store.dispatch(action) => Reducer(state, action) => nextState
* 双向绑定
	- 相对于“单向绑定”，如果用户更新 View，Model 的数据也会自动被更新（双向绑定 = 单向绑定 + UI事件监听）
	- 当用户填写表单时，更新了 View 的状态，如果此时也自动更新了 Model 的状态，就相当于把 Model 和 View 做了双向绑定
	- 优点：在表单交互较多的场景下，会简化大量业务无关的代码
	- 缺点：无法追踪局部状态的变化，潜在的行为太多，增加了 debug 错误的难度

### 什么是 MVC/MVP/MVVM/Flux？

* MVC(Model-View-Controller) 
	- V->C, C->M, M->V
	- 通信都是单向的；C 只起路由作用，业务逻辑都部署在 V
	- Backbone

* MVP(Model-View-Presenter)
	- V<->P, P<->M
	- 通信都是双向的；V 和 M 不发生联系(通过P传)；V 非常薄，逻辑都部署在 P
	- Riot.js

* MVVM(Model-View-ViewModel)
	- V->VM, VM<->M
	- 采用双向数据绑定：View 和 ViewModel 的变动都会相互映射到对象上面
	- Angular

* Flux(Dispatcher-Store-View)
	- Action->Dispatcher->Store->View, View->Action
	- Facebook 为了解决在 MVC 应用中碰到的工程性问题提出一个架构思想
	- 基于一个简单的原则：数据在应用中单向流动（单向数据流）
	- React(Flux 中 View，只关注表现层)

### 介绍一下 React 组件生命周期？

* Mounting 初始化阶段
	* constructor
	* componentWillMount
	* render
	* componentDidCatch
	* componentDidMount

* Updating 更新阶段
	* componentWillReceiveProps
	* shouldComponentUpdate
	* componentWillUpdate
	* render
	* componentDidCatch
	* componentDidUpdate

* Unmounting 销毁阶段
	* componentWillUnmount

### React 16 有哪些更新
* 对核心算法重新实现
	- 采用了全新的内部架构 "Fiber"
	- 提升复杂 React 应用的可响应性和性能
* 重写服务器端渲染器（randerer）
	- 支持流（streaming），可以向客户端更快地发送字节，SSR 速度提高了三倍
* 更好的错误处理机制
	- 新增错误处理生命周期函数：componentDidCatch(error, info) 
* 新增 Portals 函数
	- 可以将子节点渲染到父节点之外的 DOM 节点中：ReactDOM.createPortal(children, domNode)
* 新增 render 返回类型：fragments 和 strings
	- `render() { return [<Component1>, <Component2>]; }`
	- `render() { return 'Hello React 16!; }`
* 体积更加小巧
	- react + react-dom 相比以前版本减少了 32%（使用 Rollup 构建工具；去除了 React 属性的白名单列表）
* 支持自定义 DOM 属性
	- 之前无法识别的 HTML 和 SVG 属性只能忽略，新版本中，可以将它们传递给 DOM 了
* 更新了开源协议（MIT）
	- 改为更宽松的 MIT 协议，容易被社区接受

### 介绍一下 vue 组件生命周期？

* beforeCreate 		组件创建前
* created 			组件创建后
* beforeMount 		模板载入前
* mounted 			模板载入后
* beforeUpdate 		组件更新前
* updated 			组件更新后
* beforeDestroy		组件销毁前
* destroyed			组件销毁后 


### Angular、React、Vue 的 比较

* angular 
	- AngularJS 是一套完整的框架，能够让程序员真正专注于业务逻辑
	- Angular 双向数据绑生产效率高，单向数据流更新数据要经过 action、dispatcher、reduce、view 四步，Angular 里一行代码即可
	- 双向数据绑定是一把双刃剑。随着组件增加，项目越来越复杂，双向数据绑定带来性能问题

* react 
	- 利用 jsx 创建虚拟 dom 
	- 使用单向绑定，在大型应用中让数据流易于理解
	- 同时适用于 web 端和原生 app（React Native）
	- React 本身只是一个 view 层，想要一套完整的框架，还需要引入 Redux、route 等

* vue 
	- API 设计简单，语法简明，学习成本低 
	- 构建方面不包含 路由 和 ajax 功能 
	- 更快的渲染速度和更小的体积


### 在什么情况下你会优先选择使用 Class Component 而不是 Functional Component？
* 在组件需要包含内部状态或者使用到生命周期函数的时候使用 Class Component ，否则使用函数式组件

### React 中调用 render 时机1. 首次渲染(Initial Render)2. 调用 this.setState
	- 并不是一次 setState 触发一次 render，React 可能会合并操作，再一次性进行 render 3. 父组件发生更新
	- 一般会引起 props 发生改变，但即使 props 没有改变或者父子组件之间没有数据交换，也会触发 render4. 调用this.forceUpdate### React 组件的优化思路1. 使用 Stateless Component、PureComponent2. shouldComponentUpdate 中避免不必要的更新3. 避免在 render 子组件时重新生成属性相关的函数4. 渲染列表组件正确标识 key

### Underscore 对哪些 JS 原生对象进行了扩展？提供了哪些好用的函数方法？

* Underscore 没有扩展任何 JS 内置对象，只提供了一套函数式编程的实用功能库
* Underscore 主要针对数组、对象、函数提供更方便的调用，弥补了部分 jQuery 没有实现的功能

* Underscore 好用的函数方法(对应ES6)：

	```Javascipt
	_.each(array, iteratee)         // array.forEach(iteratee)
	_.map(array, iteratee)          // array.map(iteratee)
	_.find(array, predicate)        // array.find(predicate)
	_.pluck(array, propertyName)    // array.map(value => value[propertyName])
	_.contains(array, element)      // array.includes(element)
	_.toArray(arguments)            // Array.from(arguments)
	_.compact(array)                // array.filter(x => !!x)
	_.uniq(array)                   // [...new Set(array)]
	_.indexOf(array, value)         // array.indexOf(value)
	_.keys(object)                  // Object.keys(object)
	_.isArray(object)               // Array.isArray(object)
	_.isFinite(object)              // Number.isFinite(object)
	```

### Backbone 是什么？
* Backbone 是一个基于 jquery 和 underscore 的前端(MVC)框架

### Riot.js 是什么？

* Riot.js 是一个轻量级（1Kb大小）的前端(MVP)框架。提供了模板引擎、路由、MVP模式
* Riot.js 是目前存在的 JavaScript 模板引擎中速度最快的（比 Underscore 的模板快7倍）

### AngularJS 是什么？

* AngularJS 是一个完善的前端 MVVM 框架，包含模板、数据双向绑定、路由、模块化、服务、依赖注入等
* AngularJS 由 Google 维护，用来协助大型单一页面应用开发

### React 是什么？

* React 不属于 MV* 系列的框架，作为构建用户界面的 JavaScript 库，侧重于 View 层
* React 把每一个组件当成了一个状态机，组件内部通过 state 来维护组件状态的变化，当组件的状态发生变化时，React 通过虚拟 DOM 技术来增量并且高效的更新真实 DOM

* React 主要的原理：
	- 虚拟 DOM + diff 算法 -> 不直接操作 DOM 对象
	- 组件 -> Virtual DOM 的节点
	- State 触发视图的渲染 -> 单向数据绑定

* React 解决方案：React + Redux + react-router + Fetch + webpack

### 简单介绍 Redux 核心 API 及其工作流程

* Redux 核心 API	- Store -- 应用状态 state 的管理者，存储着整个应用 state的对象	- Action -- 包含 type 属性的对象，type 是实现用户行为追踪的关键	- Reducer -- 根据 action.type 更新 state 的函数* Redux 工作流：	1.	通过Redux.createStore(reducer) 生成 Store	2.	通过 Store.getState() 获取 state 	3. 通过 Store.dispatch(action) 触发 Reducer	4. Reducer 根据 action.type 更新 state，并返回最新的 nextState

### 简单介绍 Redux 三大原则

* 单一数据源
	- 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
* State 是只读的
	- 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
* 使用纯函数来执行修改
	- 为了描述 action 如何改变 state tree，需要编写 reducers 纯函数

### react-router 路由系统的实现原理？

* 实现原理：location 与 components 之间的同步
	- 路由的职责是保证 UI 和 URL 的同步
	- 在 react-router 中，URL 对应 Location 对象，react components 决定 UI
	- 因此，路由在 react-router 中就转变成 location 与 components 之间的同步

### Meteor 是什么？

* Meteor 是一个全栈开发框架，基础构架是 Node.JS + MongoDB，并把延伸到了浏览器端
* Meteor 统一了服务器端和客户端的数据访问，使开发者可以轻松完成全栈式开发工作

### jQuery 的实现原理？

* jQuery 利用 JS 函数作用域的特性，用立即执行表达式包裹，解决了命名空间和变量污染问题

	```Javascript
	(function(window, undefined) {})(window);
	```

* 在闭包中把 jQuery 和 $ 绑定到 window 上，从而把 jQuery 和 $ 暴露为全局变量

	```Javascript
	window.jQuery = window.$ = jQuery;
	```


### jQuery.fn 的 init 方法返回的 this 指的是什么对象？ 为什么要返回 this？

* jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象
* 用户使用 jQuery() 或 $() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法

### jQuery.extend 与 jQuery.fn.extend 的区别？

* $.fn.extend() 和 $.extend() 都是 jQuery 为扩展插件提拱了两个方法

* `$.extend(object);` // 添加“工具函数”（静态方法），通过 `$.foo()` 调用

	```Javascript
	$.extend({
	　　min: function(a, b) { return a < b ? a : b; },
	　　max: function(a, b) { return a > b ? a : b; }
	});
	$.min(2, 3); //  2
	$.max(4, 5); //  5
	```

* $.extend([true,] obj, obj11[, obj2]); // 属性拷贝

	```Javascript
	var settings = {validate: false, limit: 5};
	var options = {validate: true, name: 'bar'};
	$.extend(settings, options);  // 注意：不支持第一个参数传 false
	//-> settings == {validate: true, limit: 5, name: 'bar'}
	```

* $.fn.extend(json); // 添加“成员函数”（实例方法），通过 `$(el).foo()` 调用

	```Javascript
	$.fn.extend({
		alertValue: function() {
			$(this).click(function(){
				alert($(this).val());
			});
		}
	});
		
	$("#email").alertValue();
	```

### jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

* 浅拷贝（只复制一份原始对象的引用）

`var newObject = $.extend({}, oldObject);`

* 深拷贝（将对象属性所引用的对象进行进行递归拷贝）

`var newObject = $.extend(true, {}, oldObject);`

### jQuery 的队列是如何实现的？队列可以用在哪些地方？

* jQuery 核心中有一组队列控制方法，由 queue()/dequeue()/clearQueue() 三个方法组成
* 主要应用于 animate()，ajax 等其他要按时间顺序执行的事件中

	```Javascript
	var fn1 = function () {console.log('事件1');}
	var fn2 = function () {console.log('事件2');}
	var fn3 = function () {console.log('事件3');}
	var fn4 = function () {console.log('事件4');}
	```
	
	// 入栈队列事件
	```Javascript
	$('#box').queue("queue1", fn1);  // push fn1 to queue1
	$('#box').queue("queue1", fn2);  // push fn2 to queue1
	```
	
	// 替换队列事件
	```Javascript
	$('#box').queue("queue1", []);  // delete queue1 with empty array
	$('#box').queue("queue1", [fn3, fn4]);  // replace queue1
	```
	
	// 获取队列事件（返回一个函数数组）
	```Javascript
	$('#box').queue("queue1");  // [fn3, fn4]
	```
	
	// 出栈队列事件并执行
	```Javascript
	$('#box').dequeue("queue1"); // return fn3 and do fn3
	$('#box').dequeue("queue1"); // return fn4 and do fn4
	```
	
	// 清空整个队列
	```Javascript
	$('#box').clearQueue("queue1"); // delete queue1 with clearQueue
	```

### jQuery 中的 bind(), live(), delegate(), on()的区别？

* bind 直接绑定事件到在目标元素上
* live 通过冒泡传播事件，默认冒泡到 document 上，支持动态数据
* delegate 更精确的小范围使用事件代理，性能优于 live
* on 1.9 及之后版本整合了之前的三种方式的新事件绑定机制

### 是否知道自定义事件？jQuery 里的 fire 函数什么时候用？

* 事件即“发布/订阅”模式，自定义事件即“消息发布”，事件的监听即“消息订阅”

* 原生 JS 自定义事件，示例：

	```javascript
	document.createEvent(type); // 创建事件
	event.initEvent(eventType, canBubble, prevent); // 初始化事件
	target.addEventListener('customEvent', handler, false); // 监听事件
	target.dispatchEvent(customEvent);  // 触发事件
	```

* jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件

### jQuery 通过哪个方法和 Sizzle 选择器结合的？

* Sizzle 选择器采取 Right To Left 的匹配模式，先搜寻所有匹配标签，再判断它的父节点
* jQuery 通过 $(selecter).find(selecter); 和 Sizzle 选择器结合

###  jQuery 中如何将数组转化为 JSON 字符串，然后再转化回来？

* 通过原生 JSON.stringify/JSON.parse 扩展 jQuery 实现

	```javascript
	$.array2json = function(array) {
		return JSON.stringify(array);
	}
	```
	
	```javascript
	$.json2array = function(array) {
		// $.parseJSON(array); // 3.0 开始，已过时
		return JSON.parse(array);
	}
	```
	
	// 调用
	```javascript
	var json = $.array2json(['a', 'b', 'c']);
	var array = $.json2array(json);
	```

### jQuery 一个对象可以同时绑定多个事件，如何实现的？
	
```javascript
$("#btn").on("mouseover mouseout", fn);
```
	
```javascript
$("#btn").on({
	mouseover: fn1,
	mouseout: fn2,
	click: fn3
});
```

### 针对 jQuery 的优化方法？

* 缓存频繁操作 DOM 对象
* 尽量使用 id 选择器代替 class 选择器
* 总是从 #id 选择器来继承
* 尽量使用链式操作
* 使用时间委托 on 绑定事件
* 采用 jQuery 的内部函数 data() 来存储数据
* 使用最新版本的 jQuery

### jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢?

* 在触发元素上的事件设置为延迟处理：使用 JS 原生 setTimeout 方法
* 在触发元素的事件时预先停止所有的动画，再执行相应的动画事件：$('.tab').stop().slideUp();

### jQuery UI 如何自定义组件？

通过向 $.widget() 传递组件名称和一个原型对象来完成

`$.widget("ns.widgetName", [baseWidget], widgetPrototype);`

### jQuery 与 jQuery UI、jQuery Mobile 区别？

* jQuery 是 JS 库，兼容各种 PC 浏览器，主要应用是更方便地处理 DOM、事件、动画、AJAX
* jQuery UI 是建立在 jQuery 库上的一组用户界面交互、特效、小部件及主题
* jQuery Mobile 以 jQuery 为基础，用于创建“移动 Web 应用”的框架

### jQuery 和 Zepto 的区别？ 各自的使用场景？

* jQuery 主要目标是 PC 的网页中，兼容全部主流浏览器。在移动设备方面，单独推出 jQuery Mobile
* Zepto 从一开始就定位移动设备，相对更轻量级。它的 API 基本兼容 jQuery，但对 PC 浏览器兼容不理想

## 其他问题

### 页面重构怎么操作？

* 网站重构：不改变 UI 的情况下，对网站进行优化，在扩展的同时保持一致的 UI

* 页面重构可以考虑的方面：
	- 升级第三方依赖
	- 使用 HTML5、CSS3、ES6+ 新特性
	- 加入响应式布局
	- 统一代码风格规范
	- 减少代码间的耦合
	- 压缩/合并静态资源
	- 程序的性能优化
	- 采用 CDN 来加速资源加载
	- 对于 JS DOM 的优化
	- HTTP 服务器的文件缓存

### 列举 IE 与其他浏览器不一样的特性？

* IE 的渲染引擎是 Trident 与 W3C 标准差异较大：例如盒子模型的怪异模式
* JS 方面有很多独立的方法，例如事件处理不同：绑定/删除事件，阻止冒泡，阻止默认事件等
* CSS 方面也有自己独有的处理方式，例如设置透明，低版本 IE 中使用滤镜的方式

### 什么叫优雅降级和渐进增强？

* 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
* 渐进增强：针对低版本浏览器构建页面，然后再针对高级浏览器进行效果、交互等用户体验的改进

### 请你谈谈 Cookie 的弊端？

* 同一的域名下最多生成的 cookie 个数有限制
* IE 和 Opera 会清理近期最少使用的 cookie，Firefox 会随机清理 cookie
* cookie 的最大约为 4096 字节，为了兼容性一般设置不超过 4095 字节
* 如果 cookie 被人拦截了，就可以取得所有的 session 信息

### 是否了解公钥加密和私钥加密？

* 私钥用于对数据进行签名，公钥用于对签名进行验证
* 网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密

### Web 应用从服务器主动推送 Data 到客户端有那些方式？

* AJAX 轮询
* html5 服务器推送事件

	`(new EventSource(SERVER_URL)).addEventListener("message", callback);`

* html5 Websocket

	`(new WebSocket(SERVER_URL)).addEventListener("message", callback);`


### http状态码有那些？分别代表是什么意思？
* 1XX(信息类)：表示接收到请求并且继续处理
* 2XX(响应成功)：表示动作被成功接收、理解和接受
	- 200 OK          请求成功返回
	- 201 CREATED     用户新建或修改数据成功
	- 202 Accepted    请求已经进入后台排队（异步任务）
	- 204 NO CONTENT  用户删除数据成功
* 3XX(重定向类)：为了完成指定的动作，必须接受进一步处理
	- 301 Moved Permanently  页面重定向
	- 302 Temporarily Moved  暂时重定向
	- 304 Not Modified       缓存可以继续使用
* 4XX(客户端错误类)：请求包含错误语法或不能正确执行
	- 400 Bad Request        请求出现语法错误
	- 401 Unauthorized       未经授权访问
	- 403 Forbidden          资源禁止访问
	- 404 Not Found          未找到指定位置的资源
	- 406 Not Acceptable     用户请求的数据格式不存在
	- 410 Gone               用户请求的资源被永久删除，且不会再得到的
* 5XX(服务端错误类)：服务器不能正确执行一个正确的请求
	- 500 Internal Server Error  服务器内部错误
	- 501 Not Implemented        服务器不支持请求类型
	- 502 Bad Gateway   		  网关错误
	- 503 Service Unavailable    服务器不可用
	- 504 Gateway Time-out		  网关超时

### 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

1. DNS 查询（浏览器查找域名对应的 IP 地址）
	- DNS 查询流程：浏览器缓存 -> 系统缓存 -> 路由器缓存 -> ISP DNS 缓存 -> 根域名服务器
2. 浏览器向 Web 服务器发送一个 HTTP 请求（TCP三次握手）
3. 服务器 301 重定向（从 http://example.com 重定向到 http://www.example.com）
4. 浏览器跟踪重定向地址，请求另一个带 www 的网址
5. 服务器处理请求（通过路由读取资源）
6. 服务器返回一个 HTTP 响应（报头中把 Content-type 设置为 'text/html'）
7. 浏览器解析 DOM 树构
8. 浏览器发送请求获取嵌在 HTML 中的资源（如图片、音频、视频、CSS、JS等）
9. 浏览器显示完成页面
10. 浏览器发送异步请求

### 如何看待 Web App/hybrid App/Native App？（移动端前端 和 Web 前端区别？）

* Web App(HTML5)：采用 HTML5 开发，运行在浏览器中的应用，不需要下载安装
	- 优点：开发成本低，迭代更新容易，不需用户升级，跨多个平台和终端
	- 缺点：消息推送不够及时，图形和动画效果较差，功能使用限制（相机、GPS等）

* Hybrid App(混合开发)：UI WebView，需要下载安装
	- 优点：接近 Native App 的体验，部分支持离线功能
	- 缺点：性能速度较慢，未知的部署时间，受限于技术尚不成熟

* Native App(原生开发)：依托于操作系统，有很强的交互，需要用户下载安装使用
	- 优点：用户体验完美，支持离线工作，可访问本地资源（通讯录，相册）
	- 缺点：开发成本高（多系统），开发成本高（版本更新），需要应用商店的审核

### Web 前端开发的注意事项？

* 特别设置 meta 标签 viewport
* 百分比布局宽度，结合 box-sizing: border-box;
* 使用 rem 作为计算单位。rem 只参照跟节点 html 的字体大小计算
* 使用 css3 新特性。弹性盒模型、多列布局、媒体查询等
* 多机型、多尺寸、多系统覆盖测试

### 在设计 Web APP 时，应当遵循以下几点：

* 简化不重要的动画/动效/图形文字样式
* 少用手势，避免与浏览器手势冲突
* 减少页面内容，页面跳转次数，尽量在当前页面显示
* 增强 Loading 趣味性，增强页面主次关系

### 平时如何管理你的项目？

* 严格执行约定的代码规范
* 规定全局样式、公共脚本
* 严格要求代码注释(html/js/css)
* 严格要求静态资源存放路径
* Git 提交必须填写说明

### 如何设计突发大规模并发架构？

* 及时响应(NoSQL缓存)
* 数据安全(数据备份)
* 负载均衡

### 如何做 SEO 优化?

* 标题与关键词
	- 设置有吸引力切合实际的标题，标题中要包含所做的关键词
* 网站结构目录
	- 最好不要超过三级，每级有“面包屑导航”，使网站成树状结构分布
* 页面元素
	- 给图片标注"Alt"可以让搜索引擎更友好的收录
* 网站内容
	- 每个月每天有规律的更新网站的内容，会使搜索引擎更加喜欢
* 友情链接
	- 对方一定要是正规网站，每天有专业的团队或者个人维护更新
* 内链的布置
	- 使网站形成类似蜘蛛网的结构，不会出现单独连接的页面或链接
* 流量分析
	- 通过统计工具(百度统计，CNZZ)分析流量来源，指导下一步的 SEO

### 移动端（Android、IOS）怎么做好用户体验?

* 清晰的视觉纵线
* 信息的分组、极致的减法
* 利用选择代替输入
* 标签及文字的排布方式
* 依靠明文确认密码
* 合理的键盘利用

### 前端页面有哪三层构成，分别是什么？作用是什么？

* 结构层：由 (X)HTML 标记语言负责，解决页面“内容是什么”的问题
* 表示层：由 CSS 负责，解决页面“如何显示内容”的问题
* 行为层：由 JS 脚本负责，解决页面上“内容应该如何对事件作出反应”的问题

### 是否了解 Web 注入攻击（最常见 XSS 和 CSRF）？

* XSS(Cross Site Script)，跨站脚本攻击
	- 攻击者在页面里插入恶意代码，当用户浏览该页之时，执行嵌入的恶意代码达到攻击目的
	- 防御措施
		- 过滤转义输入输出
		- 避免使用 eval、new Function 等执行字符串的方法，除非确定字符串和用户输入无关
		- 设置 Cookie 为 HttpOnly，禁止 JavaScript 操作 Cookie

* CSRF(Cross Site Request Forgery)，跨站点请求伪造
	- 伪造合法请求，让用户在不知情的情况下以登录的身份访问，利用用户信任达到攻击目的
	- 防御措施
		- 检测 http referer 是否是同域名
		- 避免登录的 session 长时间存储在客户端中
		- 关键请求使用验证码或者 token 机制验证


### 如何防范 Web 前端攻击？

* 不要信任任何外部传入的数据
	- 针对用户输入作相关的格式检查、过滤等操作

* 不要信任任何第三方数据传入
	- 使用 CORS（跨域资源共享），设置 Access-Control-Allow-Origin

* 更安全地使用 Cookie
	- 设置 Cookie 为 HttpOnly，禁止 JavaScript 操作 Cookie

* 防止网页被其他网站内嵌为 iframe
	- 服务器端设置 X-Frame-Options 响应头，防止页面被内嵌


### 线程与进程的区别？

* 一个程序至少有一个进程，一个进程至少有一个线程
* 线程的划分尺度小于进程，使得多线程程序的并发性高
* 进程在执行过程中拥有独立的内存单元，而多个线程共享内存
* 线程不能够独立执行，必须应用程序提供多个线程执行控制

### git 命令，如何批量删除分支

* 从分支列表中匹配到指定分支，然后一个一个(分成小块)传递给删除分支的命令，最后进行删除

	`git branch |grep 'branchName' |xargs git branch -D`
	
### 如何进行前端错误监控，跨域 js 运行错误如何捕获，上报错误的基本原理？

* 前端错误主要分为“即时运行错误（代码错误）”和“资源加载错误”
* 即时运行错误的捕获方式：
	- `try-catch`
	- `window.onerror`
* 资源加载错误：
	- object.onerror
		- `img.onerror`
		- `script.onerror`
	- `window.performance.getEntries()`

* 跨域的 js 运行错误捕获
	- 设置 script 标签 crossorigin 属性 `crossorigin="anonymous"`
	- 设置 js 资源响应头 `Access-Control-Allow-Orgin:*`

* 上报错误的基本原理
	- 采用 Ajax 方式上报
	- 利用 Image 对象上报

### 如何快速合并雪碧图
* Gulp：gulp-css-spriter
* webpack：optimize-css-assets-webpack-plugin
* 在线工具 Go!Png

### npm 依赖包版本号 ~ 和 ^ 的区别及注意事项* ~ 会匹配最近的小版本依赖包，比如 ~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0* ^ 会匹配最新的大版本依赖包，比如 ^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0* 需要注意 ^ 版本更新比较大，可能会造成项目现有代码不兼容* 建议使用 ~ 来标记版本号，这样既能保证项目不会出现大的问题，也能保证依赖包中的小 bug 可以得到修复
### HTTPS 的握手过程
1. 浏览器将自己支持的一套加密规则发送给服务器
2. 服务器从中选出一组加密算法与 HASH 算法，并将自己的身份信息以证书的形式发回给浏览器。证书里面包含了网站地址，加密公钥，以及证书的颁发机构等信息
3. 浏览器获得网站证书之后要做以下工作：
	- 验证证书的合法
	- 如果证书受信任，或者是用户接受了不受信的证书，浏览器会生成一串随机数的密码，并用证书中提供的公钥加密
	- 使用约定好的 HASH 算法计算握手消息，并使用生成的随机数对消息进行加密，最后将之前生成的所有信息发送给服务器
4. 网站接收浏览器发来的数据之后要做以下的操作：
	- 使用自己的私钥将信息解密取出密码，使用密码解密浏览器发来的握手消息，并验证 HASH 是否与浏览器发来的一致
	- 使用密码加密一段握手消息，发送给浏览器
5. 浏览器解密并计算握手消息的 HASH，如果与服务端发来的 HASH 一致，此时握手过程结束，之后所有的通信数据将由之前浏览器生成的随机密码并利用对称加密算法进行加密


## 其他参考

> [我遇到的前端面试题2017](http://www.imooc.com/article/20319)

> [2017年第一波 JS 前端面试题](https://zhuanlan.zhihu.com/p/25424194)

> [2017前端面试题及答案总结（一）](http://blog.csdn.net/u013594331/article/details/77885391)

> [2017前端面试题及答案总结（二）](http://blog.csdn.net/u013594331/article/details/77925881)

