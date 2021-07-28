import React, {Component} from "react";

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: 0};
    }

    onClickButton () {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton}>点击</button>
                <div>点击次数：{this.state.count}</div>
            </div>
        )
    }
}

export default ClickCounter;