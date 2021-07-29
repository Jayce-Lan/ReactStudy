import React, {Component, Fragment} from "react";
import ReactUlItem from "./ReactUlItem";

/* 生命周期的4个阶段：
        Initialization:初始化阶段
        Mounting: 挂载阶段
            Mounting阶段叫挂载阶段，伴随着整个虚拟DOM的生成
            对应的三个函数分别为：componentWillMount componentDidMount render
        Updation: 更新阶段
            Updation阶段,也就是组件发生改变的更新阶段，这是React生命周期中比较复杂的一部分，它有两个基本部分组成，一个是props属性改变，一个是state状态改变

        Unmounting: 销毁阶段
 */

class ReactLift extends Component{
    // 组件挂载，在页面的state 或者 props 发生变化时即会执行
    render() {
        console.log("render-------组件挂载中");
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        ref={(input) => this.input = input}
                        onChange={this.inputOnChange.bind(this)}
                    />
                    <button onClick={this.addListItem.bind(this)}>点击</button>
                </div>
                <div>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <ReactUlItem
                                    key={index}
                                    content={item}
                                    index={index}
                                    removeList={this.removeListItem.bind(this)}
                                />
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }

    // 以下两个生命周期（Mounting，挂载阶段）只在页面加载时执行一次
    componentWillMount() {
        console.log("componentWillMount---------组件即将要挂载到页面的时刻");
    }

    componentDidMount() {
        console.log("componentDidMount----------组件挂载完成时刻执行");
    }

    // shouldComponentUpdate函数会在组件更新之前，自动被执行
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate--------组件发生了改变");
        // return false; // 设置为 false 时，将阻止组件（页面）变化
        return true; // 要求必须返回一个布尔类型的值
    }



    // componentWillUpdate在组件更新之前，但shouldComponenUpdate之后被执行
    componentWillUpdate() {
        console.log("componentWillUpdate--------组件更新前，shouldComponenUpdate之后")
    }

    // componentDidUpdate在组件更新之后执行，它是组件更新的最后一个环节
    componentDidUpdate() {
        console.log("componentDidUpdate-----------------组件更新后");
    }

    inputOnChange() {
        this.setState({
            inputValue: this.input.value
        })
    }

    addListItem(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    removeListItem (index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default ReactLift;