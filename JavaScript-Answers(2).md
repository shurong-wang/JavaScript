
## 前端框架相关

- 什么是单页面应用(SPA)？

      单页面应用(SPA)是指用户在浏览器加载单一的HTML页面，后续请求都无需再离开此页。
      单页面应用旨在用为用户提供了更接近本地移动APP或桌面应用程序的体验。

      流程：第一次请求时，所有HTML传输到客户端，其余的请求都通过 REST API 获取 JSON 数据。
      实现：数据的传输通过 Web Socket API 或 RPC(远程过程调用)。

      优点：用户体验流畅，服务器压力小，前后端职责分离
      缺点：不利于 SEO

- 什么是“前端路由”? 什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

      前端路由通过JS处理 URL 和 History 来实现页面切换。请求不会传给服务器，而由被浏览器处理。
      前端路由主要适用于“前后端分离”的单页面应用(SPA)项目。
      优点：用户体验好，交互流畅
      缺点：浏览器“前进”、“后退”会重新请求，无法合理利用缓存

- 模块化开发怎么做？

      * 封装对象作为命名空间 -- 内部状态可以被外部改写
      * 立即执行函数(IIFE) -- 需要依赖多个JS文件，并且严格按顺序加载
      * 使用模块加载器 -- require.js, sea.js, EC6 模块

- 通行的 Javascript 模块的规范有哪些？

       * CommonJS -- 主要用在服务器端 node.js

            var math = require('./math');
            math.add(2,3);

       * AMD(异步模块定义) -- require.js

        　  require(['./math'], function (math) {
        　　　　math.add(2, 3);
        　　});

       * CMD(通用模块定义) -- sea.js

            var math = require('./math');
            math.add(2,3);

       * E6 模块

            import {math} from './math';
            math.add(2, 3);

- AMD(Modules Asynchronous Definition) 与 CMD(Common Module Definition) 规范的区别？

       1. 规范化产出：
            AMD 由 RequireJS 推广
            CMD 由 SeaJS 推广

       2. 模块的依赖:
            AMD 提前执行（RequireJS 从 2.0 开始，可以延迟执行），推崇依赖前置
            CMD 延迟执行，推崇依赖就近

       3. API 功能:
            AMD 的 API 默认是一个当多个用（分全局 require 和局部 require）
            CMD 的 API 推崇职责单一纯粹（没有全局 require）

	    4. 模块定义规则：

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
            })

- requireJS的核心原理是什么？

      每个模块所依赖模块都会比本模块预先加载

- react-router 路由系统的实现原理？

      实现原理：location 与 components 之间的同步

      路由的职责是保证 UI 和 URL 的同步。
      在 react-router 中， URL 对应 Location 对象，而 UI 由 react components 来决定。
      这样，在 react-router 中就转变成 location 与 components 之间的同步。

- 对 Node.js 的优点、缺点提出了自己的看法？ Node.js的特点和适用场景？

      Node.js的特点：单线程，非阻塞I/O，事件驱动
      Node.js的优点：擅长处理高并发；适合I/O密集型应用
      Node.js的缺点：不适合CPU密集运算；不能充分利用多核CPU；可靠性低，某个环节出错会导致整个系统崩溃
      Node.js的适用场景：
        * RESTful API
        * 实时应用：在线聊天、图文直播
        * 工具类应用：前端部署(npm, gulp)
        * 表单收集：问卷系统

- 介绍 route, server-side rendering, middleware, cluster, nodemon, pm2, node-inspector？

      * route                 路由（用来保证用户界面与 URL 的同步）
      * server-side rendering 服务器端渲染（在服务器端将模板和数据合成，返回最终的HTML页面）
      * middleware            中间件（过滤器 + 增强器）
      * cluster               多核处理模块（打破 Node.js 只支持单核 CPU 的限制）
      * nodemon               监控 Node.js 源代码（修改自动重启服务）
      * pm2                   Node.js 进程管理器（0秒停机重载进程）
      * node-inspector        Node.js 调试工具（在浏览器调试服务器端 Node.js 代码）

- 如何判断当前脚本运行在浏览器还是node环境中？

      判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

- 什么是 npm ？

      npm 是 Node.js 的模块管理和发布工具

- 什么是 WebKit ？

      * WebKit 是一个开源的浏览器内核，由渲染引擎(WebCore)和JS解释引擎(JSCore)组成
      * 通常所说的 WebKit 指的是 WebKit(WebCore)，主要工作是进行 HTML/CSS 渲染
      * WebKit 一直是 Safari 和 Chrome(之前) 使用的浏览器内核，后来 Chrome 改用Blink 内核

- 如何测试前端代码? 知道 Unit Test，BDD, TDD 么? 怎么测试你的前端工程(mocha, jasmin..)?

       * 通过为前端代码编写单元测试(Unit Test)来测试前端代码
       * Unit Test：一段用于测试一个模块或接口是否能达到预期结果的代码
       * BDD：行为驱动开发 -- 业务需求描述产出产品代码的开发方法
       * TDD：测试驱动开发 -- 单元测试用例代码产出产品代码的开发方法
       * 单元测试框架：

        // mocha:
        describe('Test add', function() {
          it('1 + 2 = 3', function() {
            expect(add(1, 2)).to.be.equal(3);
          });
        });

        //jasmin:
        describe('Test add', function () {
            it('1 + 2 = 3', function () {
                expect(add(1, 2)).toEqual(3);
            });
        });

- 介绍你知道的前端模板引擎？

       artTemplate, underscore, handlebars

- 什么是 Shim 和 Polyfill？ 区别是什么？ 目标是什么？

        * Shim：将一个新的 API 引入到一个旧的环境中，仅靠旧环境中已有的手段实现。
            Shim 有时候也称为 shiv，比如著名的 HTML5 兼容库 html5shiv
            例如 es5-shim：在 ES3 引擎上实现了 ES5 的新特性，可用在浏览器和服务器(Node.js)

	    * Polyfill：用在浏览器API上的 Shim(垫片)。在旧版浏览器上复制标准 API(HTML5, CSS3) 的补充。
		    通常的做法是先检查当前浏览器是否支持某个API，如果不支持的话就加载对应的 polyfill 进行模拟增强。
            例如：geolocation polyfill 可以在 navigator 对象上添加全局的 geolocation 对象及相应成员。

		* 区别：Polyfill 专门用来兼容浏览器，Shim 的范围更大些

		* 目标：一旦新的标准API被普遍的支持，可以方便地去掉 Shim(polyfill)，无需做其他额外工作。

- 什么是 Modernizr？ Modernizr 工作原理？

       * Modernizr 是一个开源的 JavaScript 库，用于检测用户浏览器对 HTML5 与 CSS3 的支持情况
       * 工作原理：
          页面加载后立即使用 JS 测试浏览器所支持的特性，将结果作为属性记录在名为Modernizr的对象中。
          开发人员可以通过这些信息了解他们准备使用的某特性是否被浏览器支持，并作出相应的处理。

- 移动端最小触控区域是多大？

      44 * 44 px -- 《iOS 人机界面指南》

- 移动端的点击事件的延迟时间是多长，为什么会有延迟？ 如何解决这个延时？

       * 移动端 click 有 300ms 延迟，浏览器为了区分“双击”（放大页面）还是“单击”而设计
       * 解决方案：
        1.禁用缩放(对safari无效)      meta: content='width=device-width, user-scalable=no'
        2.使用 pointerup 事件(IE10+) css:  -ms-touch-action: none; /* IE10  */
                                          touch-action: none;     /* IE11+ */
        3.使用 Zepto 的 tap 事件(有点透BUG)
        4.使用 FastClick 插件(体积大[压缩后8k])

- Zepto 的点透问题如何解决？

      * 点透问题的由来：
         Zepto 定义 tap 事件用来消除移动端 click 事件 300ms 延迟现象时产生的新BUG
      * tap 实现原理：
         记录 touchstart 和 touchend 间隔和手指位置，两者变化较小且未触发 touchmove，即认为是 tap 操作
      * 点透问题表现：
         点击弹出层关闭按钮（绑定了tap事件）关闭弹出层时，会误触发按钮正下方内容的 click 事件
      * 点透问题原理：
         事件执行的顺序：touchstart > touchend > click，而 click 事件有300ms的延迟。
         执行 touchstart 300ms 后触发 click，此时弹出层已消失，click 就被派发到弹出层下面元素身上。
      * 点透问题解决：
         1. 为弹出层加入(300ms+)过渡动画渐进消失
         2. 改用 FastClick 插件
         3. 升级 Zepto 最新版本（如果新版本修复了点透BUG）

- 实现页面操作不刷新整页，并且能在浏览器“前进”、“后退”时正确响应？

      方案一（HTML5 历史管理）：
        1. 每次点击导航菜单，将Ajax请求的URL查询参数(?后面部分)追加到当前地址栏URL后面，并记录到浏览器历史
            -- 通过 history.pushState 修改地址栏URL，并记录浏览器历史
        2. “前进”、“后退”操作时，根据地址栏URL查询参数变化，反向发起响应Ajax请求，实现无刷新效果
            -- 通过 window.onpopstate 事件，监听浏览器的“前进”、“后退”操作
        3. 页面首次载入的时候，如果没有查询地址或查询地址不匹配，则使用第一个导航菜单的Ajax地址的查询内容
            -- 使用 history.replaceState 替换地址栏URL和浏览器历史，然后触发Ajax请求

      方案二（URL锚点变化）：
        window.location.hash 属性 + window.onhashchange 事件

- 什么是函数式编程？

      函数式编程是一种"编程范式"，主要思想是把运算过程尽量写成一系列嵌套的函数调用。
      例如：var result = subtract(multiply(add(1,2), 3), 4);

      函数式编程的特点：
        1. 函数核心化：函数可以作为变量的赋值、另一函数的参数、另一函数的返回值
        2. 只用“表达式”，不用“语句”：要求每一步都是单纯的运算，都必须有返回值
        3. 没有"副作用"：所有功能只为返回一个新的值，不修改外部变量
        4. 引用透明：运行不依赖于外部变量，只依赖于输入的参数

      函数式编程的优点：
        1. 代码简洁，接近自然语言，易于理解
        2. 便于维护，利于测试、除错、组合
        3. 易于“并发编程“，不用担心一个线程的数据，被另一个线程修改
        4. 可“热升级”代码，在运行状态下直接升级代码，不需要重启，也不需要停机

- 什么是函数柯里化Currying)？

      柯里化：
       通常也称部分求值，含义是给函数分步传递参数，每次递参部分应用参数，并返回一个更具体的函数，继续接受剩余参数。
       期间会连续返回具体函数，直至返回最后结果。因此，函数柯里化是逐步传参，逐步缩小函数的适用范围，逐步求解的过程。

      柯里化的作用：延迟计算；参数复用；动态创建函数

      柯里化的缺点：
       函数柯里化会产生开销（函数嵌套，比普通函数占更多内存），但性能瓶颈首先来自其它原因（DOM 操作等）

- 什么是面向切面编程（AOP）？

      面向切面的编程（AOP）简单理解：可以在不修改原有代码的情况下，动态添加新功能

- 什么是依赖注入？

      当一个类的实例依赖另一个类的实例时，自己不创建该实例，由IOC容器创建并注入给自己，因此称为依赖注入。
      依赖注入解决的就是如何有效组织代码依赖模块的问题

- 面向对象设计的原则？

      SRP(Single Responsibility) 单一职责原则 -- 每一个类应该专注于做一件事情
      OCP(Open Close)            开放封闭原则 -- 面向扩展开放，面向修改关闭
      LSP(Liskov Substitution)   里氏替换原则 -- 子类可以替换基类而不会出现错误和异常
      DIP(Dependence Inversion)  依赖倒置原则 -- 实现尽量依赖抽象，不依赖具体实现
      ISP(Interface Segregation) 接口隔离原则 -- 接口应该小而独立，而不是大而全面

- 设计模式：什么是 singleton, factory, strategy, decorator？

      Singleton(单例)   一个类只有唯一实例，这个实例在整个程序中有一个全局的访问点
      Factory (工厂)    解决实列化对象产生重复的问题
      Strategy(策略)    将每一个算法封装起来，使它们还可以相互替换，让算法独立于使用
      Observer(观察者)  多个观察者同时监听一个主体，当主体对象发生改变时，所有观察者都将得到通知
      Prototype(原型)   一个完全初始化的实例，用于拷贝或者克隆
      Adapter(适配器)   将不同类的接口进行匹配调整，尽管内部接口不兼容，不同的类还是可以协同工作
      Proxy(代理模式)   一个充当过滤转发的对象用来代表一个真实的对象
      Iterator(迭代器)  在不需要直到集合内部工作原理的情况下，顺序访问一个集合里面的元素
      Chain of Responsibility(职责连)  处理请求组成的对象一条链，请求链中传递，直到有对象可以处理

- 什么是前端工程化？

      前端开发基本流程：
        * 项目初始化：yeoman, FIS
        * 引入依赖包：bower, npm
        * 模块化管理：npm, browserify, Webpack
        * 代码编译：babel, sass, less
        * 代码优化(压缩/合并)：Gulp, Grunt
        * 代码检查：JSHint, ESLint
        * 代码测试：Mocha

      前端工程化就是把一整套前端工作流程使用工具自动化完成

      目前最知名的构建工具：Gulp, Grunt, npm + Webpack

- 介绍 Yeoman 是什么？

      Yeoman --前端开发脚手架工具，自动将最佳实践和工具整合起来构建项目骨架

      Yeoman 其实是三类工具的合体：
        1. yo --- 脚手架，自动生成工具
        2. Grunt、gulp --- 自动化构建工具 （最初只有grunt，之后加入了gulp）
        3. Bower、npm --- 包管理工具 （原来是bower，之后加入了npm）
        4. 三类工具各自独立，yo相当于一个粘合剂，把这些工具粘合在一起。

- 介绍 WebPack 是什么？ 有什么优势？

      WebPack 是一款[模块加载器]兼[打包工具]，用于把各种静态资源（js/css/image等）作为模块来使用

      WebPack 的优势：
       1. WebPack 同时支持 commonJS 和 AMD/CMD，方便代码迁移
       2. 不仅仅能被模块化 JS ，还包括 CSS、Image 等
       3. 能替代部分 grunt/gulp 的工作，如打包、压缩混淆、图片base64
       4. 扩展性强，插件机制完善，特别是支持 React 热插拔的功能

- 介绍类库和框架的区别？

      * 类库是一些函数的集合，帮助开发者写WEB应用，起主导作用的是开发者的代码
      * 框架是已实现的特殊WEB应用，开发者只需对它填充具体的业务逻辑，起主导作用是框架

- Underscore 对哪些 JS 原生对象进行了扩展？提供了哪些好用的函数方法？

      Underscore 没有扩展任何JS内置对象，只提供了一套函数式编程的实用功能库（主要针对数组/对象/函数）
      Underscore 它弥补了部分 jQuery 没有实现的功能，同时又是 Backbone.js 必不可少的部分

      Underscore 好用的函数方法(对应ES6)：
        _.each(array, iteratee)         array.forEach(iteratee)
        _.map(array, iteratee)          array.map(iteratee)
        _.find(array, predicate)        array.find(predicate)
        _.pluck(array, propertyName)    array.map(value => value[propertyName])
        _.contains(array, element)      array.includes(element)
        _.toArray(arguments)            Array.from(arguments)
        _.compact(array)                array.filter(x => !!x)
        _.uniq(array)                   [...new Set(array)]
        _.indexOf(array, value)         array.indexOf(value)
        _.keys(object)                  Object.keys(object)
        _.isArray(object)               Array.isArray(object)
        _.isFinite(object)              Number.isFinite(object)

- 什么是 MVC/MVP/MVVM/Flux？

      * MVC(Model-View-Controller)  V->C, C->M, M->V
        - 通信都是单向的；C只起路由作用，业务逻辑都部署在V
        - Backbone

      * MVP(Model-View-Presenter)   V<->P, P<->M
        - 通信都是双向的；V和M不发生联系(通过P传)；V非常薄，逻辑都部署在P
        - Riot.js

      * MVVM(Model-View-ViewModel)  V->VM, VM<->M
        - 采用双向数据绑定：View 和 ViewModel 的变动都会相互映射到对象上面
        - Angular

      * Flux(Dispatcher-Store-View) Action->Dispatcher->Store->View, View->Action
        - Facebook 为了解决在 MVC 应用中碰到的工程性问题提出一个架构思想
        - 基于一个简单的原则：数据在应用中单向流动（单向数据流）
        - React(Flux 中 View，只关注表现层)

- Backbone 是什么？

      Backbone 为复杂WEB应用程序提供模型(models)、集合(collections)、视图(views)的结构
      Backbone 将数据呈现为 Models, 当 Models 改变，视图也会自动变化。

- Riot.js 是什么？

      Riot.js 是一个轻量级（1Kb大小）的客户端(MVP)框架。提供了模板引擎、路由、MVP模式。
      Riot.js 是目前存在的JavaScript模板引擎中速度最快的（比Underscore的模板快7倍）

- AngularJS 是什么？

      AngularJS 是一款 JavaScript 框架，由 Google 维护，用来协助大型单一页面应用开发。
      AngularJS 是较完善的前端 MVVM 框架，包含模板，数据双向绑定，路由，模块化，服务，依赖注入等所有功能

- React 是什么？

      React 不是 MV* 框架，用于构建用户界面的 JavaScript 库，侧重于 View 层

      React 主要的原理：
       1. 虚拟 DOM + diff 算法 -> 不直接操作 DOM 对象
       2. Components 组件 -> Virtual DOM 的节点
       3. State 触发视图的渲染 -> 单向数据绑定

      React 解决方案：React + Redux + react-router + Fetch + webpack

- Meteor 是什么？

      Meteor 是一个 Web APP开发框架，基础构架是 Node.JS + MongoDB，并把该构架延伸到了浏览器端。
      Meteor 统一了服务器端和客户端的数据访问，使开发者可以轻松完成全栈式开发的所有工作。

- jQuery 的实现原理？

      // (function(window, undefined) {})(window);
      jQuery 利用 JS 函数作用域的特性，采用立即调用表达式包裹了自身，解决命名空间和变量污染问题

      // window.jQuery = window.$ = jQuery;
      在闭包当中将 jQuery 和 $ 绑定到 window 上，从而将 jQuery 和 $ 暴露为全局变量

- jQuery.fn 的 init 方法返回的 this 指的是什么对象？ 为什么要返回 this？

       jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象
       用户使用 jQuery() 或 $() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法

- jQuery.extend 与 jQuery.fn.extend 的区别？

      * $.fn.extend() 和 $.extend() 是 jQuery 为扩展插件提拱了两个方法

      * $.extend(object); // 为jQuery添加“静态方法”（工具方法）

            $.extend({
            　　min: function(a, b) { return a < b ? a : b; },
            　　max: function(a, b) { return a > b ? a : b; }
            });
            $.min(2,3); //  2
            $.max(4,5); //  5

      * $.extend([true,] targetObject, object1[, object2]); // 对targt对象进行扩展

            var settings = {validate:false, limit:5};
            var options = {validate:true, name:"bar"};
            $.extend(settings, options);  // 注意：不支持第一个参数传 false
            // settings == {validate:true, limit:5, name:"bar"}

      * $.fn.extend(json); // 为jQuery添加“成员函数”（实例方法）

            $.fn.extend({
               alertValue: function() {
                  $(this).click(function(){
                    alert($(this).val());
                  });
               }
            });

            $("#email").alertValue();

- jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

      // 浅拷贝（只复制一份原始对象的引用）
      var newObject = $.extend({}, oldObject);

      // 深拷贝（对原始对象属性所引用的对象进行进行递归拷贝）
      var newObject = $.extend(true, {}, oldObject);

- jQuery 的队列是如何实现的？队列可以用在哪些地方？

      jQuery 核心中有一组队列控制方法，由 queue()/dequeue()/clearQueue() 三个方法组成。
      主要应用于 animate()，ajax，其他要按时间顺序执行的事件中

        var func1 = function(){alert('事件1');}
        var func2 = function(){alert('事件2');}
        var func3 = function(){alert('事件3');}
        var func4 = function(){alert('事件4');}

        - $(selecter).queue(queueName, callback);
            $('#box').queue("queue1", func1);  // push func1 to queue1
            $('#box').queue("queue1", func2);  // push func2 to queue1

        - $(selecter).queue(queueName, replaceQueueArray);
            $('#box').queue("queue1", []);  // delete queue1 with empty array
            $('#box').queue("queue1", [func3, func4]);  // replace queue1

        - $(selecter).queue(queueName);
            $('#box').queue("queue1");  // [func3(), func4()]

        - $(selecter).dequeue(queueName);
            $('#box').dequeue("queue1"); // return func3 and do func3
            $('#box').dequeue("queue1"); // return func4 and do func4

        - $(selecter)clearQueue(queueName);
            $('#box').clearQueue("queue1"); // delete queue1 with clearQueue

- jQuery 中的 bind(), live(), delegate(), on()的区别？

      bind 直接绑定在目标元素上
      live 通过冒泡传播事件，默认document上，支持动态数据
      delegate 更精确的小范围使用事件代理，性能优于 live
      on 是最新的1.9版本整合了之前的三种方式的新事件绑定机制

- 是否知道自定义事件？ jQuery 里的 fire 函数是什么意思，什么时候用？

      事件即“发布/订阅”模式，自定义事件即“消息发布”，事件的监听即“订阅订阅”

      JS 原生支持自定义事件，示例：
        - document.createEvent(type); // 创建事件
        - event.initEvent(eventType, canBubble, prevent); // 初始化事件
        - target.addEventListener('dataavailable', handler, false); // 监听事件
        - target.dispatchEvent(e);  // 触发事件

      jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件


- jQuery 通过哪个方法和 Sizzle 选择器结合的？

      Sizzle 选择器采取 Right To Left 的匹配模式，先搜寻页面中所有的匹配标签，再去判断它的父节点。
      jQuery 通过 $(selecter).find(selecter); 和 Sizzle 选择器结合

-  jQuery 中如何将数组转化为 JSON 字符串，然后再转化回来？

       通过原生 JSON.stringify/JSON.parse 扩展 jQuery 实现

       $.array2json = function(array) {
          return JSON.stringify(array);
       }

       $.json2array = function(array) {
          // $.parseJSON(array); // jQuery 3.0 开始，$.parseJSON 已过时
          return JSON.parse(array);
       }

       // 调用
       var json = $.array2json(['a', 'b', 'c']);
       var array = $.json2array(json);

- jQuery 一个对象可以同时绑定多个事件，这是如何实现的？

      $("#btn").on("mouseover mouseout", func);

      $("#btn").on({
          mouseover: func1,
          mouseout: func2,
          click: func3
      });

- 针对 jQuery 的优化方法？

        * 缓存频繁操作DOM对象
        * 尽量使用id选择器代替class选择器
        * 总是从#id选择器来继承
        * 尽量使用链式操作
        * 使用时间委托 on 绑定事件
        * 采用jQuery的内部函数data()来存储数据
        * 使用最新版本的 jQuery

-  jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢?

        * 在触发元素上的事件设置为延迟处理
          - 使用 JS 原生 setTimeout 方法
        * 在触发元素的事件时预先停止所有的动画，再执行相应的动画事件
          - 使用 $(selector).stop(stopAll, goToEnd)：
          $('div').stop().slideUp();

- jQuery UI 如何自定义组件？

      通过向 $.widget() 传递组件名称和一个原型对象来完成
      $.widget("ns.widgetName", [baseWidget], widgetPrototype);

- jQuery 与 jQuery UI、jQuery Mobile 区别？

        jQuery 是 JS 库，兼容各种PC浏览器，主要用作更方便处理 DOM、事件、动画、AJAX

	    jQuery UI 是建立在 jQuery 库上的一组用户界面交互、特效、小部件及主题
         主要功能是提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等

        jQuery Mobile 以 jQuery 为基础，用于创建“移动Web应用”的框架。
         jQuery Mobile 使用 HTML5 & CSS3 最小的脚本来布局网页。

-  jQuery 和 Zepto 的区别？ 各自的使用场景？

        * jQuery 主要目标是PC的网页中，兼容全部主流浏览器。在移动设备方面，单独推出 jQuery Mobile
        * Zepto 从一开始就定位移动设备，相对更轻量级。它的 API 基本兼容 jQuery，但对PC浏览器兼容不理想

## 其他问题

- 页面重构怎么操作？

      网站重构：不改变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。

      页面重构可以考虑的方面：
        * 升级第三方依赖
        * 使用HTML5、CSS3、ES6 新特性
        * 加入响应式布局
        * 统一代码风格规范
        * 减少代码间的耦合
        * 压缩/合并静态资源
        * 程序的性能优化
        * 采用CDN来加速资源加载
        * 对于JS DOM的优化
        * HTTP服务器的文件缓存

- 列举IE与其他浏览器不一样的特性？

      * IE的渲染引擎是Trident与W3C标准差异较大：例如盒子模型的怪异模式
      * JS方面有很多独立的方法，例如事件处理不同：绑定/删除事件，阻止冒泡，阻止默认事件等
      * CSS方面也有自己独有的处理方式，例如设置透明，低版本IE中使用滤镜的方式

- 什么叫优雅降级和渐进增强？

       优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
       渐进增强：针对低版本浏览器构建页面，然后再针对高级浏览器进行效果、交互等用户体验的改进

- 请你谈谈Cookie的弊端？

      a. 每个特定的域名下最多生成的cookie个数有限制
      b. IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie
      c. cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节
      d. 安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。

- 是否了解公钥加密和私钥加密？

        私钥用于对数据进行签名，公钥用于对签名进行验证
        网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密

- WEB应用从服务器主动推送Data到客户端有那些方式？

	    * AJAX 轮询
	    * html5 服务器推送事件
	        - (new EventSource(SERVER_URL)).addEventListener("message", func);
	    * html5 Websocket
	        - (new WebSocket(SERVER_URL)).addEventListener("message", func);

- 你有用过哪些前端性能优化的方法？

      1. 减少请求数量：合并脚本和样式表，CSS Sprites，拆分初始化负载，划分主域
      2. 节省请求带宽：开启GZip，精简JavaScript，移除重复脚本，图像优化，将icon做成字体
      3. 缓存利用：使用CDN，使用外部JavaScript和CSS，添加Expires头，减少DNS查找，配置ETag
      4. 优化页面结构：将样式表放在顶部，将脚本放在底部，尽早刷新文档的输出
      5. 代码校验：避免CSS表达式，避免重定向

- 99%的网站都需要被重构是那本书上写的？

      《网站重构：应用web标准进行设计（第2版）》

- http状态码有那些？分别代表是什么意思？

	    1XX(信息类)：表示接收到请求并且继续处理
		2XX(响应成功)：表示动作被成功接收、理解和接受
		3XX(重定向类)：为了完成指定的动作，必须接受进一步处理
		4XX(客户端错误类)：请求包含错误语法或不能正确执行
		5XX(服务端错误类)：服务器不能正确执行一个正确的请求

		200 OK                      请求成功返回
        301 Moved Permanently       页面重定向
        302 Temporarily Moved       暂时重定向
        304 Not Modified            缓存可以继续使用
        400 Bad Request             请求出现语法错误
        401 Unauthorized            未经授权访问
        403 Forbidden               资源禁止访问
        404 Not Found               未找到指定位置的资源
        410 Gone                    请求的文档已经不再可用
        500 Internal Server Error   服务器内部错误
        501 Not Implemented         服务器不支持请求类型


- 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

      1. 浏览器查找域名对应的IP地址
         - DNS 查询：浏览器缓存->系统缓存->路由器缓存->ISP DNS 缓存->从跟域名服务器开始递归搜索
      2. 浏览器向Web服务器发送一个 HTTP 请求（TCP三次握手）
      3. 服务器的永久重定向响应（从 http://example.com 重定向到 http://www.example.com）
         - 索引擎通过 301 永久重定向是把访问带 www 的和不带 www 的地址归到同一个网站排名下
      4. 浏览器跟踪重定向地址，发送另一个带 www 的网址
      5. 服务器处理请求（通过路由读取资源）
      6. 服务器返回一个 HTTP 响应（报头中把Content-type设置为“text/html”）
      7. 浏览器进DOM树构建
      8. 浏览器发送请求获取嵌在 HTML 中的资源（如图片、音频、视频、CSS、JS等）
      9. 浏览器显示完成页面
      10. 浏览器发送异步请求

- 你怎么看待 Web App/hybrid App/Native App？（移动端前端 和 Web 前端区别？）

      Web App(HTML5)：采用HTML5生存在浏览器中的应用，不需要下载安装
      - 优点：开发成本低，迭代更新容易，不需用户升级，跨多个平台和终端
      - 缺点：消息推送不够及时，支持图形和动画效果较差，功能使用限制（相机、GPS等）

      Hybrid App(混合开发)：UI WebView，需要下载安装
      - 优点：接近 Native App 的体验，部分支持离线功能
      - 缺点：性能速度较慢，未知的部署时间，受限于技术尚不成熟

      Native App(原生开发)：依托于操作系统，有很强的交互，需要用户下载安装使用
      - 优点：用户体验完美，支持离线工作，可访问本地资源（通讯录，相册）
      - 缺点：开发成本高（多系统），开发成本高（版本更新），需要应用商店的审核

- Web 前端开发的注意事项？

      1. 特殊的 meta 标签
        - width=device-width, initial-scale=1.0, user-scalable=no
      2. 百分百比布局宽度
        - 用百分比布局来实现自适应屏幕宽度，结合 box-sizing: border-box;
      3. 使用 rem 设置字体大小
        - rem 只参照跟节点 html 计算，在根节点设定参考值，整个页面 1rem 都相等
      4. 使用 css3 新特性
        - 弹性盒子模型/多列布局/媒体查询
      5. 多机型覆盖测试

- 在设计 Web APP 时，应当遵循以下几点：

      1. 简化不重要的动画/动效/图形文字样式
      2. 少用手势，避免与浏览器手势冲突
      3. 减少页面内容，页面跳转次数，尽量在当前页面显示
      4. 增强 Loading 趣味性，增强页面主次关系

- 平时如何管理你的项目？

      * 规定全局样式、公共脚本
      * 严格要求代码注释(html/js/css)
      * 严格要求静态资源存放路径
      * Git 提交必须填写说明

- 如何设计突发大规模并发架构？

      1. 及时响应(NoSQL缓存)
      2. 数据安全(数据备份)
      3. 负载均衡

- 说说最近最流行的一些东西吧？

      ES6、Node、React、Webpack

- 如何做SEO优化?

      * 关键词分析与标题设置
        - 标题一定要写的吸引人，但也要切合实际，标题中的文字一定要包含你所做的关键词
      * 网站结构目录优化
        - 网站的目录结构最好不要超过三级，每一级都有“面包屑导航”，使整个的网站形成一个树状的目录结构分布
      * 给图片标注"Alt"可以让搜索引擎更友好的收录
      * 网站内容发布
        - 每个月每天有规律的更新网站的内容，会使搜索引擎更加喜欢
      * 友情链接的交换
        - 对方一定要是正规网站，每天有专业的团队或者个人维护更新
      * 内链的布置
        - 将这个整个网站形成一种类似于蜘蛛网的结构不会出现单独连接的页面，也不会出现死链接
      * 每天记得与搜索引擎进行互动
        - 以"site:你的域名"的方式与所搜引擎进行对话，知道这个域名的收录以及更新情况
      * 网站整体的流量分析
        - 通过统计工具(百度统计，CNZZ统计)分析流量来源/入口/页面/栏目/地区分布，指导下一步的SEO

- 移动端（Android、IOS）怎么做好用户体验?

      1. 清晰的视觉纵线
      2. 信息的分组、极致的减法
      3. 利用选择代替输入
      4. 标签及文字的排布方式
      5. 依靠明文确认密码
      6. 合理的键盘利用

* 前端页面有哪三层构成，分别是什么？作用是什么？

      a. 结构层：由 (X)HTML 标记语言负责，解决页面“内容是什么”的问题
      b. 表示层：由 CSS 负责，解决页面“如何显示内容”的问题
      c. 行为层：由 JS 脚本负责，解决页面上“内容应该如何对事件作出反应”的问题

- 是否了解 Web 注入攻击（最常见 XSS 和 CSRF）？

      * SQL注入
       - 把SQL命令插入到表单或输入URL查询字符串提交，欺骗服务器达到执行恶意的SQL目的

      * XSS(Cross Site Script)，跨站脚本攻击
       - 攻击者在页面里插入恶意代码，当用户浏览该页之时，执行嵌入的恶意代码达到攻击目的

      * CSRF(Cross Site Request Forgery)，跨站点伪造请求
       - 伪造合法请求，让用户在不知情的情况下以登录的身份访问，利用用户信任达到攻击目的

* 线程与进程的区别？

      a. 一个程序至少有一个进程，一个进程至少有一个线程
      b. 线程的划分尺度小于进程，使得多线程程序的并发性高
      c. 进程在执行过程中拥有独立的内存单元，而多个线程共享内存
      d. 线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制

- 如何防范Web前端攻击？

      1. 不要信任任何外部传入的数据
        - 针对用户输入作相关的格式检查、过滤等操作
      2. 不要信任在任何传入的第三方数据
        - 使用HTML5中引入的 CORS，设置 Access-Control-Allow-Origin
      3. 更安全地使用Cookie
        - 设置Cookie为HttpOnly，禁止了JavaScript操作Cookie
        - 使用HTML5中的LocalStorage
      4. 防止网页被其他网站内嵌为iframe
        - 服务器端设置 X-Frame-Options 响应头，防止页面被其他页面内嵌

***
