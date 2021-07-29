# React 学习

## 准备工作

> 使用 *React* 可以使用两种方式，一种是搭建脚手架，另一种是使用 CDN 导入



### 使用 *CDN* 引入 *React*

- 引入 *React* 的依赖
  - 在官网获取到 *CDN* 的地址：[CDN 链接 – React (reactjs.org)](https://zh-hans.reactjs.org/docs/cdn-links.html)
- 引入 *JSX* 的依赖
  - 在 *babeljs* 官网引入：[Babel · The compiler for next generation JavaScript (babeljs.io)](https://babeljs.io/setup#installation)
- 随后，需要在 `<script type="text/jsx"></script>` 标签中指明语法为 jsx 



#### jsx

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>组件&Props</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="welFunc"></div>
    <div id="welClazz"></div>
</body>
    <script type="text/jsx">
        /**
         * 定义组件最简单的方式是使用函数
         * @param props
         * @constructor
         */
        function WelcomeFunc(props) {
            return <h3>WelcomeFunc, {props.name}</h3>;
        }

        const welFunc = <WelcomeFunc name="Jack"/>

        ReactDOM.render(welFunc, document.getElementById("welFunc"));

        // 也可以使用 es6 的 class
        class WelcomeClazz extends React.Component {
            render() {
                return <h3>WelcomeClazz, {this.props.name}</h3>
            }
        }

        const welClazz = <WelcomeClazz name="Jayce"/>
        ReactDOM.render(welClazz, document.getElementById("welClazz"));
    </script>
</html>
```



#### createElement

在不使用 jsx 语法时， 我们可以使用 *createElement* 进行标签渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <style>
        .testClass1 {
            color: skyblue;
        }
    </style>
</head>
<body>
    <div id="app"></div>
    <div id="img-div"></div>
</body>
    <script>
        function getName(user) {
            return user.firstName + "." + user.lastName;
        }

        const user = {
            firstName: "Jack",
            lastName: "Long"
        }
		
        // createElement(标签名, 标签属性（数组）, 标签内容)
        const element = React.createElement("h1", {className: "testClass1"}, `Hello, ${getName(user)}`);
        const myImg = React.createElement("img", {src: "../img/哆啦A梦.jpeg"}, null);

        ReactDOM.render(element, document.getElementById("app"));
        ReactDOM.render(myImg, document.getElementById("img-div"));
    </script>
</html>
```



### 使用脚手架

#### 全局安装脚手架

```shell
npm install -g create-react-app
```

#### 使用脚手架创建项目

```shell
create-react-app demo01 # 创建项目
cd demo01 # 进入项目目录
npm start # 预览项目
```

