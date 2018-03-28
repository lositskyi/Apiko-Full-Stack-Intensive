import React, { Component } from 'react';
import './PostListItem.css';

class PostListItem extends Component {
	render() {
		const { title, body, userId, id} = this.props;
		return (
			<li className="Post-item">
				<h2>{id}. { title }</h2>
				<p>{ body }</p>
				<p>User Id: { userId }</p>
			</li>
		);
	};
}

export default PostListItem;