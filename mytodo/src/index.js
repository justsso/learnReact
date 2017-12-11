// 项目入口
import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux';
import TodoApp from './TodoApp';

import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById("root")
)
