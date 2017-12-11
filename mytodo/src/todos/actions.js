import { ADD_TODO, TOGGELE_TODO, REMOVE_TODO } from './actionTypes';

let nextTodoId = 0;
// es6 的简写 不用return,直接用（）把返回的对象包起来就OK
// ADD_TODO      -->  'TODO/ADD'
// TOGGLE_TODO   -->  'TODO/TOGGLE'
// REMOVE_TODO   -->  'TODO/REMOVE'
export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
})


export const toggleTodo = (id) => ({
    type: TOGGELE_TODO,
    id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})