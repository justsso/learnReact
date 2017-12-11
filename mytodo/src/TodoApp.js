import React, { Component } from 'react';
import { view as Todos} from './todos';
import {view as Filter} from './filter';


// class TodoApp extends React {
//     render() {
//         return (
//             <div>
//                 <Todos />
//                 <Filter />
//             </div>
//         )
//     }
// }


// 无状态组件  可以function 简写，不写render ，如下：
function TodoApp(){
    return(
        <div>
            <Todos/>
            <Filter />
        </div>
    )
}

export default TodoApp;