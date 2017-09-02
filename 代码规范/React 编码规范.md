# React/JSX 编码规范（Airbnb）

> 翻译整理自 *[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)*

## 目录

  1. [基本规范](#基本规范)
  1. [创建组件的三种方式](#创建组件的三种方式)
  1. [弃用 Mixins](#Mixins)
  1. [命名](#命名)
  1. [声明组件](#声明组件)
  1. [代码缩进](#代码缩进)
  1. [使用双引号](#使用双引号)
  1. [空格](#空格)
  1. [属性](#属性)
  1. [Refs](#refs)
  1. [括号](#括号)
  1. [标签](#t标签)
  1. [函数/方法](#函数/方法)
  1. [组件生命周期书写顺序](#组件生命周期书写顺序)
  1. [弃用 isMounted](#isMounted)

## 基本规范

  - 原则上每个文件只写一个组件, 多个[无状态组件](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)可以放在单个文件中. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - 推荐使用 JSX 语法编写 React 组件, 而不是 `React.createElement`
## 创建组件的三种方式
   Class vs React.createClass vs stateless  

  - 如果你的组件有内部状态或者是`refs`, 推荐使用 `class extends React.Component` 而不是 `React.createClass`.
  eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // bad
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // good
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    如果你的组件没有状态或是没有引用`refs`,  推荐使用普通函数（非箭头函数）而不是类:

    ```jsx
    // bad
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // bad (relying on function name inference is discouraged)
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // good
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## Mixins

  - [不要使用 mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

  > 因为 Mixins 会增加隐式依赖, 导致命名冲突, 并且会增加复杂度.大多数情况下, 可以更好的方法代替 Mixins, 如：组件化, 高阶组件, 工具组件等.

## 命名

  - **扩展名**: React 组件使用 `.jsx` 扩展名.
  - **文件名**: 文件名使用帕斯卡命名. 如, `ReservationCard.jsx`.
  - **引用命名**: React组件名使用帕斯卡命名, 实例使用骆驼式命名. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **组件命名**: 组件名与当前文件名一致. 如 `ReservationCard.jsx` 应该包含名为 `ReservationCard`的组件. 如果整个目录是一个组件, 使用 `index.js`作为入口文件, 然后直接使用 `index.js` 或者目录名作为组件的名称:

    ```jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```
  - **高阶组件命名**: 生成一个新的组件时, 其中的组件名 `displayName` 应该为高阶组件名和传入组件名的组合. 例如, 高阶组件 `withFoo()`, 当传入一个 `Bar` 组件的时候,  生成的组件名 `displayName` 应该为 `withFoo(Bar)`.

    > 因为一个组件的 `displayName` 可能在调试工具或错误信息中使用到. 清晰合理的命名, 能帮助我们更好的理解组件执行过程, 更好的 Debug.

    ```jsx
    // bad
    export default function withFoo(WrappedComponent) {
      return function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }
    }

    // good
    export default function withFoo(WrappedComponent) {
      function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }

      const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

      WithFoo.displayName = `withFoo(${wrappedComponentName})`;
      return WithFoo;
    }
    ```

  - **属性命名**: 避免使用 DOM 相关的属性来用命名自定义属性

  > 因为对于`style` 和 `className` 这样的属性名, 我们都会默认它们代表一些特殊的含义. 
  
    ```jsx
    // bad
    <MyComponent style="fancy" />

    // good
    <MyComponent variant="fancy" />
    ```

## 声明组件

  - 不要使用 `displayName` 来命名 React 组件, 而是使用引用来命名组件,  如 class 名称.

    ```jsx
    // bad
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // good
    export default class ReservationCard extends React.Component {
    }
    ```

## 代码缩进

  - 遵循以下的 JSX 语法缩进/格式.  eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good, 有多行属性的话, 新建一行关闭标签
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // 若能在一行中显示, 直接写成一行
    <Foo bar="bar" />

    // 子元素按照常规方式缩进
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
    ```

## 使用双引号

  - 对于 JSX 属性值总是使用双引号(`"`), 其他均使用单引号(`'`).  eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > 因为 HTML 属性也是用双引号, 因此 JSX 的属性也遵循此约定.

    ```jsx
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```

## 空格

  - 总是在自动关闭的标签前加一个空格, 正常情况下不需要换行.  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

    ```jsx
    // bad
    <Foo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Foo />
    ```

  - 不要在JSX `{}` 引用括号里两边加空格.  eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // bad
    <Foo bar={ baz } />

    // good
    <Foo bar={baz} />
    ```

## 属性

  - JSX 属性名使用骆驼式风格`camelCase`.

    ```jsx
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - 如果属性值为 `true`, 可以直接省略.  eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // bad
    <Foo hidden={true} />

    // good
    <Foo hidden />
    ```

  - `<img>` 标签总是添加 `alt` 属性. 如果图片以陈述方式显示, `alt` 可为空, 或者`<img>` 要包含`role="presentation"`.  eslint: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

    ```jsx
    // bad
    <img src="hello.jpg" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />

    // good
    <img src="hello.jpg" alt="" />

    // good
    <img src="hello.jpg" role="presentation" />
    ```

  - 不要在 `alt` 值里使用如 "image", "photo", or "picture" 包括图片含义这样的词,  中文同理.  eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > 因为屏幕助读器已经把 `img` 标签标注为图片了, 所以没有必要再在 `alt` 里重复说明.

    ```jsx
    // bad
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />
    ```

  - 使用有效正确的 aria `role`属性值 [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions).  eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // bad - not an ARIA role
    <div role="datepicker" />

    // bad - abstract ARIA role
    <div role="range" />

    // good
    <div role="button" />
    ```

  - 不要在标签上使用 `accessKey` 属性.  eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > 因为屏幕助读器在键盘快捷键与键盘命令时造成的不统一性会导致阅读性更加复杂.

  ```jsx
  // bad
  <div accessKey="h" />

  // good
  <div />
  ```
  - 避免使用数组的 index 来作为属性`key`的值, 推荐使用唯一ID. ([Index as a key is an anti pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

  - 对于所有非必填写属性, 总是手动去定义`defaultProps`属性.

  > 因为 propTypes 可以作为组件的文档说明, 而声明 defaultProps 使阅读代码的人不需要去假设默认值. 另外, 显式的声明默认属性可以让你的组件跳过属性类型的检查.

  ```jsx
  // bad
  function SFC({ foo, bar, children }) {
      return <div>{foo}{bar}{children}</div>;
  }
  
  SFC.propTypes = {
      foo: PropTypes.number.isRequired,
      bar: PropTypes.string,
      children: PropTypes.node,
  };

  // good
  function SFC({ foo, bar, children }) {
      return <div>{foo}{bar}{children}</div>;
  }
  SFC.propTypes = {
      foo: PropTypes.number.isRequired,
      bar: PropTypes.string,
      children: PropTypes.node,
  };
  SFC.defaultProps = {
      bar: '',
      children: null,
  };
  ```

## Refs

  - 总是使用回调函数方式定义 ref.  eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // bad
    <Foo
      ref="myRef"
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```


## 括号

  - 将多行 JSX 标签写在 `()`里.  eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

    ```jsx
    // bad
    render() {
      return <MyComponent className="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // good
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // good, 单行可以不需要
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## 标签

  - 对于没有子元素的标签, 总是自关闭标签.  eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // bad
    <Foo className="stuff"></Foo>

    // good
    <Foo className="stuff" />
    ```

  - 如果组件有多行的属性, 关闭标签时新建一行.  eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo
      bar="bar"
      baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## 函数/方法

  - 使用箭头函数来获取本地变量.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => doSomethingWith(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - 当在 `render()` 里使用事件处理方法时, 提前在构造函数里把 `this` 绑定上去.  eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > 因为在每次 `render` 过程中, 再调用 `bind` 都会新建一个新的函数, 浪费资源.

    ```jsx
    // bad
    class extends React.Component {
      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />;
      }
    }

    // good
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv} />;
      }
    }
    ```

  - 在React组件中, 不要给所谓的私有函数添加 `_` 前缀, 本质上它并不是私有的.
  > 因为`_` 下划线前缀在某些语言中通常被用来表示私有变量或者函数. 但是不像其他的一些语言, 在 JS 中没有原生支持所谓的私有变量, 所有的变量函数都是共有的. 了解更多详情请查看 Issue [#1024](https://github.com/airbnb/javascript/issues/1024), 和 [#490](https://github.com/airbnb/javascript/issues/490) .

    ```jsx
    // bad
    React.createClass({
      _onClickSubmit() {
        // do stuff
      },

      // other stuff
    });

    // good
    class extends React.Component {
      onClickSubmit() {
        // do stuff
      }

      // other stuff
    }
    ```

  - 在 `render` 方法中总是确保 `return` 返回值.  eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

    ```jsx
    // bad
    render() {
      (<div />);
    }

    // good
    render() {
      return (<div />);
    }
    ```

## 组件生命周期书写顺序

  - `class extends React.Component` 的生命周期函数:

  1. `static` 方法（可选）
  1. `constructor` 构造函数
  1. `getChildContext` 获取子元素内容
  1. `componentWillMount` 组件渲染前
  1. `componentDidMount` 组件渲染后
  1. `componentWillReceiveProps` 组件将接受新的数据
  1. `shouldComponentUpdate` 判断组件是否需要重新渲染
  1. `componentWillUpdate` 上面的方法返回 `true`时, 组件将重新渲染
  1. `componentDidUpdate` 组件渲染结束
  1. `componentWillUnmount` 组件将从DOM中清除, 做一些清理任务
  1. *事件绑定* 如 `onClickSubmit()` 或 `onChangeDescription()`
  1. *`render` 里的 getter 方法* 如 `getSelectReason()` 或 `getFooterContent()`
  1. *可选的 render 方法* 如 `renderNavigation()` 或 `renderProfilePicture()`
  1. `render` render() 方法

  - 如何定义 `propTypes`, `defaultProps`, `contextTypes` 等属性...

    ```jsx
    import React, { PropTypes } from 'react';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  - `React.createClass` 方式的生命周期函数（不推荐）与 ES6 class 方式稍有不同:  eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName` 设定组件名称
  1. `propTypes` 设置属性的类型
  1. `contextTypes` 设置上下文类型
  1. `childContextTypes` 设置子元素上下文类型
  1. `mixins` 添加一些 mixins
  1. `statics`
  1. `defaultProps` 设置默认的属性值
  1. `getDefaultProps` 获取默认属性值
  1. `getInitialState` 获取初始状态
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  1. *Optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

## isMounted

  - 不要再使用 `isMounted`.  eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > 因为`isMounted` [设计模式](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html) 在 ES6 class 中无法使用, 官方将在未来的版本里删除此方法.

**[⬆ 回到顶部](#目录)**
