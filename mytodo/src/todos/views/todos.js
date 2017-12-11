import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList'


// function Todos() {
//     return (
//         <div className="todos" >
//             <AddTodo />
//             <TodoList />
//         </div>
//     );
// }

// export default Todos;

// 简写 暴露出一个 匿名函数，因为是无状态的，也不用render（）函数了

export default ()=>{
    return (
        <div className="todos" >
            <AddTodo />
            <TodoList />
        </div>
    )
}