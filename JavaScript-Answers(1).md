
## JavaScript

- JavaScript的组成

      JavaScript 由以下三部分组成：
      1. ECMAScript（核心）：JavaScript 语言基础
      2. DOM（文档对象模型）：规定了访问HTML和XML的接口
      3. BOM（浏览器对象模型）：提供了浏览器窗口之间进行交互的对象和方法

- JS的基本数据类型和引用数据类型

      * 基本数据类型：undefined、null、boolean、number、string、symbol
      * 引用数据类型：object、array、function

- 检测浏览器版本版本有哪些方式？

      * 根据 navigator.userAgent   //  UA.toLowerCase().indexOf('chrome')
      * 根据 window 对象的成员       // 'ActiveXObject' in window

- 介绍JS有哪些内置对象？

      * 数据封装类对象：Object、Array、Boolean、Number、String
      * 其他对象：Function、Arguments、Math、Date、RegExp、Error
      * ES6新增对象：Symbol、Map、Set、Promises、Proxy、Reflect

- 说几条写JavaScript的基本规范？

      1.代码缩进，建议使用“四个空格”缩进
      2.代码段使用花括号{}包裹
      3.语句结束使用分号;
      4.变量和函数在使用前进行声明
      5.以大写字母开头命名构造函数，全大写命名常量
      6.规范定义JSON对象，补全双引号
      7.用{}和[]声明对象和数组

- 如何编写高性能的JavaScript？

      * 遵循严格模式："use strict";
      * 将js脚本放在页面底部，加快渲染页面
      * 将js脚本将脚本成组打包，减少请求
      * 使用非阻塞方式下载js脚本
      * 尽量使用局部变量来保存全局变量
      * 尽量减少使用闭包
      * 使用 window 对象属性方法时，省略 window
      * 尽量减少对象成员嵌套
      * 缓存 DOM 节点的访问
      * 通过避免使用 eval() 和 Function() 构造器
      * 给 setTimeout() 和 setInterval() 传递函数而不是字符串作为参数
      * 尽量使用直接量创建对象和数组
      * 最小化重绘(repaint)和回流(reflow)

- 描述浏览器的渲染过程，DOM树和渲染树的区别？

      * 浏览器的渲染过程：
        1. 解析HTML构建 DOM(DOM树)，并行请求 css/image/js
        2. CSS 文件下载完成，开始构建 CSSOM(CSS树)
        3. CSSOM 构建结束后，和 DOM 一起生成 Render Tree(渲染树)
        4. 布局(Layout)：计算出每个节点在屏幕中的位置
        5. 显示(Painting)：通过显卡把页面画到屏幕上

      * DOM树 和 渲染树 的区别：
         1. DOM树与HTML标签一一对应，包括head和隐藏元素
         2. 渲染树不包括head和隐藏元素，大段文本的每一个行都是独立节点，每一个节点都有对应的css属性

- 重绘和回流（重排）的区别和关系？

      * 重绘：当渲染树中的元素外观（如：颜色）发生改变，不影响布局时，产生重绘
      * 回流：当渲染树中的元素的布局（如：尺寸、位置、隐藏/状态状态）发生改变时，产生重绘回流
         注意：JS获取Layout属性值（如：offsetLeft、scrollTop、getComputedStyle等）也会引起回流
             -- 因为浏览器需要通过回流计算最新值
      * 回流必将引起重绘，而重绘不一定会引起回流

- 如何最小化重绘(repaint)和回流(reflow)？

      1. 需要要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示
      2. 需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document
      3. 缓存Layout属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流
      4. 尽量避免用table布局（table元素一旦触发回流就会导致table里所有的其它元素回流）
      5. 避免使用css表达式(expression)，因为每次调用都会重新计算值（包括加载页面）
      6. 尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color
      7. 批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx

- script 的位置是否会影响首屏显示时间？

      1. 在解析 HTML 生成 DOM 过程中，js 文件的下载是并行的，不需要 DOM 处理到 script 节点。
           因此，script 的位置不影响首屏显示的开始时间。
      2. 浏览器解析 HTML 是自上而下的线性过程，script作为 HTML 的一部分同样遵循这个原则。
           因此，script 会延迟 DomContentLoad，只显示其上部分首屏内容，从而影响首屏显示的完成时间。

- 解释JavaScript中的作用域与变量声明提升？

      * JavaScript作用域：
         在Java、C等语言中，作用域为for语句、if语句或{}内的一块区域，称为作用域；
         而在 JavaScript 中，作用域为function(){}内的区域，称为函数作用域。

      * JavaScript变量声明提升：
        在JavaScript中，函数声明与变量声明经常被JavaScript引擎隐式地提升到当前作用域的顶部。
        * 声明语句中的赋值部分并不会被提升，只有名称被提升
        * 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
        * 如果函数有多个同名参数，那么最后一个参数（即使没有定义）会覆盖前面的同名参数

- 介绍JavaScript的原型，原型链？有什么特点？

      * 原型：
        JavaScript的所有对象中都包含了一个 [__proto__] 内部属性，这个属性所对应的就是该对象的原型。
        JavaScript的函数对象，除了原型 [__proto__] 之外，还预置了 prototype 属性。
        当函数对象作为构造函数创建实例时，该 prototype 属性值将被作为实例对象的原型 [__proto__]。

      * 原型链：
        当一个对象调用的属性/方法自身不存在时，就会去自己 [__proto__] 关联的前辈 prototype 对象上去找。
        如果没找到，就会去该 prototype 原型 [__proto__] 关联的前辈 prototype 去找。
        依次类推，直到找到属性/方法或 undefined 为止。从而形成了所谓的“原型链”。

      * 原型特点：
        JavaScript对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变

- JavaScript有几种类型的值？，你能画一下他们的内存图吗？

      * 原始数据类型（Undefined，Null，Boolean，Number、String）-- 栈
      * 引用数据类型（对象、数组和函数）-- 堆

      * 两种类型的区别是：存储位置不同：
       - 原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据；

       - 引用数据类型存储在堆(heap)中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能；
        引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
        当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

- JavaScript创建对象的几种方式？

      1. 工厂方式（使用内置 Object 对象生成）
      ```javascript
         var Dog = new Object();
         Dog.name = "旺财";
         Dog.age = 3;
         Dog.work = function(){
             alert("我是" + Dog.name + ",汪汪汪...");
         }
         Dog.work();
      ```
      2. 对象字面量方式（使用 JSON 对象生成）
      ```javascript
         var Person = {
             firstname: "Mark",
             lastname: "Yun",
             age: 25,
             introduce: function(){
                 alert('I am ' + Person.firstname + ' ' + Person.lastname);
             }
         };
         Person.introduce();
      ```
      3. 构造函数方式（内部用 this 关键字指向实例对象）
      ```javascript
         function Pet(name, age, hobby){
            this.name = name;
            this.age = age;
            this.hobby = hobby;
            this.eat = function(){
               alert("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
            }
         }
         var maidou = new Pet("麦兜", 25, "coding");
         maidou.eat();
      ```
      4. 原型方式（在 prototype 上添加属性和方法）
      ```javascript
          function Dog(){}
          Dog.prototype.name = "旺财";
          Dog.prototype.eat = function(){
             alert(this.name + "是个吃货");
          }
          var wangcai = new Dog();
          wangcai.eat();
      ```
      5. 混合方式（构造函数方式[this] + 原型方式[prototype]）
      ```javascript
         function Mobile(name, price){
           this.name = name;
           this.price = price;
         }
         Mobile.prototype.sell = function(){
            alert(this.name + "，售价 $" + this.price);
         }
         var iPhone7 = new Mobile("iPhone7", 1000);
         iPhone7.sell();
      ```javascript
- JavaScript如何实现一个类，怎么实例化这个类？

      1. 构造函数法（this + prototype） -- 用 new 关键字 生成实例对象
        缺点：用到了 this 和 prototype，编写复杂，可读性差
        ```javascript
          function Mobile(name, price){
             this.name = name;
             this.price = price;
           }
           Mobile.prototype.sell = function(){
              alert(this.name + "，售价 $" + this.price);
           }
           var iPhone7 = new Mobile("iPhone7", 1000);
           iPhone7.sell();
        ```
      2. Object.create 法 -- 用 Object.create() 生成实例对象
        缺点：不能实现私有属性和私有方法，实例对象之间也不能共享数据
        ```javascript
         var Person = {
             firstname: "Mark",
             lastname: "Yun",
             age: 25,
             introduce: function(){
                 alert('I am ' + Person.firstname + ' ' + Person.lastname);
             }
         };
        
         var person = Object.create(Person);
         person.introduce();

         // Object.create 要求 IE9+，低版本浏览器可以自行部署：
         if (!Object.create) {
        　   Object.create = function (o) {
        　　　 function F() {}
        　　　 F.prototype = o;
        　　　 return new F();
        　　};
        　}
      ```
      3. 极简主义法（消除 this 和 prototype） -- 调用 createNew() 得到实例对象
        优点：容易理解，结构清晰优雅，符合传统的"面向对象编程"的构造
        ```javascript
         var Cat = {
           age: 3, // 共享数据 -- 定义在类对象内，createNew() 外
           createNew: function () {
             var cat = {};
             // var cat = Animal.createNew(); // 继承 Animal 类
             cat.name = "小咪";
             var sound = "喵喵喵"; // 私有属性--定义在 createNew() 内，输出对象外
             cat.makeSound = function () {
               alert(sound);  // 暴露私有属性
             };
             cat.changeAge = function(num){
               Cat.age = num; // 修改共享数据
             };
             return cat; // 输出对象
           }
         };

         var cat = Cat.createNew();
         cat.makeSound();
      ```
      4. ES6 语法糖 class -- 用 new 关键字 生成实例对象
      ```javascript
         class Point {
           constructor(x, y) {
             this.x = x;
             this.y = y;
           }
           toString() {
             return '(' + this.x + ', ' + this.y + ')';
           }
         }

      var point = new Point(2, 3);
      ```

- Javascript如何实现继承？

      1. 构造函数绑定：使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上
      ```javascript   　
        function Cat(name,color){
         　Animal.apply(this, arguments);
         　this.name = name;
         　this.color = color;
        }
      ```
      2. 实例继承：将子对象的 prototype 指向父对象的一个实例
      ```javascript
        Cat.prototype = new Animal();
        Cat.prototype.constructor = Cat;
      ```
      3. 拷贝继承：如果把父对象的所有属性和方法，拷贝进子对象
      ```javascript         　　
        function extend(Child, Parent) {
      　　　var p = Parent.prototype;
      　　　var c = Child.prototype;
      　　　for (var i in p) {
      　　　   c[i] = p[i];
      　　　}
      　　　c.uber = p;
      　 }
      ```
      4. 原型继承：将子对象的 prototype 指向父对象的 prototype
      ```javascript
        function extend(Child, Parent) {
            var F = function(){};
          　F.prototype = Parent.prototype;
          　Child.prototype = new F();
          　Child.prototype.constructor = Child;
          　Child.uber = Parent.prototype;
        }
      ```
      5. ES6 语法糖 extends：class ColorPoint extends Point {}
      ```javascript
        class ColorPoint extends Point {
           constructor(x, y, color) {
              super(x, y); // 调用父类的constructor(x, y)
              this.color = color;
           }
           toString() {
              return this.color + ' ' + super.toString(); // 调用父类的toString()
           }
        }
      ```
- Javascript作用链域?

      * 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
      * 如果当前作用域没有找到属性或方法，会向上层作用域查找，直至全局函数，这种形式就是作用域链。

- 谈谈this对象的理解。

      * this 总是指向函数的直接调用者
      * 如果有 new 关键字，this 指向 new 出来的实例对象
      * 在事件中，this指向触发这个事件的对象
      * IE下 attachEvent 中的this总是指向全局对象Window

- eval是做什么的？

      * eval的功能是把对应的字符串解析成JS代码并运行
      * 应该避免使用eval，不安全，非常耗性能（先解析成js语句，再执行）
      * 由JSON字符串转换为JSON对象的时候可以用 eval('('+ str +')');

- 什么是 Window 对象? 什么是 Document 对象?

      Window 对象表示当前浏览器的窗口，是JavaScript的顶级对象。
      我们创建的所有对象、函数、变量都是 Window 对象的成员。
      Window 对象的方法和属性是在全局范围内有效的。

      Document 对象是 HTML 文档的根节点与所有其他节点（元素节点，文本节点，属性节点, 注释节点）。
      Document 对象使我们可以通过脚本对 HTML 页面中的所有元素进行访问。
      Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

- null 与 undefined 的区别？

      * null 表示"没有对象"，即该处不应该有值。典型用法：
        - 作为函数的参数，表示该函数的参数不是对象
        - 作为对象原型链的终点

      * undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法：
        - 变量被声明了，但没有赋值时，就等于 undefined
        - 调用函数时，应该提供的参数没有提供，该参数等于 undefined
        - 对象没有赋值的属性，该属性的值为 undefined
        - 函数没有返回值时，默认返回 undefined

- 介绍 DOM 的发展。

      DOM：文档对象模型（Document Object Model），定义了访问HTML和XML文档的标准，与编程语言及平台无关
      DOM0：提供了查询和操作Web文档的内容API。未形成标准，实现混乱。如：document.forms['login']
      DOM1：W3C提出标准化的DOM，简化了对文档中任意部分的访问和操作。如：JavaScript中的Document对象
      DOM2：原来DOM基础上扩充了鼠标事件等细分模块，增加了对CSS的支持。如：getComputedStyle(elem, pseudo)
      DOM3：增加了XPath模块和加载与保存（Load and Save）模块。如：XPathEvaluator

- 介绍DOM0，DOM2，DOM3事件处理方式区别。

      DOM0级事件处理方式：
          btn.onclick = func;
          btn.onclick = null;
      DOM2级事件处理方式：
          btn.addEventListener('click', func, false);
          btn.removeEventListener('click', func, false);
          btn.attachEvent("onclick", func);
          btn.detachEvent("onclick", func);
      DOM3级事件处理方式：
          eventUtil.addListener(input, "textInput", func);
          // eventUtil 是自定义对象，textInput 是DOM3级事件

- 事件的三个阶段

      捕获、目标、冒泡

- 介绍事件“捕获”和“冒泡”执行顺序和事件的执行次数？

      * 按照W3C标准的事件：首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段

      * 事件执行次数（DOM2-addEventListener）：元素上绑定事件的个数
        - 注意1：前提是事件被确实触发
        - 注意2：事件绑定几次就算几个事件，即使类型和功能完全一样也不会“覆盖”

      * 事件执行顺序：判断的关键是否目标元素
        - 非目标元素：根据W3C的标准执行：捕获->目标元素->冒泡（不依据事件绑定顺序）
        - 目标元素：依据事件绑定顺序：先绑定的事件先执行（不依据捕获冒泡标准）
        - 最终顺序：父元素捕获->目标元素事件1->目标元素事件2->子元素捕获->子元素冒泡->父元素冒泡
           注意：子元素事件执行前提 -- 事件确实“落”到子元素布局区域上，而不是简单的具有嵌套关系

- 在一个DOM上同时绑定两个点击事件：一个用捕获，一个用冒泡。事件会执行几次，先执行冒泡还是捕获？

      * 该DOM上的事件如果被触发，会执行两次（执行次数等于绑定次数）
      * 如果该DOM是目标元素，则按事件绑定顺序执行，不区分冒泡/捕获
      * 如果该DOM是处于事件流中的非目标元素，则先执行捕获，后执行冒泡

- 什么是事件委托（代理），有什么优缺点？

      * 事件委托是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件
      * 优点：
        - 可以减少事件注册，节省大量内存占用
        - 可以将事件应用于动态添加的子元素上
      * 缺点：
        使用不当会造成事件在不应该触发时触发
      * 示例：
        ulEl.addEventListener('click', function(e){
            var target = event.target || event.srcElement;
            if(!!target && target.nodeName.toUpperCase() === "LI"){
                console.log(target.innerHTML);
            }
        }, false);

- IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

      * IE只事件冒泡，不支持事件捕获；火狐同时支持件冒泡和事件捕获

- IE的事件处理和W3C的事件处理有哪些区别？

      * 绑定事件
        - W3C: targetEl.addEventListener('click', handler, false);
        - IE: targetEl.attachEvent('onclick', handler);

      * 删除事件
        - W3C: targetEl.removeEventListener('click', handler, false);
        - IE: targetEl.detachEvent(event, handler);

      * 事件对象
        - W3C: var e = arguments.callee.caller.arguments[0]
        - IE: window.event

      * 事件目标
        - W3C: e.target
        - IE: window.event.srcElement

      * 阻止事件默认行为
        - W3C: e.preventDefault()
        - IE: window.event.returnValue = false

      * 阻止事件冒泡传播
        - W3C: e.stopPropagation()
        - IE: window.event.cancelBubble = true

- W3C事件的 target 与 currentTarget 的区别？

      * target 只会出现在事件流的目标阶段
      * currentTarget 可能出现在事件流的任何阶段
      * 当事件流处在目标阶段时，二者的指向相同
      * 当事件流处于捕获或冒泡阶段时：currentTarget 指向当前事件活动的对象(一般为父级)

- 如何派发事件(dispatchEvent)？（如何进行事件广播？）

      * W3C: 使用 dispatchEvent 方法
      * IE: 使用 fireEvent 方法
      ```javascript
        var fireEvent = function(element, event){
            if (document.createEventObject){
                var mockEvent = document.createEventObject();
                return element.fireEvent('on' + event, mockEvent)
            }else{
                var mockEvent = document.createEvent('HTMLEvents');
                mockEvent.initEvent(event, true, true);
                return !element.dispatchEvent(mockEvent);
            }
        }
      ```
- 什么是函数节流？介绍一下应用场景和原理？

      * 函数节流(throttle)是指阻止一个函数在很短时间间隔内连续调用。
      只有当上一次函数执行后达到规定的时间间隔，才能进行下一次调用。
      但要保证一个累计最小调用间隔（否则拖拽类的节流都将无连续效果）

      * 函数节流用于 onresize, onscroll 等短时间内会多次触发的事件

      * 函数节流的原理：使用定时器做时间节流。
      当触发一个事件时，先用 setTimout 让这个事件延迟一小段时间再执行。
      如果在这个时间间隔内又触发了事件，就 clearTimeout 原来的定时器，
      再 setTimeout 一个新的定时器重复以上流程。

      * 函数节流简单实现：
      ```javascript
        function throttle(method, context) {
             clearTimeout(methor.tId);
             method.tId = setTimeout(function(){
                 method.call(context);
             }， 100); // 两次调用至少间隔 100ms
        }
        // 调用
        window.onresize = function(){
            throttle(myFunc, window);
        }
      ```
- 区分什么是“客户区坐标”、“页面坐标”、“屏幕坐标”？

      * 客户区坐标：鼠标指针在可视区中的水平坐标(clientX)和垂直坐标(clientY)
      * 页面坐标：鼠标指针在页面布局中的水平坐标(pageX)和垂直坐标(pageY)
      * 屏幕坐标：设备物理屏幕的水平坐标(screenX)和垂直坐标(screenY)

- 如何获得一个DOM元素的绝对位置？

      * elem.offsetLeft：返回元素相对于其定位父级左侧的距离
      * elem.offsetTop：返回元素相对于其定位父级顶部的距离
      * elem.getBoundingClientRect()：返回一个DOMRect对象，包含一组描述边框的只读属性，单位像素

- 分析 ['1', '2', '3'].map(parseInt) 答案是多少？

      答案:[1, NaN, NaN]

      * parseInt(string, radix) 第2个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析。
      * map 每次为 parseInt 传3个参数(elem, index, array)，其中 index 为数组索引。
        因此，map 遍历 ["1", "2", "3"]，相应 parseInt 接收参数如下：

        parseInt('1', 0);  // 1
        parseInt('2', 1);  // NaN
        parseInt('3', 2);  // NaN

        所以，parseInt 参数 radix 不合法，导致返回值为 NaN

- 什么是闭包（closure），为什么要用闭包？

      * 闭包是位于一个函数内的函数，该内层函数可以访问到其所在外层函数的局部变量，并将其暴露到函数外。
      * 由于在函数外保持对内层函数的引用，内层函数不会被垃圾回收。
      * 闭包的作用：
       1.取得函数内部的局部变量
       2.在内存中维持一个变量

- JavaScript 代码中的 "use strict" 是什么？ 使用后区别有哪些？

      * "use strict" 是 EC5 引入的运行模式，要求 JS 在更严格的条件下运行
        目的是消除 JS 语法的一些不合理、不严谨之处，保证代码更加安全、高效的运行

      * "严格模式"对Javascript的语法和行为，都做了一些改变：
      * 变量都必须先用 var 命令声明
      * 函数必须声明在顶层
      * 禁止使用with语句
      * 禁止this关键字指向全局对象
      * arguments.caller, arguments.callee 被禁用
      * delete 禁止删除变量(会报错)，只能删除对象属性(configurable=true，否则会报错)
      * 试图修改对象的只读属性、在不可扩展的对象上添加属性，会报错
      * 对象不能有重名的属性，函数不能有重名的参数
      * 禁止八进制字面量，如 010 表示 八进制的 8
      * 为eval单独创建作用域，eval不再能生成全局变量
      * 不允许对arguments赋值
      * eval, arguments变为关键字，不可作为变量名、函数名等
      * 新增保留字：implements、interface、let、package、private、protected、public、static、yield

- 如何判断一个对象是否属于某个类？

      使用 instanceof 运算符：foo instanceof Foo;

- new 操作符具体干了什么？

      1. 创建实例对象，this 变量引用该对象，同时还继承了构造函数的原型
      2. 属性和方法被加入到 this 引用的对象中
      3. 新创建的对象由 this 所引用，并且最后隐式的返回 this

- 用原生JavaScript的实现过什么功能吗？

      封装选择器、调用第三方API、设置和获取样式

- Javascript中有一个函数，执行对象属性查找时永远不会去原型链上查找，这个函数是什么？

      hasOwnProperty 函数判断一个对象自身是否具有指定属性，不会去原型链上查找
      * 用法：var bool = obj.hasOwnProperty(prop);

- 介绍对 JSON 的了解？

      * JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式

      * JSON 语法规则：
       1. 数据用键值对表示，逗号分隔
       2. 花括号保存对象，方括号保存数组

      * JSON字符串转换为JSON对象:
       var obj = eval('('+ str +')');
       var obj = str.parseJSON();
       var obj = JSON.parse(str);

      * JSON对象转换为JSON字符串：
       var str = obj.toJSONString();
       var str = JSON.stringify(obj);

- 解释一下这段代码的意思吗？

      ```javascript
      [].forEach.call($$("*"), function(el){
          el.style.outline = "1px solid #" + (~~(Math.random()*(1<<24))).toString(16);
      })
      ```
      解释：获取页面所有的元素，遍历这些元素，为它们添加1像素随机颜色的轮廓(outline)

      1. `$$(sel)` // $$函数被许多现代浏览器命令行支持，等价于 document.querySelectorAll(sel)
      2. `[].forEach.call(NodeLists)` // 使用 call 函数将数组遍历函数 forEach 应到节点元素列表
      3. `el.style.outline = "1px solid #333"` // 样式 outline 位于盒模型之外，不影响元素布局位置
      4. `(1<<24)` // parseInt("ffffff", 16) == 16777215 == 2^24 - 1 // 1<<24 == 2^24 == 16777216
      5. `Math.random()*(1<<24)` // 表示一个位于 0 到 16777216 之间的随机浮点数
      6. `~~Math.random()*(1<<24)` // `~~` 作用相当于 parseInt 取整
      7. `(~~(Math.random()*(1<<24))).toString(16)` // 转换为一个十六进制数色值

- 什么是 Ajax? 如何创建一个Ajax？

      * AJAX(Asynchronous Javascript And XML) = 异步 JavaScript + XML 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。

      * 创建 ajax 步骤：
    	 1.创建 XMLHttpRequest 对象
    	 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的类型、验证信息
    	 3.设置响应 HTTP 请求状态变化的回调函数
    	 4.发送 HTTP 请求
    	 5.获取异步调用返回的数据
    	 6.使用 JavaScript 和 DOM 实现局部刷新

      ```javascript
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
      ```

- 同步和异步的区别？

      * 同步：同一时刻只能完成一项任务。如果有多个任务，必须按先后顺序排队执行，因此任务执行是阻塞的
      * 异步：同一时刻能够完成多项任务。后面任务不必等前面任务结束就执行，因此任务执行是无序非阻塞的

- JavaScript实现异步编程的方法？

      * 回调函数
      * 事件监听
      * 发布/订阅
      * Promises对象
      * Async函数[ES7]

- 什么是 Cookie 隔离？（请求资源的时候不携带cookie怎么做？）

      如果静态文件放在主域名下，请求静态文件时携带cookie数据，并提交到服务器，非常浪费流量和响应时间。
      cookie是有域的限制，不能跨域提交请求。因此，使用非主域名时，请求头中就不会带有cookie数据。
      Cookie 隔离可以减小请求头的体积，使web服务器省去对cookie的处理分析环节，提高了对请求的响应速度。

- 如何解决跨域问题?

      * document.domain + iframe：要求主域名相同 //只能跨子域
      * JSONP(JSON with Padding)：response: callback(data) //只支持 GET 请求
      * 跨域资源共享CORS(XHR2)：Access-Control-Allow //兼容性 IE10+
      * 跨文档消息传输(HTML5)：postMessage + onmessage  //兼容性 IE8+
      * WebSocket(HTML5)：new WebSocket(url) + onmessage //兼容性 IE10+
      * 服务器端设置代理请求：服务器端不受同源策略限制

- HTTP/2 与 HTTP/1.x 的关键区别

      * 二进制协议代替文本协议，更加简洁高效
      * 针对每个域只使用一个多路复用的连接
      * 压缩头部信息减小开销
      * 允许服务器主动推送应答到客户端的缓存中

- 页面编码和被请求的资源编码如果不一致如何处理？

      * 后端响应头设置 charset
      * 前端页面`<meta>`设置 charset

- 把`<script>`放在`</body>`之前和之后有什么区别？浏览器会如何解析它们？

      * 按照HTML标准，在`</body>`结束后出现`<script>`或任何元素的开始标签，都是解析错误。
        虽然不符合HTML标准，但浏览器会自动容错，使实际效果与写在`</body>`之前没有区别

      * 浏览器的容错机制会忽略`<script>`之前的`</body>`，视作`<script>`仍在 body 体内。
        省略`</body>`和`</html>`闭合标签符合HTML标准，服务器可以利用这一标准尽可能少输出内容

- 延迟加载JS的方式有哪些？

      * 设置`<script>`属性 defer="defer" （脚本将在页面完成解析时执行）
      * 动态创建 script DOM：document.createElement('script');
      * XmlHttpRequest 脚本注入
      * 延迟加载工具 LazyLoad

- 异步加载JS的方式有哪些？

      * 设置`<script>`属性 async="async" （一旦脚本可用，则会异步执行）
      * 动态创建 script DOM：document.createElement('script');
      * XmlHttpRequest 脚本注入
      * 异步加载库 LABjs
      * 模块加载器 Sea.js

- 前端性能优化最佳实践？

      * 性能评级工具（PageSpeed 或 YSlow）
      * 合理设置 HTTP 缓存：Expires 与 Cache-control
      * 静态资源打包，开启 Gzip 压缩（节省响应流量）
      * CSS3 模拟图像，图标base64（降低请求数）
      * 模块延迟(defer)加载/异步(async)加载
      * Cookie 隔离（节省请求流量）
      * localStorage（本地存储）
      * 使用 CDN 加速（访问最近服务器）
      * 启用 HTTP/2（多路复用，并行加载）
      * 前端自动化（gulp/webpack）

- 什么是 Promise ？

      * Promise 就是一个对象，用来表示并传递异步操作的最终结果
      * Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因
      * Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）

- documen.write 和 innerHTML 的区别？

  	  * document.write 将内容写入页面的内容流，会导致整个页面重绘
  	  * elem.innerHTML 将内容写入特定DOM节点，只重绘页面的某一部分

- JS的DOM操作：添加、移除、移动、复制、创建和查找节点?

  	 * 创建新节点
  	  document.createElement()          //创建一个具体的元素
  	  document.createTextNode()         //创建一个文本节点
  	  document.createDocumentFragment() //创建一个DOM片段
  	 * 复制、添加、移除、替换、插入节点
  	  element.cloneNode()
  	  element.appendChild()
  	  element.removeChild()
  	  element.replaceChild()
  	  element.insertBefore() //在已有的子节点前插入新子节点
  	 * 查找节点
  	  document.getElementsByTagName()
  	  document.getElementById()
  	  document.querySelector()
  	  document.querySelectorall()

- JavaScript 中，调用函数有哪几种方式？

      * 方法调用模式          Foo.foo(arg1, arg2);
      * 函数调用模式          foo(arg1, arg2);
      * 构造器调用模式        (new Foo())(arg1, arg2);
      * call/applay调用模式   Foo.foo.call(that, arg1, arg2);
      * bind调用模式          Foo.foo.bind(that)(arg1, arg2)();

- func.call() 和 func.apply() 的区别？

      接收的参数类型和数量不同：
      - func.apply(that, [arg1, arg2, argn])
      - func.call(that, arg1, arg2, argn)

- func.bind() 与 func.call()有什么不同？

      * 应用的场景不同：
        - bind: 用当前对象绑定函数内部的 this 指向，返回新的函数
        - call: 使当前对象借用执行其他对象的函数，返回执行结果

      * 下面执行结果一致：

          var add = (a, b) => a + b;
          add.call(null, 1, 2);

          add.bind(null, 1, 2)();
          add.bind(null, 1)(2);
          add.bind(null)(1, 2);

- 简单实现 Function.bind 函数？
  ```javascript
      if (!Function.prototype.bind) {
        Function.prototype.bind = function(that) {
          var func = this, args = arguments;
          return function() {
            return func.apply(that, Array.prototype.slice.call(args, 1));
          }
        }
      }
      // 只支持 bind 阶段的默认参数：
      func.bind(that, arg1, arg2)();

      // 不支持以下调用阶段传入的参数：
      func.bind(that)(arg1, arg2);
  ```
- 列举一下JavaScript数组和对象有哪些原生方法？

      * 数组：
      arr.concat(arr1, arr2, arrn);
      arr.join(",");
      arr.sort(func);
      arr.pop();
      arr.push(e1, e2, en);
      arr.shift();
      unshift(e1, e2, en);
      arr.reverse();
      arr.slice(start, end);                  // 获取数组指定范围的元素
      arr.splice(index, count, e1, e2, en);   // 修改数组指定范围的元素
      arr.indexOf(el);
      arr.includes(el);   // ES6

      * 对象：
      object.hasOwnProperty(prop);            //对象自身中是否存在指定属性
      object.propertyIsEnumerable(prop);      //属性能否用for-in循环枚举
      object.valueOf();                       //对象的原始值
      object.toString();                      //对象字符串表示示
      object.toLocaleString();                //对象的字符串表示(与地区和环境对应)
      Class.prototype.isPropertyOf(object);   //是否是方法调用者的原型对象

- Array.splice() 与 Array.splice() 的区别？

      * slice -- “读取”数组指定的元素，不会对原数组进行修改
       语法：arr.slice(start, end)
        * start 指定选取开始位置（含）
        * end 指定选取结束位置（不含）

      * splice -- “操作”数组指定的元素，会修改原数组，返回被删除的元素
       语法：arr.splice(index, count, [insert Elements])
       * index 是操作的起始位置
       * count = 0 插入元素，count > 0 删除元素
       * [insert Elements] 向数组新插入的元素

      * 示例
        // Array.splice() -- 获取数组指定元素
        ['A', 'B', 'C', 'D'].slice(1, 3);         // return ['B', 'C']

        // Array.splice() -- 插入、删除、替换 元素
        ['A', 'B', 'C'].splice(2, 0, 'D');       // ['A', 'B', 'D', 'C'] // return null
        ['A', 'B', 'C'].splice(1, 1);            // ['A', 'C']           // return ['B']
        ['A', 'B', 'C'].splice(1, 2, 'X', 'Y');  // ['A', 'X', 'Y']      // return ['B', 'C']

- JavaScript 对象生命周期的理解？

      * 当创建一个对象时，JavaScript 会自动为该对象分配适当的内存
      * 垃圾回收器定期扫描对象，并计算引用了该对象的其他对象的数量
      * 如果被引用数量为 0，或惟一引用是循环的，那么该对象的内存即可回收

- 哪些操作会造成内存泄漏？

      JavaScript 内存泄露指对象在不需要使用它时仍然存在，导致占用的内存不能使用或回收

      * JavaScript 中会造成内存泄漏的操作：
        - 未使用 var 声明的全局变量
        - 闭包函数(Closures)
        - 循环引用(两个对象相互引用)
        - 控制台日志(console.log)
        - 移除存在绑定事件的DOM元素(IE)

### ECMAScript6 相关

- 谈一谈你了解ECMAScript6的新特性？

      * 块级作用区域              let a = 1;
      * 可定义常量                const PI = 3.141592654;
      * 变量解构赋值              var [a, b, c] = [1, 2, 3];
      * 字符串的扩展(模板字符串)   var sum = `${a + b}`;
      * 数组的扩展(转换数组类型)   Array.from($('li'));
      * 函数的扩展(扩展运算符)     [1, 2].push(...[3, 4, 5]);
      * 对象的扩展(同值相等算法)    Object.is(NaN, NaN);
      * 新增数据类型(Symbol)      let uid = Symbol('uid');
      * 新增数据结构(Map)         let set = new Set([1, 2, 2, 3]);
      * for...of循环            for(let val of arr){};
      * Promise对象             var promise = new Promise(func);
      * Generator函数           function* foo(x){yield x; return x*x;}
      * 引入Class(类)           class Foo {}
      * 引入模块体系             export default func;
      * 引入async函数[ES7]      async function asyncPrint(value, ms) {
                                  await timeout(ms);
                                  console.log(value)
                                 }

- Object.is() 与原来的比较操作符 ===、== 的区别？

      1. == 相等运算符，比较时会自动进行数据类型转换
      2. === 严格相等运算符，比较时不进行隐式类型转换
      3. Object.is 同值相等算法，在 === 基础上对 0 和 NaN 特别处理

       +0 === -0 //true
       NaN === NaN // false

       Object.is(+0, -0) // false
       Object.is(NaN, NaN) // true

- 什么是 Babel ？

      * Babel 是一个 JS 编译器，自带一组 ES6 语法转化器，用于转化 JS 代码。
      这些转化器让开发者提前使用最新的 JS语法(ES6/ES7)，而不用等浏览器全部兼容。
      * Babel 默认只转换新的 JS 句法(syntax)，而不转换新的API。
      如：Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象以及一些定义在全局对象上的方法(比如Object.assign)
      * 如果运行新的 API 和 新的方法，须使用 babel-polyfill，为当前环境提供一个垫片。
      * Babel 6.0 开始，不再直接提供浏览器版本，而是要用构建工具构建出来。