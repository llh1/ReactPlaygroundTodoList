'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import TodoItem from './todo-item.jsx';

var ENTER_KEY = 13;

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<header className="header">
					<h1>TodoApp</h1>
					<input className="new-todo" 
						   placeholder="What needs to be done?" 
						   autoFocus={true} />
				</header>
				<section className="main">
					<input className="toggle-all" 
						   type="checkbox" />
					<ul className="todo-list">
						/* all the todo list items here */
					</ul>
				</section>
			</div>
		);
	}
}
