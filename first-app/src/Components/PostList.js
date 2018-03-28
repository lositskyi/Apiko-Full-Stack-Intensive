import React, { Component } from 'react';
import data from '../data.js';
import PostListItem from './PostListItem.js';
import MoreButton from './MoreButton.js'

class PostList extends Component {
	constructor() {
		super();
		this.state = {itemCounter: 10};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const {itemCounter} = this.state;
		this.setState({
			itemCounter: itemCounter + 10
		});
	}

	render () {
		return (
			<React.Fragment>
				<ul>
					{data.slice(0, this.state.itemCounter).map(item => (
						< PostListItem 
							key = {item.id}
							id = {item.id}
							title = {item.title}
							body = {item.body}
							userId = {item.userId}
						/>

					))}
				</ul>

				< MoreButton 
					onClick = {this.onClick}
				/>
			</React.Fragment>
		);
	}
}

export default PostList;