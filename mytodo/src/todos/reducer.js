// Store收到Action以后，由reducer 去计算一个新的state出来。
// reducer 是一个纯函数，不会改变传入的参数，和已有的state,
// 它接收action和当前state作为参数
// 返回一个新的state


import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

// todos 这个模块只能修改 store中的todo数组，所以 默认 state=[]
export default(state=[], action) =>{
    switch(action.type){
        case ADD_TODO :{
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ... state
            ]
        }

        case TOGGLE_TODO: {
            return state.map((todoItem)=>{
                if(todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed};
                }else{
                    return todoItem;
                }
            })
        }

        case REMOVE_TODO: {
            return state.filter((todoItem)=>{
                return todoItem.id !== action.id
            })
        }
        
        default: {
            return state;
        }
    }
}