import React, { Component } from 'react';
import './PostListItem.css';

class PostListItem extends Component {


	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.title !== nextProps.title ||
			this.props.body !== nextProps.body
		);
	}

	render() {
		console.log('render postItem');
		const { title, body, userId, id} = this.props;
		return (
			<li className="Post-item">
				<h3>{id}. { title }</h3>
				<p>{ body }</p>
				<p>User Id: { userId }</p>
			</li>
		);
	};
}

export default PostListItem;