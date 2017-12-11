//待办事项列表组件

import React, { Component,PropsTypes } from 'react';
import {FilterTypes} from '../../constants.js';
import {toggleTodo, removeTodo} from '../actions'
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {bindActionCreators} from 'redux';


class TodoList extends Component {

    constructor(props) {
        super(props);
        const { todos, onToggleTodo, onRemoveTodo } = props;
    }

    render() {
        return (
            <ul className="todo-list">
                todos.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => onToggleTodo(item.id)}
                    onRemove={() => onRemoveTodo(item.id)}
                />
                )
            </ul>
        )
    }
}
TodoList.PropsTypes = {
    todos: PropsTypes.array.isRequired
};


function selectVisibleTodos(todos, filter){
    switch (filter) {
        case FilterTypes.ALL:
        return todos;
        case FilterTypes.COMPLETED:
        return todos.filter((todoItem)=> todoitem.completed);
        case FilterTypes.UNCOMPLETED:
        return todos.filter((todoItem)=> !todoitem.completed);
        default:
        throw new Error('unsupported filter');
    }
}

// 根据 Store 上的filter 状态决定todos 状态取哪些元素来展示
function mapStateToProps(state){
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         onToggleTodo: (id)=>{
//             dispatch(toggleTodo(id))
//         },
//         onRemoveTodo: (id)=>{
//             dispatch(removeTodo(id))
//         }
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    bindActionCreators({
        onToggleTodo: toggleTodo,
        onRemoveTodo: removeTodo
    }, dispatch)
}


// 通过connect 直接暴露出 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

