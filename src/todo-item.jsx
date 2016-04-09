'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>{this.props.todo.title}</label>
					<button className="destroy" />
				</div>
			</li>
		);
	}
}