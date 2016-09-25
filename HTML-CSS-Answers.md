#前端开发面试题

## HTML

- DOCTYPE 的作用？标准模式与兼容模式各有什么区别?

      * DOCTYPE 告知浏览器用何种模式解析文档. DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现
      * 在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作

- 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

      * CSS规范规定，每个元素都有 display 属性及默认值确定该元素的类型，例如：
      div 的 display 默认值为 block，则为“块级”元素；span 默认 display 属性值为 inline 则为“行内”元素
      * 行内元素：a b span img input select strong
      * 块级元素：div ul ol li dl dt dd h1 h2 h3 h4… p
      * 常见的空元素：br hr img input link meta base area embed source

- 页面导入样式时，使用 link 和 @import 有什么区别？

      * link 属于HTML标签，除了加载CSS外，还能用于定 RSS等；@import 只能用于加载CSS
      * 页面加载的时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载
      * @import 只在 IE5 以上才能被识别，而 link 是HTML标签，无兼容问题

- 介绍一下你对浏览器内核的理解？

      * 浏览器内核主要分为两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS引擎
      * 渲染引擎负责取得网页的内容进行布局计和样式渲染，然后会输出至显示器或打印机
      * JS引擎则负责解析和执行JS脚本来实现网页的动态效果和用户交互
      * 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

- 常见的浏览器内核有哪些？

      * Blink内核：新版 Chrome、新版 Opera
      * Webkit内核：Safari、原Chrome
      * Gecko内核：FireFox、Netscape6及以上版本
      * Trident内核（又称MSHTML内核）：IE、国产浏览器
      * Presto内核：原Opera7及以上

- 简述一下你对HTML语义化的理解？

      * 即使在没有样式CSS情况下，页面结构仍然清晰刻度
      * 方便其他设备（如屏幕阅读器、盲人阅读器、移动设备）解析，以意义的方式渲染网页
      * 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO
      * 便于团队开发和维护，可以减少差异化

- HTML5为什么只需要写 `<!DOCTYPE HTML>`？

      * HTML5 不基于 SGML(标准通用标记语言)，因此不需要对 DTD 进行引用
      * HTML5 仍需要通过 DOCTYPE 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）
      * HTML4.01 基于 SGML，所以需要对 DTD 进行引用，告知浏览器文档所使用的文档类型

- HTML5有哪些新特性？

       * 新增选择器 document.querySelector、document.querySelectorAll
       * 拖拽释放(Drag and drop) API
       * 媒体播放的 video 和 audio
       * 本地存储 localStorage 和 sessionStorage
       * 离线应用 manifest
       * 桌面通知 Notifications
       * 语意化标签 article、footer、header、nav、section
       * 增强表单控件 calendar、date、time、email、url、search
       * 地理位置 Geolocation
       * 多任务 webworker
       * 全双工通信协议 websocket
       * 历史管理 history
       * 跨域资源共享(CORS) Access-Control-Allow-Origin
       * 页面可见性改变事件 visibilitychange
       * 跨窗口通信 PostMessage
       * Form Data 对象
       * 绘画 canvas

- HTML5移除了那些元素？

       * 纯表现的元素：basefont、big、center、font、s、strike、tt、u
       * 对可用性产生负面影响的元素：frame、frameset、noframes

- 如何处理HTML5新标签的浏览器兼容问题？

       * 通过 document.createElement 创建新标签
       * 使用垫片 html5shiv.js

- 如何区分 HTML 和 HTML5？

      DOCTYPE声明、新增的结构元素、功能元素

- HTML5的离线储存工作原理能不能解释一下，怎么使用？

      * HTML5的离线储存原理：
        用户在线时，保存更新用户机器上的缓存文件；当用户离线时，可以正常访离线储存问站点或应用内容

      * HTML5的离线储存使用：
        - 在文档的 html 标签设置 manifest 属性，如 manifest="/offline.appcache"
        - 在项目中新建 manifest 文件，manifest 文件的命名建议：xxx.appcache
        - 在 web 服务器配置正确的 MIME-type，即 text/cache-manifest

- 浏览器是怎么对HTML5的离线储存资源进行管理和加载的？

      * 在线的情况下，浏览器发现 html 标签有 manifest 属性，它会请求 manifest 文件
      * 如果是第一次访问app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储
      * 如果已经访问过app且资源已经离线存储了，浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作。如果文件改变了，那么就会重新下载文件中的资源并进行离线存储
      * 离线的情况下，浏览器就直接使用离线存储的资源。

- 描述 cookies、sessionStorage 和 localStorage 的区别？

      * 与服务器交互：
        - cookie 是网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密）
        - cookie 始终会在同源 http 请求头中携带（即使不需要），在浏览器和服务器间来回传递
        - sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存

      * 存储大小：
        - cookie 数据根据不同浏览器限制，大小一般不能超过 4k
        - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大

      * 有期时间：
        - localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
        - sessionStorage  数据在当前浏览器窗口关闭后自动删除
        - cookie           设置的cookie过期时间之前一直有效，与浏览器是否关闭无关

- iframe 有那些优点和缺点？

       * 优点：
         - 用来加载速度较慢的内容（如广告）
         - 可以使脚本可以并行下载
         - 可以实现跨子域通信

       * 缺点：
         - iframe 会阻塞主页面的 onload 事件
         - 无法被一些搜索引擎索识别
         - 会产生很多页面，不容易管理

- label 的作用是什么？怎么使用的？

        * label标签来定义表单控件的关系：
         当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上
        * 使用方法1：

     ```html
           <label for="mobile">Number:</label>
           <input type="text" id="mobile"/>
     ```

        * 使用方法2：

     ```html
           <label>Date:<input type="text"/></label>
     ```

- 如何关闭 form 的自动完成功能？

       为 form 或某个 input 设置属性 autocomplete="off"

- 如何实现浏览器内多个标签页之间的通信？

       * iframe + contentWindow
       * postMessage
       * SharedWorker(Web Worker API)
       * storage 事件(localStorge API)
       * WebSocket

-  webSocket 如何兼容低浏览器？

       * Adobe Flash Socket
       * ActiveX HTMLFile (IE)
       * 基于 multipart 编码发送 XHR
       * 基于长轮询的 XHR

- 页面可见性（Page Visibility API） 可以有哪些用途？

      * 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放
      * 当用户浏览其他页面，暂停网站首页幻灯自动播放
      * 完成登陆后，无刷新自动同步其他页面的登录状态

- 如何在页面上实现一个圆形的可点击区域？

      * 热区 `<map><area/></map>`
      * `<svg></svg>`
      * border-radius
      * JS 计算圆的覆盖范围、获取鼠标坐标

- 不使用 border 画出 1px 高的线。

      `<div style="height:1px; overflow:hidden; background:gray"></div>`

- 说明网页验证码的应用，网页验证码解决什么安全问题？

      * 网页验证码是区分操作者是计算机还是人的程序
      * 可以防止恶意破解密码、短信轰炸、刷票、灌水等；

- title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

      * title 表示是整个页面标题，h1 则表示层次明确的标题，对页面信息的抓取有很大的影响
      * strong 标明重点内容，有语气加强的含义，使用阅读设备阅读网络时，strong 会重读，而 b 是展示强调内容
      * i 内容展示为斜体，em 表示强调的文本

      * 自然样式标签：b, i, u, s, pre
      * 语义样式标签：strong, em, ins, del, code
      * 应该准确使用语义样式标签, 但不能滥用。如果不能确定时，首选使用自然样式标签

***

## CSS

- 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

      * 盒子模型构成：内容(content)、内填充(padding)、 边框(border)、外边距(margin)
      * IE8及其以下版本浏览器，未声明 DOCTYPE，内容宽高会包含内填充和边框，称为怪异盒模型(IE盒模型)
      * 标准(W3C)盒模型：元素宽度 = width + padding + border + margin
      * 怪异(IE)盒模型：元素宽度 = width + margin
      * 标准浏览器通过设置 css3 的 box-sizing: border-box 属性，触发“怪异模式”解析计算宽高

- box-sizing 常用的属性有哪些？分别有什么作用？

      * box-sizing: content-box;  // 默认的标准(W3C)盒模型元素效果
      * box-sizing: border-box;   // 触发怪异(IE)盒模型元素的效果
      * box-sizing: inherit;      //  继承父元素 box-sizing 属性的值

- CSS选择器有哪些？

      * id选择器        #id
      * 类选择器        .class
      * 标签选择器      div, h1, p
      * 相邻选择器      h1 + p
      * 子选择器        ul > li
      * 后代选择器      li a
      * 通配符选择器    *
      * 属性选择器      a[rel='external']
      * 伪类选择器      a:hover, li:nth-child

- CSS哪些属性可以继承？哪些属性不可以继承？

      * 可以继承的样式：font-size、font-family、color、list-style、cursor
      * 不可继承的样式：width、height、border、padding、margin、background

- CSS如何计算选择器优先？

      * 相同权重，定义最近者为准：行内样式 > 内部样式 > 外部样式
      * 含外部载入样式时，后载入样式覆盖其前面的载入的样式和内部样式
      * 选择器优先级: 行内样式[1000] > id[100] > class[10] > Tag[1]
      * 在同一组属性设置中，!important 优先级最高，高于行内样式
      * JS动态设置样式，高于一切样式设定

- CSS3新增伪类有哪些？

      :root           选择文档的根元素，等同于 html 元素

      :empty          选择没有子元素的元素
      :target         选取当前活动的目标元素
      :not(selector)  选择除 selector 元素意外的元素

      :enabled        选择可用的表单元素
      :disabled       选择禁用的表单元素
      :checked        选择被选中的表单元素

      :after          在元素内部最前添加内容
      :before         在元素内部最后添加内容

      :nth-child(n)      匹配父元素下指定子元素，在所有子元素中排序第n
      :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
      :nth-child(odd)
      :nth-child(even)
      :nth-child(3n+1)
      :first-child
      :last-child
      :only-child

      :nth-of-type(n)      匹配父元素下指定子元素，在同类子元素中排序第n
      :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数
      :nth-of-type(odd)
      :nth-of-type(even)
      :nth-of-type(3n+1)
      :first-of-type
      :last-of-type
      :only-of-type

      ::selection     选择被用户选取的元素部分
      :first-line     选择元素中的第一行
      :first-letter   选择元素中的第一个字符

- display有哪些值？说明他们的作用

      none            元素被隐藏
      block           元素将显示为块级元素
      inline          元素会被显示为内联元素
      inline-block    行内块元素
      inherit         从父元素继承 display 属性的值

      table           元素会作为块级表格来显示，表格前后带有换行符
      inline-table    元素会作为内联表格来显示，表格前后没有换行符
      list-item       元素会作为列表显示

      flex            将对象作为弹性伸缩盒显示
      inline-flex     将对象作为内联块级弹性伸缩盒显示
      run-in          根据上下文决定对象是内联对象还是块级对象

- 请列举几种隐藏元素的方法

       * visibility: hidden;   这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
       * opacity: 0;           CSS3属性，设置0可以使一个元素完全透明
       * position: absolute;   设置一个很大的 left 负值定位，使元素定位在可见区域之外
       * display: none;        元素会变得不可见，并且不会再占用文档的空间。
       * transform: scale(0);  将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
       * `<div hidden="hidden">` HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态
       * height: 0;            将元素高度设为 0 ，并消除边框
       * filter: blur(0);      CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中

- 说明 relative 和 absolute 定位原点？

       * absolute  绝对定位，相对于最近定位父级元素进行定位。如果没有定位父级，则相对于浏览器窗口（不是body）
       * relative  相对定位，相对于自身正常位置进行定位
       * fixed     固定定位，相对于浏览器窗口进行定位（不是body）
       * static    消除定位，元素位于正常的流（忽略top、bottom、left、right、z-index 值）
       * inherit   继承父级元素的 position 属性的值

- rgba() 和 opacity 的透明效果有什么不同？

       * opacity 作用于元素以及元素内的所有内容（包括文字）的透明度
       * rgba() 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果

- css 属性 content 有什么作用？

       content 属性专门应用在 before/after 伪元素上，用于插入额外内容或样式

- CSS3有哪些新特性？

      - 新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
      - 弹性盒模型     display: flex;
      - 多列布局       column-count: 5;
      - 媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
      - 个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
      - 颜色透明度     color: rgba(255, 0, 0, 0.75);
      - 圆角           border-radius: 5px;
      - 渐变           background:linear-gradient(red, green, blue);
      - 阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
      - 倒影           box-reflect: below 2px;
      - 文字装饰       text-stroke-color: red;
      - 文字溢出       text-overflow:ellipsis;
      - 背景效果       background-size: 100px 100px;
      - 边框效果       border-image:url(bt_blue.png) 0 10;
      - 转换
         旋转          transform: rotate(20deg);
         倾斜          transform: skew(150deg, -10deg);
         位移          transform: translate(20px, 20px);
         缩放          transform: scale(.5);
      - 平滑过渡       transition: all .3s ease-in .1s;
      - 动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;

- 请解释一下 CSS3 的 Flexbox（弹性盒布局模型）以及适用场景？

      Flexbox 用于不同尺寸屏幕中创建可自动扩展和收缩布局

- 用CSS创建一个三角形的原理是什么？

      把上、左、右三条边隐藏（颜色设为 transparent）
     ```Css
        .triangle {
          width: 0;
          height: 0;
          border-width: 20px;
          border-style: solid;
          border-color: transparent transparent red transparent;
        }
     ```

- 一个满屏“品”字布局如何设计?

      1. 上面的 div 宽 100%
      2. 下面的两个 div 分别宽50%
      3. 用 float 或者 inline 使其不换行

- 经常遇到的浏览器的CSS兼容性有哪些？解决方法是什么？

      * 在IE6，7下，li的内容有浮动，li下边就会产生间隙。解决方法：给li加 vertical-align 或 加浮动
      * 在IE6下，元素的高度的小于19px的时候，会被当做19px来处理。解决方法：overflow:hidden
      * IE6双边距bug。解决方法：在float的标签样式中加入 _display:inline
      * 在IE6下，浮动元素和绝对定位元素并列时，绝对定位元素会消失。解决方法：给定位元素外面包个div
      * 在IE6，7下，子元素有相对定位的话，父级的overflow包不住子元素。解决方法：给父级加相对定位
      * 在IE6，7下输入类型的表单控件上下各有1px的间隙。解决方法：给input加浮动
      * 在IE6下父级有边框的时候，子元素的margin值消失。解决方法：触发父级的haslayout
      * 在IE6下不兼容 opacity:0.3; 透明度设置。解决方法：filter:alpha(opacity=30);

- 经常遇到的浏览器的JS兼容性有哪些？解决方法是什么？

      * 当前样式：getComputedStyle(el, null) VS el.currentStyle
      * 事件对象：e VS window.event
      * 鼠标坐标：e.pageX, e.pageY VS window.event.x, window.event.y
      * 按键码：e.which VS event.keyCode
      * 文本节点：el.textContent VS el.innerText

- li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

      * li排列受到中间空白(回车/空格)等的影响，因为空白也属于字符，会被应用样式占据空间，产生间隔
      * 解决办法：在ul设置设置font-size=0,在li上设置需要的文字大小

- 什么是外边距重叠？ 重叠的结果是什么？

      * 外边距重叠就是 margin-collapse
      * 相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。
      这种合并外边距的方式被称为折叠，结合而成的外边距称为折叠外边距。

      * 折叠结果遵循下列计算规则：
        - 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值
        - 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值
        - 两个外边距一正一负时，折叠结果是两者的相加的和

- 请写出多种等高布局

      * 在列的父元素上使用这个背景图进行Y轴的铺放，从而实现一种等高列的假像
      * 模仿表格布局等高列效果：兼容性不好，在ie6-7无法正常运行
      * css3 flexbox 布局： .container{display: flex; align-items: stretch;}

- css垂直居中的方法有哪些？

      * 如果是单行文本, line-height 设置成和 height 值

    ```Css
        .vertical {
          height: 100px;
          line-height: 100px;
        }
    ```

      * 已知高度的块级子元素，采用绝对定位和负边距

    ```Css
        .container {
          position: relative;
        }
        .vertical {
          height: 300px;  /*子元素高度*/
          position: absolute;
          top:50%;  /*父元素高度50%*/
          margin-top: -150px; /*自身高度一半*/
        }
    ```
      * 未知高度的块级父子元素居中，模拟表格布局
      缺点：IE67不兼容，父级 overflow：hidden 失效

    ```Css
        .container {
          display: table;
        }
        .content {
          display: table-cell;
          vertical-align: middle;
        }
    ```
     * 新增 inline-block 兄弟元素，设置 vertical-align
      缺点：需要增加额外标签，IE67不兼容

    ```Css
        .container {
          height: 100%;/*定义父级高度，作为参考*/
        }
        .extra .vertical{
          display: inline-block;  /*行内块显示*/
          vertical-align: middle; /*垂直居中*/
        }
        .extra {
          height: 100%; /*设置新增元素高度为100%*/
        }
    ```

      * 绝对定位配合 CSS3 位移

    ```Css
        .vertical {
          position: absolute;
          top:50%;  /*父元素高度50%*/
          transform:translateY(-50%, -50%);
        }
     ```

      * CSS3弹性盒模型

    ```Css
        .container {
          display:flex;
          justify-content: center; /*子元素水平居中*/
          align-items: center; /*子元素垂直居中*/
        }
    ```

- 圣杯布局的实现原理？

      * 要求：三列布局；中间主体内容前置，且宽度自适应；两边内容定宽
      * 好处：重要的内容放在文档流前面可以优先渲染
      * 原理：利用相对定位、浮动、负边距布局，而不添加额外标签

    ```Css
          .container {
              padding-left: 150px;
              padding-right: 190px;
          }
          .main {
              float: left;
              width: 100%;
          }
          .left {
              float: left;
              width: 190px;
              margin-left: -100%;
              position: relative;
              left: -150px;
          }
          .right {
              float: left;
              width: 190px;
              margin-left: -190px;
              position: relative;
              right: -190px;
          }
    ```

- 什么是双飞翼布局？实现原理？

      双飞翼布局：对圣杯布局（使用相对定位，对以后布局有局限性）的改进，消除相对定位布局
      原理：主体元素上设置左右边距，预留两翼位置。左右两栏使用浮动和负边距归位，消除相对定位。

     ```Css
        .container {
            /*padding-left:150px;*/
            /*padding-right:190px;*/
        }
        .main-wrap {
            width: 100%;
            float: left;
        }
        .main {
            margin-left: 150px;
            margin-right: 190px;
        }
        .left {
            float: left;
            width: 150px;
            margin-left: -100%;
            /*position: relative;*/
            /*left:-150px;*/
        }
        .right {
            float: left;
            width: 190px;
            margin-left: -190px;
            /*position:relative;*/
            /*right:-190px;*/
        }
     ```

- 在CSS样式中常使用 px、em 在表现上有什么区别？

      * px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
      * em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size

- 为什么要初始化CSS样式？

      * 不同浏览器对有些标签样式的默认值解析不同
      * 不初始化CSS会造成各现浏览器之间的页面显示差异
      * 可以使用 reset.css 或 Normalize.css 做 CSS 初始化

- 解释下什么是浮动和它的工作原理？

      * 非IE浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。
      此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。
      
      * 工作原理：
        - 浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）
       - 浮动元素碰到包含它的边框或者其他浮动元素的边框停留

- 浮动元素引起的问题？

      * 父元素的高度无法被撑开，影响与父元素同级的元素
      * 与浮动元素同级的非浮动元素会跟随其后

- 列举几种清除浮动的方式？

      * 添加额外标签，例如 `<div style="clear:both"></div>`
      * 使用 br 标签和其自身的 clear 属性，例如 `<br clear="all" />`
      * 父元素设置 overflow：hidden; 在IE6中还需要触发 hasLayout，例如zoom：1;
      * 父元素也设置浮动
      * 使用 :after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout

- 清除浮动最佳实践（after伪元素闭合浮动）：

    ```Css
      .clearfix:after{
        content: "\200B";
        display: table; 
        height: 0;
        clear: both;
      }
      .clearfix{
        *zoom: 1;
      }
     ```

- 什么是 FOUC(Flash of Unstyled Content)？ 如何来避免 FOUC？

      * 当使用 @import 导入 CSS 时，会导致某些页面在 IE 出现奇怪的现象：
      没有样式的页面内容显示瞬间闪烁，这种现象称为“文档样式短暂失效”，简称为FOUC

      * 产生原因：当样式表晚于结构性html加载时，加载到此样式表时，页面将停止之前的渲染。
       等待此样式表被下载和解析后，再重新渲染页面，期间导致短暂的花屏现象。

      * 解决方法：使用 link 标签将样式表放在文档 head

- 介绍使用过的 CSS 预处理器？

      * CSS 预处理器基本思想：为 CSS 增加了一些编程的特性（变量、逻辑判断、函数等）
      * 开发者使用这种语言进行进行 Web 页面样式设计，再编译成正常的 CSS 文件使用
      * 使用 CSS 预处理器，可以使 CSS 更加简洁、适应性更强、可读性更佳，无需考虑兼容性
      * 最常用的 CSS 预处理器语言包括：Sass（SCSS）和 LESS

- CSS优化、提高性能的方法有哪些？

      * 多个css合并，尽量减少HTTP请求
      * 将css文件放在页面最上面
      * 移除空的css规则
      * 避免使用CSS表达式
      * 选择器优化嵌套，尽量避免层级过深
      * 充分利用css继承属性，减少代码量
      * 抽象提取公共样式，减少代码量
      * 属性值为0时，不加单位
      * 属性值为小于1的小数时，省略小数点前面的0
      * css雪碧图

- 浏览器是怎样解析CSS选择器的？

      浏览器解析 CSS 选择器的方式是从右到左

- 在网页中的应该使用奇数还是偶数的字体？

      在网页中的应该使用“偶数”字体：
      * 偶数字号相对更容易和 web 设计的其他部分构成比例关系
      * 使用奇数号字体时文本段落无法对齐
      * 宋体的中文网页排布中使用最多的就是 12 和 14

- margin和padding分别适合什么场景使用？

      * 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin
      * 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding

- 抽离样式模块怎么写，说出思路？

      CSS可以拆分成2部分：公共CSS 和 业务CSS：
      1.网站的配色，字体，交互提取出为公共CSS。这部分CSS命名不应涉及具体的业务
      2.对于业务CSS，需要有统一的命名，使用公用的前缀。可以参考面向对象的CSS

- 元素竖向的百分比设定是相对于容器的高度吗？

      元素竖向的百分比设定是相对于容器的宽度，而不是高度

- 全屏滚动的原理是什么？ 用到了CSS的那些属性？

      * 原理类似图片轮播原理，超出隐藏部分，滚动时显示
      * 可能用到的CSS属性：overflow:hidden; transform:translate(100%, 100%); display:none;

- 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

      * 响应式设计就是网站能够兼容多个终端，而不是为每个终端做一个特定的版本
      * 基本原理是利用CSS3媒体查询，为不同尺寸的设备适配不同样式
      * 对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容：

    ```Javascript

      $(window).resize(function () {
          screenRespond();
      });
      screenRespond();
      function screenRespond(){
        var screenWidth = $(window).width();
        if(screenWidth <= 1800){
          $("body").attr("class", "w1800");
        }
        if(screenWidth <= 1400){
          $("body").attr("class", "w1400");
        }
        if(screenWidth > 1800){
          $("body").attr("class", "");
        }
      }
    ```

- 什么是视差滚动效果，如何给每页做不同的动画？

      * 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，具有非常出色的视觉体验。
       一般把网页解剖为：背景层、内容层和悬浮层。当滚动鼠标滚轮时，各图层以不同速度移动，形成视差的。

      * 实现原理:
       1.以 “页面滚动条” 作为 “视差动画进度条”
       2.以 “滚轮刻度” 当作 “动画帧度” 去播放动画的
       3.监听 mousewheel 事件，事件被触发即播放动画，实现“翻页”效果

- a标签上四个伪类的执行顺序是怎么样的？

       link > visited > hover > active
       L-V-H-A love hate 用喜欢和讨厌两个词来方便记忆

- 伪元素和伪类的区别和作用？

      * 伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
       它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
     ```Css
          p::before {content:"第一章：";}
          p::after {content:"Hot!";}
          p::first-line {background:red;}
          p::first-letter {font-size:30px;}
     ```
      * 伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
     ```Css
          a:hover {color: #FF00FF}
          p:first-child {color: red}
     ```
- ::before 和 :after 中双冒号和单冒号有什么区别？

       * 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
       * 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after
       * 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
       * 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
       * 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法

- 如何修改Chrome记住密码后自动填充表单的黄色背景？

       产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的
       解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"
       解决方案2：input:-webkit-autofill { background-color: transparent; }

- input [type=search] 搜索框右侧小图标如何美化？
  ```Css
      input[type="search"]::-webkit-search-cancel-button{
          -webkit-appearance: none;
          height: 15px;
          width: 15px;
          border-radius: 8px;
          background:url("images/searchicon.png") no-repeat 0 0;
          background-size: 15px 15px;
      }
  ```

- 网站图片文件，如何点击下载？而非点击预览？

      `<a href="logo.jpg" download>下载</a>`
      `<a href="logo.jpg" download="网站LOGO" >下载</a>`

- iOS safari 如何阻止“橡皮筋效果”？

  ```Javascript
      $(document).ready(function(){
          var stopScrolling = function(event) {
              event.preventDefault();
          }
          document.addEventListener('touchstart', stopScrolling, false);
          document.addEventListener('touchmove', stopScrolling, false);
      });
  ```

- 你对 line-height 是如何理解的？

       * line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离
       * 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的
       * 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容
       * 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中
       * line-height 和 height 都能撑开一个高度，height 会触发 haslayout，而 line-height 不会

- line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）

       * 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
       * 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
       * 百分比：将计算后的值传递给后代

- 设置元素浮动后，该元素的 display 值会如何变化？

       设置元素浮动后，该元素的 display 值自动变成 block

- 怎么让Chrome支持小于12px 的文字？

  ```Css
      .shrink{
        -webkit-transform:scale(0.8);
        -o-transform:scale(1);
        display:inline-block;
      }
  ```

- 让页面里的字体变清晰，变细用CSS怎么做？（IOS手机浏览器字体齿轮设置）
  ```Css
      .font1{
          -webkit-font-smoothing: antialiased;
      }
  ```

- font-style 属性 oblique 是什么意思？

      font-style: oblique; 使没有 italic 属性的文字实现倾斜

- position:fixed; 在 android 下无效怎么处理？
  ```Html
     <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
  ```

- 如果需要手动写动画，你认为最小时间间隔是多久？

      16.7ms 多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔: 1s / 60 * 1000 ＝ 16.7ms

- display:inline-block 什么时候会显示间隙？

      * 相邻的 inline-block 元素之间有换行或空格分隔的情况下会产生间距
      * 非 inline-block 水平元素设置为 inline-block 也会有水平间距
      * 可以借助 vertical-align:top; 消除垂直间隙
      * 可以在父级加 font-size：0; 在子元素里设置需要的字体大小，消除垂直间隙
      * 把 li 标签写到同一行可以消除垂直间隙，但代码可读性差

- overflow: scroll 时不能平滑滚动的问题怎么处理？

      监听滚轮事件，然后滚动到一定距离时用 jquery 的 animate 实现平滑效果。

- 一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度

      方案1：
     ```Css
        .sub { height: calc(100%-100px); }
     ```
      方案2：
     ```Css
        .container { position:relative; }
        .sub { position: absolute; top: 100px; bottom: 0; }
     ```
      方案3：
     ```Css
        .container { display:flex; flex-direction:column; }
        .sub { flex:1; }
     ```

- png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？

      png   支持完全透明；不支持动画
      jpg   支持上百万种颜色，不支持背景透明、动画
      gif   支持背景透明、动画，只有256种颜色
      webp  加载速度快，压缩体积小，但兼容性差

      gif 适用范围：动图、小图标
      png 适用范围：小图标、平铺背景、屏幕截图
      jpg 适用范围：自然风景照片、高清海报等照片

- style 标签写在 body 结束标签后与 body 结束标签前有什么区别？

      标准做法是放在 head 标签区间，好处是保证网页主体加载时，样式已提交加载生效

- 什么是CSS 预处理器 / 后处理器？

      * 预处理器（LESS、Sass）用来预编译 Sass 或 less，增强了 css 代码的复用性。
      使 css 具备层级、mixin、变量、循环、函数等，极大方便了UI组件模块化开发。

      * 后处理器（PostCSS），在完成的 CSS 样式表中根据 CSS 规范进行处理，让其更有效；
      目前最常用于给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。
