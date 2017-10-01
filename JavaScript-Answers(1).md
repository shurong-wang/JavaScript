
## JavaScript

### JavaScript 的组成

  * JavaScript 由以下三部分组成：
	      
	  1. ECMAScript（核心）：JavaScript 语言基础
	  2. DOM（文档对象模型）：规定了访问 HTML 和 XML 的接口
	  3. BOM（浏览器对象模型）：提供了"浏览器窗口"进行交互的对象和方法

### BOM 对象有哪些? 列举 window 对象？
* BOM 对象包括：
	- window 对象 -- 打开的窗口对象
	- location 对象 -- 当前 URL 信息
	- navigator 对象 -- 浏览器本身信息
	- screen 对象 -- 客户端屏幕信息
	- history 对象 -- 浏览器访问历史信息
* window 对象是 BOM 的顶层(核心)对象，所有其他 BOM 对象都是 window 对象的属性。由于 window 包含了 document，document 对象又是 DOM 的根节点，可以理解为 BOM 包含了 DOM。所以，列举 window 对象：
	- location 对象 -- 当前 URL 信息
	- navigator 对象 -- 浏览器本身信息
	- screen 对象 -- 客户端屏幕信息
	- history 对象 -- 浏览器访问历史信息
	- document 对象 -- 文档对象

### documen.write 和 innerHTML 的区别？

  * document.write 将内容写入页面的内容流，会导致整个页面重绘
  * elem.innerHTML 将内容写入特定 DOM 节点，只重绘页面的某一部分

### JS 的 DOM 操作：添加、移除、移动、复制、创建和查找节点?

* 创建新节点

	```javascript
	document.createElement('div');            // 创建一个元素
	document.createTextNode('hello world');   // 创建一个文本节点
	// 创建一个 DOM 片段，然后插入子节点
	document.createDocumentFragment().appendChild(subNodes); 
	```
	
* 复制、添加、移除、替换、插入节点

	```javascript
	el.cloneNode(true);
	el.appendChild(subNode);
	el.removeChild(subNode);
	el.replaceChild(newNode, oldNode);
	// 在已有的子节点(existingChild)前插入新子节点
	el.insertBefore(newChild, existingChild);
	
	// 将一个元素节点插入到相对于被调用的元素的给定位置
	el.insertAdjacentElement(position, newEl);
	// 参数 position: 
	// [beforebegin]<p>[afterbegin]foo[beforeend]</p>[afterend]
	
	// 将一个文本节点插入到相对于被调用的元素的给定位置
	el.insertAdjacentText(position, newText);
	// 参数 position: 
	// [beforebegin]<p>[afterbegin]foo[beforeend]</p>[afterend]
	```
	
* 查找节点

	```javascript
	document.getElementsByClassName('highlight');
	document.getElementsByTagName('div');
	document.getElementById('btn-button');
	document.querySelector('#btn-button');
	document.querySelectorall('#news li');
	
	// 获取父元素、父节点
	el.parentElement;
	el.parentNode;	// 没有兼容性问题
	el.offsetParent; // 找到最近的有定位的父节点
	// 获取子节点，可以是任何一种节点，通过 nodeType 判断
	el.children;     // 在标准下、非标准下都只含元素类型节点
                    // 但对待非法嵌套的子节点，处理方式与 childNodes 一致 
	el.childNodes;   // 非标准下：只包含元素类型，不会包含非法嵌套的子节点
	　　　　　　　　　　// 标准下：包含元素和文本类型，会包含非法嵌套的子节点 
	
	// 获取元素属性列表
	el.attributes;
	
	// 当前元素的第一个/最后一个子元素节点
	el.firstChild; 				// el.childNodes[0]
	el.lastChild;					// el.childNodes[el.childNodes.length - 1]
	el.firstElementChild; 		// 必须是 Element 类型（非标准不支持）
	el.lastElementChild;		// 必须是 Element 类型（非标准不支持）
	// 下一个/上一个兄弟元素节点
	el.nextSibling;
	el.previousSibling;
	el.nextElementSibling;  	// 必须是 Element 类型（非标准不支持）
	el.previousElementSibling;	// 必须是 Element 类型（非标准不支持）
	
	// 获取元素值（注意：要先通过 el.childNodes[0] 获取文本节点，才能获取文本值）
	document.getElementById('description').childNodes[0].nodeValue;
	
	// 获取应用到元素计算后的样式
	window.getComputedStyle(el, null);
	
	// 获取元素的大小以及相对于浏览器可视窗口的位置
	el.getBoundingClientRect();
	
	// 获取/设置一个节点的文本内容
	let text = el.textContent;
	el.textContent = "this is some sample text";
	
	let text = el.innerText;
	el.innerText = "this is some sample text";
	
	let text = el.innerHTML;
	el.innerHTML = "this is some sample text";
	
	// textContent 相比 innerText、innerHTML 的独有的特点：
	1. textContent 会获取所有元素的内容，包括 <script> 和 <style>，以及隐藏元素
	2. textContent 不会触发回流（reflow）
	3. textContent 可以防止 XSS 攻击（相比innerHTML）
	```

### JS 的基本数据类型和引用数据类型

  * 基本数据类型：undefined、null、boolean、number、string、symbol
  * 引用数据类型：object、array、function

### 检测浏览器版本版本有哪些方式？

  * 根据 navigator.userAgent

	`navigator.userAgent.toLowerCase().indexOf('chrome')`
	
  * 根据 window 对象的成员
  
  `'ActiveXObject' in window`

### 介绍 JS 有哪些内置对象？

  * 数据封装类对象：Object、Array、Boolean、Number、String
  * 其他对象：Function、Arguments、Math、Date、RegExp、Error
  * ES6 新增对象：Symbol、Map、Set、Promises、Proxy、Reflect

### 说几条写 JavaScript 的基本规范？

  1. 代码缩进，建议使用“四个空格”缩进
  2. 代码段使用花括号 {} 包裹
  3. 语句结束使用分号 ;
  4. 变量和函数在使用前进行声明
  5. 以大写字母开头命名构造函数，全大写命名常量
  6. 规范定义JSON对象，补全双引号
  7. 用 {} 和 [] 声明对象和数组

### 如何编写高性能的 JavaScript？

  * 遵循严格模式："use strict";
  * 将 js 脚本放在页面底部，加快渲染页面
  * 将 js 脚本将脚本成组打包，减少请求
  * 使用非阻塞方式下载 js 脚本
  * 尽量使用局部变量来保存全局变量
  * 尽量减少使用闭包
  * 使用 window 对象属性方法时，省略 window
  * 尽量减少对象成员嵌套
  * 缓存 DOM 节点的访问
  * 通过避免使用 eval() 和 Function() 构造器
  * 给 setTimeout() 和 setInterval() 传递函数而不是字符串作为参数
  * 尽量使用直接量创建对象和数组
  * 最小化重绘(repaint)和回流(reflow)


### 描述浏览器的渲染过程，DOM 树和渲染树的区别？

  * 浏览器的渲染过程：
  
  `DOM -> CSSOM -> Render Tree -> Layout -> Painting`
  
    1. 解析 HTML 构建 DOM 树，并行请求 CSS 和 Script
    2. CSS 文件下载完成，开始构建 CSSOM(CSS Object Model)
    3. CSSOM 构建结束后，和 DOM 一起生成渲染树(Render Tree)
    4. 布局(Layout)：计算出每个节点在屏幕中的位置
    5. 显示(Painting)：通过显卡把页面画到屏幕上

  * DOM 树 和 渲染树 的区别：
     1. DOM 树与 HTML 标签一一对应，包括 head 和隐藏元素
     2. 渲染树会忽略 head 和 隐藏元素

         
### 重绘（repaint）和重排（reflow）的区别和关系？

  * 重绘：当 Render Tree 中的 DOM 元素外观（如：颜色）发生改变，不影响布局时，会产生重绘
  * 重排（回流）：当 Render Tree 中的 DOM 元素布局（如：尺寸、位置、隐藏）发生改变时，会产生回流
  * 注意：JS 获取 Layout 属性值（如 offsetLeft、scrollTop、getComputedStyle 等）也会引起回流。因为浏览器需要通过回流计算最新值
  * 由上可知，回流必将引起重绘，而重绘不一定会引起回流


### 重绘和回流的触发方式有哪些？如何最小化重绘和回流？

- 重绘和回流的触发方式：
	1. 添加/删除 DOM 元素(回流+重绘)	2. 隐藏元素 -- display:none(回流+重绘)，visibility:hidden(只重绘，不回流)	3. 移动元素 -- 比如改变 top/left，或者移动元素到另外一个父元素中(重绘+回流)	4. 对 style 的操作(对不同的属性操作，影响不一样)	5. 用户的事件操作，比如鼠标悬停、页面滚动、输入框键入、改变窗口大小等(回流+重绘)
	
- 最小化重绘和回流方法：
  1. 需要要对元素进行频繁的操作时，可以先隐藏(display: none)，操作完成后再显示。或者使用 cloneNode() 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点
  2. 需要创建多个 DOM 节点时，使用 DocumentFragment 创建，然后一次性加入 document
  3. 缓存 Layout 属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流
  4. 尽量避免用 table 布局（table 元素一旦触发回流就会导致 table 里所有的其它元素回流）
  5. 避免使用 css 表达式(expression)，因为每次调用都会重新计算值（包括加载页面）
  6. 尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color
  7. 批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx
  8. 使用虚拟 DOM 的框架，比如 React
  9. 使用 window.requestAnimationFrame() 处理密集的重新渲染（如 scroll 事件）

### 什么是首屏时间？影响首屏加载的因素及优化方法？
	
- 首屏时间
	
	- 首屏时间是指浏览器显示第一屏页面所消耗的时间，以 800 x 600 像素尺寸为例，页面从开始加载，到显示高度达到 600 像素，且此区域有内容显示的时间。
	
	- 一般情况下，首屏时间越短，用户体验越好。通常一个网站，如果“首屏时间”在 2 秒以内是比较优秀的，5 秒以内用户可以接受，10 秒以上就不可容忍了。
		
- 影响首屏加载的因素及优化方法

	- 浏览器解析 HTML 创建 DOM 树时，若碰到 CSS 和 JS 外链文件会阻塞渲染，影响首屏时间。所以，通常将 JS 放到 HTML 最后加载，优先保证基础信息阅读。
		
	- 浏览器加载图片的顺序：HTML 中的 img 元素 -> css 样式图片 -> JS 加载的图片。所以，建议将与卖点相关的图片以 <img> 元素形式展示，让用户第一时间看到最关键的信息点。
		
	- 对于第二屏出现的图片采用延迟加载，优先加载第一屏的图片。在保证清晰度前提下，尽可能压缩图片大小。
	
	
### `<script>`标签的位置为什么会影响首屏显示时间？

  1. 在解析 HTML 生成 DOM 过程中，js 文件的下载是并行的，不需要 DOM 处理到`<script>`节点。因此，`<script>`的位置不影响首屏显示的【开始】时间。
  
  2. 浏览器解析 HTML 是自上而下的线性过程，`<script>` 作为 HTML 的一部分同样遵循这个原则。因此，`<script>` 会延迟 `DomContentLoad`，阻塞其之后的首屏内容，从而影响首屏显示的完成时间。

### 解释 JavaScript 中的作用域与变量声明提升？

  * JavaScript 作用域
     - 在 Java、C 等语言中，作用域为 for 语句、if 语句或 {} 内的一块区域，称为作用域；而在 JavaScript 中，作用域为 function () {} 内的区域，称为函数作用域

  * JavaScript 变量声明提升
    - 在JavaScript中，函数声明与变量声明经常被 JavaScript 引擎隐式地提升到当前作用域的顶部
    - 声明语句中的赋值部分并不会被提升，只有名称被提升
    - 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
    - 如果函数有多个同名参数，那么最后一个参数（即使没有定义）会覆盖前面的同名参数

### 介绍 JavaScript 的原型（链）及其特点

  * 原型
     - JavaScript 的对象中都包含了一个 [[Prototype]] 内部属性，这个属性所对应的就是该对象的原型。[[Prototype]] 作为对象的内部属性，不能直接访问。为了方便查看对象的原型，Firefox 和 Chrome 提供了一个非标准对象原型访问器 `__proto__`。ECMA 引入了标准对象原型访问器 Object.getPrototype(object)。

	 - 在 JavaScript 中，每个函数都有一个 prototype 属性（普通对象没有 prototype 属性）。当一个函数被用作构造函数来创建实例时，prototype 被赋值给实例对象的 `__proto__` 属性。也就是说，实例对象的原型引用的是函数的 prototype 属性。

  * 原型链
     - 当查找一个对象的属性时，如果对象本身是否存在该属性，JavaScript 就通过 `__proto__` 继续向上查找，直到找到为止。如果到查找到达的顶部（Object.prototype）仍然没有找到指定的属性，就返回 undefined。`__proto__` 形成的链条即为“原型链”

  * 原型特点
    - JavaScript 对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变


### JavaScript 有几种类型的值？有什么区别？

  * JavaScript 的数据类型
   - 原始（基本）数据类型（Undefined，Null，Boolean，Number、String）
   - 引用（复杂）数据类型（对象、数组和函数）

 * 两种类型的区别：内存中存储位置和方式不同
   	- 原始数据类型存储在栈(stack)中，占据空间大小固定
   	- 原始类型变量存的是值，在赋值的时候是值传递
   	- 引用数据类型存储在堆(heap)中，占据空间大小不固定。在栈中保存指针，指向在堆中的起始地址
   	- 引用数据类型在赋值的时候只拷贝地址，不拷贝值
   	
### 判断一个变量是否是数组方法

`var a = [];` 

1. `a instanceof Array; `
2. `a.constructor === Array; `
3. `Array.prototype.isPrototypeOf(a); `
4. `Object.getPrototypeOf(a) === Array.prototype; `
5. `Object.prototype.toString.apply(a) === '[object Array]'; `
6. `Array.isArray([]);`

### JavaScript 创建对象的几种方式？

1. 工厂方式（new 内置 Object 对象生成）

	```javascript
	var Dog = new Object();
	Dog.name = "旺财";
	Dog.age = 3;
	Dog.work = function(){
		alert("我是" + Dog.name + ",汪汪汪...");
	}
	Dog.work();
	```

2. 对象字面量方式（通过 JSON 字面量生成）
	
	```javascript
	var Person = {
		firstname: "Mark",
		lastname: "Yun",
		age: 25,
		introduce: function(){
			alert('I am ' + Person.firstname);
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
		this.introduce = function(){
		   alert('I am ' + this.name + 'I like ' + this.hobby);
		}
	}
	var maidou = new Pet("麦兜", 25, "coding");
	maidou.eat();
	```
      
4. 原型方式（在 prototype 上添加属性和方法）

	```javascript
	function Dog(){}
	Dog.prototype.name = 'WangCai';
	Dog.prototype.introduce = function(){
		alert('I am ' + this.name);
	}
	var wangcai = new Dog();
	wangcai.introduce();
	```

5. 混合方式（构造函数方式[this] + 原型方式[prototype]）
	
	```javascript
	function Mobile(name, price){
		this.name = name;
		this.price = price;
	}
	Mobile.prototype.sell = function(){
		alert(this.name + ",Price: $" + this.price);
	}
	var iPhoneX = new Mobile("iPhoneX", 999);
	iPhoneX.sell();
	```
     
### JavaScript 如何实现一个类，怎么实例化？

1. 构造函数法（this + prototype） 
 - 用 new 关键字生成实例对象
 - 缺点：用到了 this 和 prototype，编写复杂，可读性差

	```javascript
	function Mobile(name, price){
		this.name = name;
		this.price = price;
	}
	Mobile.prototype.sell = function(){
		alert(this.name + ",Price: $" + this.price);
	}
	var iPhoneX = new Mobile("iPhoneX", 999);
	iPhoneX.sell();
	```

2. Object.create 法 
 - 用 Object.create() 生成实例对象
 - 缺点：不能实现私有属性和私有方法，实例对象之间也不能共享数据

	```javascript
	var Person = {
		firstname: "Mark",
		lastname: "Yun",
		age: 25,
		introduce: function(){
			alert('I am ' + Person.firstname);
		}
	};
	    
	var person = Object.create(Person);
	person.introduce();
	
	// Object.create 要求 IE9+，低版本浏览器需要自行部署：
	if (!Object.create) {
		Object.create = function (o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}
	```

3. 极简主义法（消除 this 和 prototype） 
 - 调用 createNew() 得到实例对象
 - 优点：容易理解，结构清晰优雅，符合传统的"面向对象编程"的构造

	```javascript
	var Cat = {
		// 共享数据 -- 定义在类对象内，createNew() 外
		age: 3,
		
		createNew: function () {
			var cat = {};
			
			// 继承 Animal 类
			// var cat = Animal.createNew();
			
			// 私有属性 -- 定义在 createNew() 内，输出对象外
			var sound = "喵喵喵"; 
			
			cat.name = "小咪";
			cat.makeSound = function () {
				// 暴露私有属性
				alert(sound);
			};
			cat.changeAge = function (num) {
				// 修改共享数据
				Cat.age = num;
			};
			
			// 输出对象
			return cat;
		}
	};
	
	var cat = Cat.createNew();
	cat.makeSound();
	```

4. ES6 语法糖 class 
 - 用 new 关键字 生成实例对象

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

### Javascript 如何实现继承？

1. 构造函数绑定：使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上

	```javascript
	function Cat(name, color) {
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
		
		// uber 是一个德语词，意思是"向上"、"上一层"
		// uber 属性直接指向父对象的prototype属性
		// 这等于在子对象上打开一条通道，可以直接调用父对象的方法
		// 这一行放在这里，只是为了实现继承的完备性，纯属备用性质
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
			// 调用父类的 constructor(x, y)
			super(x, y);
			this.color = color;
		}
		
		toString() {
			// 调用父类的 toString()
			return this.color + ' ' + super.toString();		}
	}
	```
    
### Javascript 作用域链?

  * 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
  * 如果当前作用域没有找到属性或方法，会向上层作用域查找，直至全局函数，这种形式就是作用域链。

### 谈谈 this 对象的理解

  > this 总是指向函数的直接调用者，this 指向在调用时决定，而非声明时决定

   - 在普通函数中，this 指向它的直接调用者，如果找不到直接调用者，则指向 window
   - 在严格模式下（ES5），函数没有直接调用者时，内部 this 是 undefined
   - 使用 call, apply, bind 绑定的 this 指向的是绑定的对象（第一个参数）
   - 在 ES6 箭头函数中，this 的指向是固定的，始终指向定义时所在的对象
    - 因为箭头函数根本没有自己的 this，导致其内部的 this 就是外层代码块的 this
   - 在 ES7 中，提出了函数绑定运算符 :: 用来取代 call、apply、bind 调用
    - `o::fn` 表示将函数 fn 的 this 绑定到对象 o 上
    - `::fn` 表示将函数 fn 的 this 绑定到当前所在对象上
   - 标准浏览器 el.addEventListener() 中的 this 指向触发事件的 Element 节点
   - IE9 之前版本浏览器 el.attachEvent() 中的 this 总是指向全局对象 Window

### 使用箭头函数适用场景和需要注意的地方？

* 箭头函数适合于无复杂逻辑或者无副作用的纯函数场景下，例如：用在 map、reduce、filter 的回调函数定义中
* 箭头函数的亮点是简洁，但在有多层函数嵌套的情况下，箭头函数反而影响了函数的作用范围的识别度，这种情况不建议使用箭头函数
* 箭头函数要实现类似纯函数的效果，必须剔除外部状态。所以箭头函数不具备普通函数里常见的 this、arguments 等，当然也就不能用 call()、apply()、bind() 去改变 this 的指向
* 箭头函数不适合定义对象的方法（对象字面量方法、对象原型方法、构造器方法），因为箭头函数没有自己的 this，其内部的 this 指向的是外层作用域的 this

	```javascript
	const json = {
		bar: 1,
		fn: () => console.log(this.bar)
	};
	
	json.fn();  //-> undefined
	```
	- 以上箭头函数中的 this 并不是指向 json 这个对象，而是再往上到达全局作用域
	
	```javascript
	function Foo() {
		this.bar = 1;
	}
	Foo.prototype.fn = () => console.log(this.foo);
	
	const foo = new Foo();
	foo.fn();  //-> undefined
	```
	- 以上箭头函数中的 this 并不是指向 Foo，而是根据变量查找规则，回溯到了全局作用域
	
	```javascript
	const Message = (text) => {  
		this.text = text;
	};
	var helloMessage = new Message('Hello World!');  
	console.log(helloMessage.text); //-> Message is not a constructor
	```
	- 以上箭头函数中的 this 并不是指向预期的 button 元素，而是 window

* 箭头函数不适合定义结合动态上下文的回调函数（事件绑定函数），因为箭头函数在声明的时候会绑定静态上下文

	```javascript
	const button = document.querySelector('#button-load-more');
	button.addEventListener('click', () => {  
		this.textContent = 'Loading...';
	});
	```
	- 以上代码中，箭头函数中的 this 并不是指向预期的 button 元素，而是 window

### eval 的用途？

  * eval 字符串参数解析成 JavaScript 代码运行，并返回运行结果
  * 应该避免使用 eval，不安全，非常耗性能（先解析成 JavaScript 语句，再执行）
  * 由 JSON 字符串转换为 JSON 对象的时候可以用 `eval('('+ str +')');` 实现

### null 与 undefined 的区别？

  * null 表示"空对象"（不应该有值），转为数值时为 0
    - 典型用法：
     - 作为函数的参数，表示该参数是“空对象”
     - 作为对象原型链的终点 `Object.prototype.__proto__`

  * undefined 表示"缺少值"（应该有值，但未定义），转为数值时为 NaN
    - 典型用法：
     - 变量被声明了，但没有赋值时，就等于 undefined
     - 调用函数时，应该提供的参数没有提供，该参数等于 undefined
     - 对象没有赋值的属性，该属性的值为 undefined
     - 函数没有返回值时，默认返回 undefined


### 介绍 DOM 的发展

  * DOM：文档对象模型（Document Object Model），定义了访问 HTML 和 XML 文档的标准，与编程语言及平台无关
  
  * DOM0：提供了查询和操作 Web 文档内容的 API。未形成标准，实现混乱。如：`document.forms['login']`
  
  * DOM1：W3C 提出标准化的 DOM，简化了对文档中任意部分的访问和操作。如：JavaScript中的 Document 对象
  
  * DOM2：在原来 DOM 基础上扩充了鼠标事件等细分模块，增加了对 CSS 的支持。如：`getComputedStyle(elem, pseudo)`
  
  * DOM3：增加了 XPath 模块和加载与保存（Load and Save）模块。如：XPathEvaluator


### 介绍 DOM0，DOM2，DOM3 事件处理方式区别

* DOM0 级事件处理方式：
	
	```javascript
	btn.onclick = func;
	btn.onclick = null;
	```
  
* DOM2 级事件处理方式：
	
	```javascript
	btn.addEventListener('click', func, false);
	btn.removeEventListener('click', func, false);
	btn.attachEvent("onclick", func);
	btn.detachEvent("onclick", func);
	```
  
* DOM3 级事件处理方式
	
	```javascript
	eventUtil.addListener(input, "textInput", func);
	// eventUtil 是自定义对象，textInput 是 DOM3 级事件
	```

### 什么是 Window 对象和 Document 对象?

* Window 对象表示当前浏览器的窗口，是 JavaScript 的顶级对象
	- JavaScript 中创建的所有对象、函数、变量都是 Window 对象的成员
	- Window 对象的方法和属性在全局范围内有效

* Document 对象是载入浏览器的 HTML 文档，包括根节点和所有其他节点（元素节点，文本节点，属性节点，注释节点）。
	- Document 对象使我们可以通过脚本对 HTML 页面中的所有元素进行访问器
	- Document 对象是 Window 对象的一部分，可通过 window.document 进行访问

### 描述 DOM 事件捕获的具体流程
* window -> document -> html(document.documentElement) -> dody(document.body) -> ... -> 目标对象

### 介绍事件传播的阶段、事件执行顺序及执行次数？

* 事件事件传播的三个阶段（以 W3C 对 DOM2.0 定义的标准事件为例）
	- 第一阶段：从 window 对象传导到目标节点，称为“捕获阶段”（capture phase）
	- 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）
	- 第三阶段：从目标节点传导回 window 对象，称为“冒泡阶段”（bubbling phase）

* 事件执行顺序

	```
	-> 父元素捕获 
	-> 目标元素（事件 1 -> 事件 2 -> 事件 n)
	-> 子元素捕获 
	-> 子元素冒泡 
	-> 父元素冒泡
	
	// 子元素事件执行前提：
	// 事件确实“落”到子元素布局区域上，而不是简单的具有嵌套关系
	```
		       
* 事件执行次数
  * DOM 2.0 级事件（addEventListener）执行次等于元素上绑定事件的个数
     - 前提：事件被确实触发
     - 注意：事件绑定几次就算几个事件，即使类型和功能完全一样也不会“覆盖”

### 在一个 DOM 上绑定两个点击事件：一个用捕获，一个用冒泡。触发会执行几次，先执行冒泡还是捕获？

  * 该 DOM 上的事件如果被触发，会执行两次（执行次数等于绑定次数）
  * 如果该 DOM 是目标元素，则按事件绑定顺序执行，不区分冒泡/捕获
  * 如果该 DOM 是处于事件流中的非目标元素，则先执行捕获，后执行冒泡

### 什么是事件委托（代理），有什么优缺点？

  * 由于事件会在冒泡阶段向上传播到父节点，因此可以把要在子节点监听的事件函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做“事件代理”（delegation）
  
  * 优点：
    - 可以减少事件注册，节省大量内存占用
    - 可以将事件应用于动态添加的子元素上

  * 缺点：
    使用不当会造成事件在不应该触发时触发
    
  * 示例：

	```javascript  
	ulEl.addEventListener('click', function(e){
	    var target = event.target || event.srcElement;
	    if(!!target && target.nodeName.toUpperCase() === "LI"){
	        console.log(target.innerHTML);
	    }
	}, false);
	```

### 列举 IE 与其他浏览器不一样的特性？
* 当前样式：IE 支持 el.currentStyle；FIrefox 使用 window.getComputedStyle(el, null);
* 读写文本：IE 使用 el.innerText；Firefox 使用 el.textContent
* 设置透明：IE 使用 filter:alpha(opacity=60)；Firefox 使用 -moz-opacity: 0.6
* 绑定事件：IE 使用 attachEvent；火狐使用 addEventListener
* 鼠标位置：IE 使用 event.clientX；火狐使用 event.pageX
* 目标元素：IE 使用 event.srcElement；Firefox 使用 event.target
 
### IE 与 火狐的事件机制有什么区别？

* IE 只支持事件冒泡，不支持事件捕获；火狐同时支持件冒泡和事件捕获

### IE 的事件处理和 W3C 的事件处理有哪些区别？

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

### W3C事件的 target 与 currentTarget 的区别？

  * target 只会出现在事件流的目标阶段
  * currentTarget 可能出现在事件流的任何阶段
  * 当事件流处在目标阶段时，二者的指向相同
  * 当事件流处于捕获或冒泡阶段时：currentTarget 指向当前事件活动的对象(一般为父级)

### 如何派发事件(如何进行事件广播)？

* W3C: 使用 dispatchEvent 方法
* IE: 使用 fireEvent 方法

	```javascript
	var fireEvent = function(element, event){
		if (document.createEventObject){
			var mockEvent = document.createEventObject();
			return element.fireEvent('on' + event, mockEvent)
		}
		else {
			var mockEvent = document.createEvent('HTMLEvents');
			mockEvent.initEvent(event, true, true);
			return !element.dispatchEvent(mockEvent);
		}
	}
	```
     
### 什么是函数节流？介绍一下应用场景和原理？

* 函数节流(throttle)是指阻止一个函数在很短时间间隔内连续调用。
只有当上一次函数执行后达到规定的时间间隔，才能进行下一次调用。
但要保证一个累计最小调用间隔（否则拖拽类的节流都将无连续效果）

* 函数节流用于 onresize, onscroll 等短时间内会多次触发的事件

* 函数节流的原理
	- 使用定时器做时间节流。当触发一个事件时，先用 setTimout 让这个事件延迟一小段时间再执行。如果在这个时间间隔内又触发了事件，就 clearTimeout 原来的定时器，再 setTimeout 一个新的定时器重复以上流程。

* 函数节流简单实现：

	```javascript
	function throttle(fn, delay, deadline) {
	    var timer = null;
	    var begin = new Date();
	
	    return function () {
	        var context = this;
	        var args = arguments;
	        var current = new Date();
	        
	        clearTimeout(timer);
	
	        if (current - begin >= deadline) {
	            fn.apply(context, args);
	            begin = current;
	        }
	        else {
	            timer = setTimeout(function () {
	                fn.apply(context, args);
	            }, delay);
	        }
	    };
	}
	
	// 调用
	window.onresize = throttle(resizehandler, 100, 500);
	```
     
### 区分什么是“客户区坐标”、“页面坐标”、“屏幕坐标”？

  * 客户区坐标：鼠标指针在可视区中的水平坐标(clientX)和垂直坐标(clientY)
  * 页面坐标：鼠标指针在页面布局中的水平坐标(pageX)和垂直坐标(pageY)
  * 屏幕坐标：设备物理屏幕的水平坐标(screenX)和垂直坐标(screenY)

### 如何获得一个 DOM 元素的绝对位置？

  * `elem.offsetLeft`：返回元素相对于其定位父级左侧的距离
  * `elem.offsetTop`：返回元素相对于其定位父级顶部的距离
  * `elem.getBoundingClientRect()`：返回一个 DOMRect 对象，包含一组描述边框的只读属性，单位像素

### 分析 ['1', '2', '3'].map(parseInt) 答案是多少？

  答案: [1, NaN, NaN]

  * `parseInt(string, radix)` 接受两个参数，第 2 个参数 radix 表示进制。radix 介于 2 ~ 36 之间，小于 2 或者大于 36 时，则 parseInt() 将返回 NaN。而省略 radix 参数或值为 0，则数字将以十进制解析。
  
  * map 每次为 parseInt 传 3 个参数(v, k, array)，其中 k 为数组索引，array 被忽略：

  	```javascript
	['1', '2', '3'].map((v, k) => parseInt(v, k));
	```
	
    因此，map 遍历 ['1', '2', '3']， parseInt 接收参数如下：

	```javascript
	parseInt('1', 0);  // 1
	parseInt('2', 1);  // NaN
	parseInt('3', 2);  // NaN
	```

### 什么是闭包，闭包的应用及缺点

  * 在 Javascript 中，函数内部可以可以直接读取全局变量，在函数外部无法读取函数内的局部变量。有时候需要得到一个函数内的局部变量，可以在函数内定义一个子函数，根据"链式作用域"，子函数可读取所在函数的局部变量，再将子函数返回到函数外部。这样，在函数外部就获取到了函数内的局部变量。这个定义在函数内的子函数，在函数外被引用时就形成了“闭包”（closure）。所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
  
  * 闭包的应用
	 1. 用于保护函数内部私有变量不被外部污染：如迭代器、生成器
	 2. 在内存中维持变量：如缓存数据、柯里化

  * 闭包的缺点
  	 常驻内存，会增大内存使用量，使用不当很容易造成内存泄露

### JavaScript 代码中的 "use strict" 是什么？ 使用后区别有哪些？

  * "use strict" 是 ES5 引入的运行模式，要求 JS 在更严格的条件下运行
    目的是消除 JS 语法的一些不合理、不严谨之处，保证代码更加安全、高效的运行

  * "严格模式"对 Javascript 的语法和行为，都做了一些改变：
  * 变量都必须先用 var 命令声明
  * 函数必须声明在顶层
  * 禁止使用 with 语句
  * 禁止 this 关键字指向全局对象
  * arguments.caller, arguments.callee 被禁用
  * delete 禁止删除变量(会报错)，只能删除对象属性(configurable=true，否则会报错)
  * 试图修改对象的只读属性、在不可扩展的对象上添加属性，会报错
  * 对象不能有重名的属性，函数不能有重名的参数
  * 禁止八进制字面量，如 010 表示 八进制的 8
  * 为 eval 单独创建作用域，eval 不再能生成全局变量
  * 不允许对 arguments 赋值
  * eval, arguments 变为关键字，不可作为变量名、函数名等
  * 新增保留字：implements、interface、let、package、private、protected、public、static、yield

### 如何判断一个对象是否属于某个类？

* 使用 instanceof 运算符：`foo instanceof Foo;`

### new 操作符具体干了什么工作?
* 当使用 new 操作符调用构造函数，函数实际会经历如下步骤：
	- 创建一个空对象
	- 设置原型链，继承该函数的原型
	- 把函数中上下文 this 指向该对象
	- 并执行函数体，通过 this 为新对象添加属性或方法
	- 最后隐式的返回 this

### 用原生 JavaScript 的实现过什么功能吗？

  * 封装选择器、调用第三方API、设置和获取样式

### Javascript 中有一个函数，避免对象属性查找时去原型链上查找，这个函数是什么？

  * `hasOwnProperty` 函数判断一个对象自身是否具有指定属性，不会去原型链上查找
  * 用法：`var bool = obj.hasOwnProperty(prop);`

### 介绍对 JSON 的了解？

  * JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式

  * JSON 语法规则：
   1. 数据用键值对表示，逗号分隔
   2. 花括号保存对象，方括号保存数组

  * JSON 字符串转换为 JSON 对象:
  
   ```javascript
   var obj = eval('('+ str +')');
   var obj = str.parseJSON();
   var obj = JSON.parse(str);
   ```

  * JSON对象转换为JSON字符串：

	```javascript
	var str = obj.toJSONString();
	var str = JSON.stringify(obj);
	```

### 解释一下这段代码的意思吗？

 ```javascript
  [].forEach.call($$("*"), function (el) {
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

### 什么是 Ajax? 如何创建一个Ajax？

  * AJAX(Asynchronous Javascript And XML) = 异步 JavaScript + XML 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新

  * 创建 ajax 步骤：
	
	1. 创建 XMLHttpRequest 对象
	2. 创建一个新的 HTTP 请求，并指定该 HTTP 请求的类型、验证信息
	3. 设置响应 HTTP 请求状态变化的回调函数
	4. 发送 HTTP 请求
	5. 获取异步调用返回的数据
	6. 使用 JavaScript 和 DOM 实现局部刷新

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

### 同步和异步的区别？

  * 同步：同一时刻只能执行一项任务。如果有多个任务，必须按先后顺序排队执行。因此，任务执行是阻塞的

  * 异步：同一时刻能够执行多项任务。后面任务不必等前面任务结束就执行。因此，任务执行是无序非阻塞的

### JavaScript 实现异步编程的方法？

  * 回调函数
  * 事件监听
  * 发布/订阅
  * Promises 对象
  * Async 函数[ES7]

### 什么是 Cookie 隔离？（请求资源的时候不携带cookie怎么做？）

  * 如果静态文件放在主域名下，请求静态文件时携带 cookie 数据，并提交到服务器，非常浪费流量和响应时间
  * cookie 是有域的限制，不能跨域提交请求。因此，使用非主域名时，请求头中就不会带有 cookie 数据
  * Cookie 隔离可以减小请求头的体积，使 web 服务器省去对 cookie 的处理分析环节，提高了对请求的响应速度。

### 如何解决跨域问题?

  * document.domain + iframe：要求主域名相同 //只能跨子域
  * JSONP(JSON with Padding)：response callback(data) //只支持 GET 请求
  * 跨域资源共享 CORS(XHR2)：Access-Control-Allow //兼容性 IE10+
  * 跨文档消息传输(HTML5)：postMessage + onmessage  //兼容性 IE8+
  * WebSocket(HTML5)：new WebSocket(url) + onmessage //兼容性 IE10+
  * 服务器端设置代理请求：服务器端不受同源策略限制

### HTTP/2 与 HTTP/1.x 的关键区别

  * 二进制协议代替文本协议，更加简洁高效
  * 针对每个域只使用一个多路复用的连接
  * 压缩头部信息减小开销
  * 允许服务器主动推送应答到客户端的缓存中

### 页面编码和被请求的资源编码如果不一致如何处理？

  * 后端响应头设置 charset
  * 前端页面`<meta>`设置 charset

### 把`<script>`放在`</body>`之前和之后有什么区别？浏览器会如何解析？

  * 按照HTML标准，在`</body>`结束后出现`<script>`或任何元素的开始标签，都是解析错误。
    虽然不符合HTML标准，但浏览器会自动容错，使实际效果与写在`</body>`之前没有区别

  * 浏览器的容错机制会忽略`<script>`之前的`</body>`，视作`<script>`仍在 body 体内。
    省略`</body>`和`</html>`闭合标签符合 HTML 标准，服务器可以利用这一标准尽可能少输出内容

### “异步加载”和“延迟加载”的区别
* 异步加载（async loading）
	- 异步加载又叫非阻塞加载，指浏览器下载执行 js 不会阻塞页面渲染，二者并行执行

* 延迟加载（lazy loading）
	- 延迟加载指页面初始化时，不加载业务暂时不需要的 js，在需要时或稍后再进行异步加载

### 异步加载 JS 的解决方案有哪些？

1. Script DOM Element  动态创建 `<script>` 元素

	```javascript
	(function() {
		function lazyload() {
		    var elem = document.createElement("script");
		    elem.type = "text/javascript";
		    elem.async = true;
		    elem.src = "script.js"; 
		    document.body.appendChild(elem);
		}
	
		if (window.addEventListener) {
		    window.addEventListener("load", lazyload, false);
		} 
		else if (window.attachEvent) {
		    window.attachEvent("onload", lazyload);
		} 
		else {
		    window.onload = lazyload;
		}
	})();
	```

2. XHR Injection / XHR Eval  通过 XMLHttpRequest 获取 js 代码，然后在浏览器执行

	```
	var xhrObj = getXHRObject(); 
	xhrObj.onreadystatechange =  
	function() {  
		if (xhrObj.readyState != 4) {
			return;
		} 
		eval(xhrObj.responseText); 
	}; 
	xhrObj.open('GET', 'A.js', true); 
	xhrObj.send('');
	```

3. 设置 `script` 的 `defer` 属性或 `async` 属性

	```
	<script src="foo.js" async ></script>
	```
	```
	<script src="bar.js" defer ></script>
	```


### 介绍 `<script>` 的 `defer` 和 `async` 属性的共同点和区别

* async 和 defer 共同点：
	- async 和 defer 属性可以异步并行下载脚本（相对 HTML 解析），不会阻塞 DOM 构建和页面渲染
	- async 和 defer 属性只对外部脚本起作用（没有 src 属性，它们会被忽略）

* defer 和 async 区别：
	- 开始执行脚本的时机的不同
		- defer 比 async 要先引入浏览器。它的执行在 HTML 解析完成之后才开始，处在 DOMContentLoaded 事件之前。所以，defer 保证脚本会按照它在 HTML 中出现的顺序执行，并且不会阻塞解析
		- async 脚本在它们完成下载完成后的第一时间执行，它处在 window 的 load 事件之前，但不一定在 DOMContentLoaded 之前。这意味着设置了 async 的脚本很有可能不会按照它们在 HTML 中出现的顺序执行，并且可能会中断 DOM 的构建
		- async 应用场景有限，因为它完全不考虑依赖顺序，不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适，比如“站长统计”脚本


### 前端性能优化最佳实践

* 优化的思路：4W 原则（Why 为什么要做？When 什么时候做？Where 哪方面需要做？What 怎么做？）

- 为什么要做性能优化（优化的目）？
	1. 加快页面展示和运行速度
	2. 节约服务器带宽流量
	3. 减少服务器压力

- 什么时候做性能优化？
	- 基本原则：避免过早优化
		- 首先，保证基本功能完成，再考虑优化
		- 其次，在没有找到性能瓶颈之前，不要优化

- 哪方面需要做性能优化？
	- 首先要明确，性能与哪些方面有关，才能对症下药
	- 一个页面从发起请求到展示到用户，大概错略流程包括：
		- DNS 查询
		- 发送请求
		- 等待服务器响应
		- 下载服务器响应内容
		- 解析 HTML、CSS、JS
		- 渲染 HTML、CSS、JS 和图片
		- 响应用户的点击事件
	- 前端可以使用性能评级工具（PageSpeed 或 YSlow）进行定位
	
- 怎么做性能优化？
	- 根据各个环节可能出现的性能问题，进行针对性优化
		- 针对 DNS 查询：
			- 减少网站所用的域名个数（现代浏览器基本都具备并行下载能），减少 DNS 查询时间
			- 建议一个网站使用至少 2 个域，但不多于 4 个域来提供资源
		- 针对发送请求
			- localStorage（本地存储）
			- 静态资源打包，开启 Gzip 压缩（节省响应流量）
			- Cookie 隔离（节省请求流量）
			- 使用 CDN 加速（访问最近服务器）
		- 针对等待服务器响应
			- 合理设置 HTTP 缓存：Etag 与 Cache-control
			- 启用 HTTP/2（多路复用，并行加载）
			- 优化数据库查询
			- 部署负载均衡
		- 针对下载服务器响应内容
			- 用 CSS3 实现图片，对小图标进行 base64（降低请求数）
			- 模块延迟(defer)加载/异步(async)加载
		- 针对解析 HTML、CSS、JS
			- 去掉无用的 HTML、CSS 和 JS
			- 针对首屏时间做优化：脚本后位置、图片压缩、懒加载
		- 针对渲染 HTML、CSS、JS 和图片
			- 最小化重绘(repaint)和回流(reflow)：批量修改元素样式、避免 table 布局等
		- 针对响应用户的点击事件
			- 尽量不在前端做复杂的运算

### 什么是 Promise？

  * Promise 是异步编程的一种解决方案，比传统的解决方案（回调函数、事件）更合理和更强大

  * 所谓 Promise，简单说就是一个容器，保存着某个未来执行结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息

  * Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因

  * Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）

  * Promise 缺点
   - 首先，无法取消Promise，一旦新建就会立即执行，无法中途取消
   - 其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部
   - 第三，当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）


### JavaScript 调用函数有哪几种方式？

  * 普通函数调用模式          `foo(arg1, arg2);`
  * 对象方法调用模式          `Foo.foo(arg1, arg2);`
  * 构造器调用模式        	 `(new Foo())(arg1, arg2);`
  * call/applay 调用模式     `Foo.foo.call(context, arg1, arg2);`
  * bind 调用模式            `Foo.foo.bind(context)(arg1, arg2);`

### fn.call() 和 fn.apply() 的区别？

  接收的参数类型和数量不同：
  
  - `fn.apply(that, [arg1, arg2, argn])`
  - `fn.call(that, arg1, arg2, argn)`

### fn.bind() 与 fn.call() 有什么不同？

  * 应用的场景不同：
    - bind: 用当前对象绑定函数内部的 this 指向，返回新的函数
    - call: 使当前对象借用执行其他对象的函数，返回执行结果

  * 下面执行结果一致：

	```javascript
	var add = (a, b) => a + b;
	add.call(null, 1, 2);
	
	add.bind(null, 1, 2)();
	add.bind(null, 1)(2);
	add.bind(null)(1, 2);
	```

### 简单实现 Function.bind 函数？
		
```javascript
if (!Function.prototype.bind) {
	Function.prototype.bind = function (context) {
		var fn = this, args = arguments;
		return function() {
			return fn.apply(context, Array.prototype.slice.call(args, 1));
		}
	}
}
	
// 只支持 bind 阶段的默认参数：
fn.bind(context, arg1, arg2)();
	
// 不支持以下调用阶段传入的参数：
fn.bind(context)(arg1, arg2);
```
  
### 列举一下 JavaScript 数组和对象有哪些原生方法？

* 数组：

	```javascript
	arr.concat(arr1, arr2, arrn);
	arr.join(",");
	arr.sort(fn);
	arr.pop();
	arr.push(e1, e2, en);
	arr.shift();
	unshift(e1, e2, en);
	arr.reverse();
	arr.slice(start, end);                  // 获取数组指定范围的元素
	arr.splice(index, count, e1, e2, en);   // 修改数组指定范围的元素
	arr.indexOf(el);
	arr.includes(el);   // ES6
	```

* 对象：

	```javascript
	object.hasOwnProperty(prop);            // 对象自身中是否存在指定属性
	Object.getPrototype(obj);				   // 获取对象原型
	object.propertyIsEnumerable(prop);      // 属性能否用 for-in 循环枚举
	object.valueOf();                       // 对象的原始值
	object.toString();                      // 对象字符串表示
	object.toLocaleString();                // 对象的字符串表示(与地区和环境对应)
	Class.prototype.isPropertyOf(object);   // 是否是方法调用者的原型对象
	```

### Array.splice() 与 Array.splice() 的区别？

  * slice -- “读取”数组指定的元素，不会对原数组进行修改
    - 语法：arr.slice(start, end)
     * start 指定选取开始位置（含）
     * end 指定选取结束位置（不含）

  * splice -- “操作”数组指定的元素，会修改原数组，返回被删除的元素
   - 语法：arr.splice(index, count, [insert Elements])
     * index 是操作的起始位置
     * count = 0 插入元素，count > 0 删除元素
     * [insert Elements] 向数组新插入的元素

  * 示例
  
	```javascript
	// Array.splice() -- 获取数组指定元素
	['A', 'B', 'C', 'D'].slice(1, 3);         // return ['B', 'C']
	
	// Array.splice() -- 插入、删除、替换 元素
	['A', 'B', 'C'].splice(2, 0, 'D');       // ['A', 'B', 'D', 'C'] // return null
	['A', 'B', 'C'].splice(1, 1);            // ['A', 'C']           // return ['B']
	['A', 'B', 'C'].splice(1, 2, 'X', 'Y');  // ['A', 'X', 'Y']      // return ['B', 'C']
	```

### JavaScript 对象生命周期的理解？

  * 当创建一个对象时，JavaScript 会自动为该对象分配适当的内存空间
  * 垃圾回收器定期扫描对象，并计算引用了该对象的其他对象的数量
  * 如果被引用数量为 0，或惟一引用是循环的，那么该对象的内存即可回收

### 哪些操作会造成内存泄漏？

  * 对象在不需要使用它时仍然存在，导致占用的内存不能使用或回收，叫做“内存泄露”

  * JavaScript 中会造成内存泄漏的操作：
    - 未使用 var 声明的全局变量
    - 闭包函数(Closures)
    - 循环引用(两个对象相互引用)
    - 控制台日志(console.log)
    - 移除存在绑定事件的 DOM 元素(IE)

## ECMAScript6 相关

### 谈一谈你了解 ECMAScript6 的新特性？

  * 块级作用区域              `let a = 1;`
  * 可定义常量                `const PI = 3.141592654;`
  * 变量解构赋值              `var [a, b, c] = [1, 2, 3];`
  * 字符串的扩展(模板字符串)   `var sum = `${a + b}`;`
  * 数组的扩展(转换数组类型)   `Array.from($('li'));`
  * 函数的扩展(扩展运算符)     `[1, 2].push(...[3, 4, 5]);`
  * 对象的扩展(同值相等算法)    `Object.is(NaN, NaN);`
  * 新增数据类型(Symbol)      `let uid = Symbol('uid');`
  * 新增数据结构(Set)         `let set = new Set([1, 2, 2, 3]);`
  * for...of 循环            `for(let val of arr){};`
  * Promise 对象             `var promise = new Promise(fn);`
  * Generator 函数           `function* foo(x){yield x; return x * x;}`
  * `引入 Class(类)`         `class Foo {}`
  * 引入模块体系              `export default fn;`
  * 引入 async 函数[ES7]     `const foo = async () => await alert(666);`

### Object.is() 与原来的比较操作符 ===、== 的区别？

  * == 相等运算符，比较时会自动进行数据类型转换
  * === 严格相等运算符，比较时不进行隐式类型转换
  * Object.is 同值相等算法，在 === 基础上对 0 和 NaN 特别处理

	```Javascript
	+0 === -0 //true
	NaN === NaN // false
	
	Object.is(+0, -0) // false
	Object.is(NaN, NaN) // true
	```

### 什么是 Babel ？

  * Babel 是一个 JS 编译器，自带一组 ES6 语法转化器，用于转化 JS 代码。
  这些转化器让开发者提前使用最新的 JS语法(ES6/ES7)，而不用等浏览器全部兼容。
  * Babel 默认只转换新的 JS 句法(syntax)，而不转换新的API。
  如：Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法(比如Object.assign)
  * 如果运行新的 API 和 新的方法，须使用 babel-polyfill，为当前环境提供一个垫片
  * Babel 6.0 开始，不再直接提供浏览器版本，而是要用构建工具构建出来

