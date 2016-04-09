import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo-app.jsx';
import '../css/todo-app.css';

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);