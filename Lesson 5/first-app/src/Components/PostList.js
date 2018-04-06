import React, { Component } from 'react';
import PostListItem from './PostListItem.js';
import MoreButton from './MoreButton.js';
import styled from 'styled-components';
import Loader from './Loader.js'

const API = 'https://jsonplaceholder.typicode.com/';

const fetchData = (entity) => fetch(API + entity).then(response => response.json());

const Wraper = styled.section `
	max-width: 80%;
	margin: 0 auto;
	height: 100vh;
	height: 100%;
	
	background-color: #f3f3f3;
`;

const List = styled.ul`
	padding: 10px;
`;

const Header = styled.header`
	padding: 0 10px;
	background-color: #ccc;
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
			value: "",
			posts: [],
			isLoading: true,
		};

		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.filterPosts = this.filterPosts.bind(this);
	}

	componentDidMount() {
		setInterval(() => {
			Promise.all([fetchData("posts")]).then(([posts]) => {
				this.setState({
					posts: posts,
				});
			});
			this.setState({isLoading: false});
		}, 5000);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	filterPosts() {
		console.log('filter posts')
		const {posts, value, itemCounter} = this.state;
		const regExp = new RegExp(value, 'i');

		return posts.filter(post => regExp.test(post.title)).slice(0, itemCounter);
	}

	onClick() {
		const {itemCounter, posts} = this.state;
		if (itemCounter < posts.length) {
			this.setState({
				itemCounter: itemCounter + 10
			});
		}
	}

	render () {
		console.log('render postsList');
		const { isLoading } = this.state;

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
				{(isLoading && < Loader />) ||
					<List>
						{this.filterPosts().map(item => (
							< PostListItem 
								key = {item.id}
								id = {item.id}
								title = {item.title}
								body = {item.body}
								userId = {item.userId}
							/>
						))}
						<MoreButton 
							onClick = {this.onClick}
						/>
					</List>
				}
				
			</Wraper>
		);
	}
}

export default PostList;