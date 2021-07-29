import React, {Component, Fragment} from "react";

class ReactUl extends Component{
    render() {
        return (
            // 使用 Fragment 可以使得标签无外层包裹，这样我们既可以在页面中规定这个组件父标签的样式而不影响布局
            <Fragment>
                {/* 使用 bind 设置指向 */}
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{ item }</li>
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
        console.log(e.target.value); // 获取数据
        // this.state.inputValue = e.target.value; // this指向会出现问题
        this.setState({
            inputValue: e.target.value
        });
    }

    /**
     * 添加列表项目
     * @param e
     */
    addList (e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
}

export default ReactUl;