import React, { Component } from 'react';
import './PostListItem.css';

class MoreButton extends Component {
	render() {
		const {onClick} = this.props;
		return (
			<button className="Button" onClick={onClick}>More post</button>
		);
	}
}

export default MoreButton;