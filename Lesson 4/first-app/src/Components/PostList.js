import React, { Component } from 'react';
import PostListItem from './PostListItem.js';
import MoreButton from './MoreButton.js';
import styled from 'styled-components';
import data from '../data.js';

const Wraper = styled.section `
	max-width: 80%;
	margin: 0 auto;
	background-color: #f3f3f3;

`;

const List = styled.ul`
	padding: 10px;
`;

const Header = styled.header`
	
	padding: 0 10px;
	background-color: red;
	
	height: 50px;
	line-height: 50px;
`;

const Search = styled.input`
	height: 30px;
	border-radius: 15px;
	padding: 0 10px;

	:focus {
		outline: none;
	}
`;

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemCounter: 10,
			value: ""
		};

		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.filterData = this.filterData.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	onClick() {
		const {itemCounter} = this.state;
		this.setState({
			itemCounter: itemCounter + 10
		});
	}

	filterData() {
		let regExp = new RegExp(this.state.value, 'g');
		return data.filter(post => regExp.test(post.title))
	}

	render () {
		return (
			<Wraper>
				<Header>
					<Search
						name = "search"
						type = "search"
						placeholder = "&#128270;"
						onChange = {this.handleChange}
					/>
				</Header>
				<List>
					{this.filterData().slice(0, this.state.itemCounter).map(item => (
						< PostListItem 
							key = {item.id}
							id = {item.id}
							title = {item.title}
							body = {item.body}
							userId = {item.userId}
						/>

					))}
				</List>

				< MoreButton 
					onClick = {this.onClick}
				/>
			</Wraper>
		);
	}
}

export default PostList;