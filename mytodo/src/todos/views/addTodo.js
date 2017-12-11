import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    // ref 是一种直接连接DOM元素的一个属性，这样做破坏了react的虚拟DOM 的设计
    // 可以在组件内部用一个 变量来存储用户的输入
    // ref 属性通常是一个函数，函数的参数就是这个组件代表的DOM元素

    onSubmit(ev) {
        ev.preventDefault();
        // 阻止跳转页面的默认事件

        const input = this.input;
        if (!this.input.value.trim()) {
            return;
        }
        
        this.props.onAdd(input.value);
        input.value = "";

    }

    refInput(node) {
        this.input = node;
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit} >
                    <input type="text" className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}
AddTodo.PropTypes = {
    onAdd: PropTypes.func.isRequired
};

// 其实onAdd 是内层傻瓜组件的一个属性
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
}
// 返回一个对象，该对象的每个键值对都是一个映射，定义了UI组件的参数怎样发出Action

export default connect(null, mapDispatchToProps)(AddTodo);