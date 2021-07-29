import React, {Component} from "react";
import PropTypes from 'prop-types';

class ReactUlItem extends Component{
    render() {
        return(
            <div onClick={this.hendleClick}>{this.props.name}-{this.props.content}</div>
        )
    }

    constructor(props) {
        super(props);
        this.hendleClick = this.hendleClick.bind(this)
    }

    hendleClick () {
        // console.log(this.props.index)
        this.props.removeList(this.props.index)
    }
}

/**
 * 规定传入参数的类型
 * @type {{removeList: *, index: (<K extends keyof T>(key: (ReadonlyArray<K> | K)) => yargs.Argv<yargs.Omit<T, K> & {[key in K]: yargs.ToNumber<T[key]>}>) | boolean | string[] | (<K extends string>(key: (ReadonlyArray<K> | K)) => yargs.Argv<T & {[key in K]: number | undefined}>), content: *}}
 */
ReactUlItem.propTypes = {
    content: PropTypes.string, // 规定传入参数必须为字符串
    removeList: PropTypes.func, // 规定传入参数必须为方法
    index: PropTypes.number, // 规定传入参数必须为数字
    name: PropTypes.string.isRequired, // 规定参数必须传入字符串
}

/**
 * 规定参数默认值的方法
 * @type {{name: string}}
 */
ReactUlItem.defaultProps = {
    name: 'Jayce', // 规定参数的默认值
}

export default ReactUlItem;