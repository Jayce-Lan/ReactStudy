import React, {Component, Fragment} from "react";
import "./ReactUl.css";
import ReactUlItem from "./ReactUlItem";

class ReactUl extends Component{
    render() {
        return (
            // 使用 Fragment 可以使得标签无外层包裹，这样我们既可以在页面中规定这个组件父标签的样式而不影响布局
            <Fragment>
                {/* 使用 bind 设置指向 */}
                <div>
                    <label htmlFor="reactUl">加入服务：</label>
                    {/*<input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />*/}
                    {/* 使用ref绑定输入框元素 */}
                    <input
                        id="inp"
                        className="inp"
                        value={this.state.inputValue}
                        onChange={this.refInputChange.bind(this)}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>添加</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                /*<li key={index}>
                                    {item}
                                    <button onClick={this.removeList.bind(this, index)}>删除</button>
                                </li>*/
                                /* 引入组件 */
                                <ReactUlItem
                                    key={index}
                                    content={item}
                                    name={"Jack"}
                                    index={index}
                                    removeList={this.removeList.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    /**
     * js的构造函数，用于其他任何函数执行
     * @param props 父组件调用传值
     */
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '', // input 中的值
            list: ['测试数据1', '测试数据2'], // 用于渲染 li 的列表
        }
    }

    /**
     * 输入框输入数据
     * @param e
     */
    inputChange (e) {
        // console.log(e.target.value); // 获取数据
        // this.state.inputValue = e.target.value; // this指向会出现问题
        this.setState({
            inputValue: e.target.value
        });
    }

    /**
     * 使用 ref 绑定输入框元素
     */
    refInputChange () {
        this.setState({
            inputValue: this.input.value
        })
    }

    /**
     * 添加列表项目
     * @param e
     */
    addList (e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll("div").length); // 检测ul中存在多少个div
        })
    }

    /**
     * 删除列表
     * 值得注意的是，这里不能写成：
     *      this.state.list.splice(index, 1);
     *      this.setState({
     *          list: this.state.list
     *      })
     * 因为 React 禁止直接操作 state 会造成性能问题
     *
     * @param index 传入点击的数组下标
     */
    removeList (index) {
        // console.log(index)
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default ReactUl;