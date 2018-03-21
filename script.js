const container = document.getElementById('container');
const getJson = (url) => fetch(url).then(response => response.json());
const href = window.location;

// Display all posts
const printAllPosts = ([posts, users]) => {
	const ul = document.createElement('ul');

	ul.style.listStyle = "none";
	posts.forEach(item => {
		const li = document.createElement('li');
		const userName = users.find(x => x.id === item.userId).name;

		li.style.marginBottom = "20px";
		li.innerHTML = 
			`
			<div>
				<strong>Post ${item.id}</strong>
				<p><strong>Post:</strong> ${item.body}</p>
			</div>
			<strong>Author: </strong><a href="${href.host}?userId=${item.userId}">${userName}</a>
			<p><a href="${href.host}?postId=${item.id}">Open post</a></p>
			<hr>
			`;
		ul.appendChild(li);
	});
	container.innerHTML = ul.outerHTML;
};
		
//Display one post and comments to it
const printSinglPost = ([post, users, comments]) => {
	const userName = users.find(x => x.id === post.userId);
	const ul = document.createElement('ul');

	container.innerHTML =
		`
		<p><a href="index.html">HOME</a></p>
		<div>
			<strong>Post ${post.id}</strong>
			<p><strong>Title:</strong> ${post.title}</p>
			<p><strong>Post:</strong> ${post.body}</p>
			<p><strong>Author: </strong><a href="${href.host}?userId=${post.userId}">${userName.name}</a></p> 
			<p><strong>Author email: </strong><i>${userName.email}</i></p> 
			<p><strong>Comments:</strong></p>
		</div>
		`;

	comments.forEach(item => {
		const li = document.createElement('li');
		li.innerHTML = 
		`
		<strong>Comment ${item.id}</strong>
		<p>${item.body}</p>
		<p>email: <i>${item.email}</i></p><hr>
		`;
		ul.appendChild(li);
	})
	container.appendChild(ul);
};

//Display information about the user and his posts
const printUserPosts = ([user, posts]) => {
	const ul = document.createElement('ul');

	container.innerHTML = 
	`
	<p><a href="index.html">HOME</a></p>
	<div>
		<strong>User ${user.id}</strong>
		<p><strong>Name:</strong> ${user.name}</p>
		<p><strong>User Name:</strong> ${user.username}</p>
		<p><strong>Email: </strong><i>${user.email}</i></p> 
		<p><strong>Posts:</strong></p>
	</div>
	`;
	posts.forEach(item => {
		const li = document.createElement('li');
		li.innerHTML = 
		`
		<strong>Post ${item.id}</strong>
		<p>Title: ${item.title}</p>
		<p>Body: ${item.body}</p>
		<p><a href="${href.host}?postId=${item.id}">Open post</a></p><hr>
		`;
		ul.appendChild(li);
	})
	container.appendChild(ul);
};
		

//Parse url
if (/(postId)/.test(href)) {
	const postId = href.search.match(/[0-9]/g).join('');

	Promise.all([
		getJson(`https://jsonplaceholder.typicode.com/posts/${postId}`),
		getJson(`https://jsonplaceholder.typicode.com/users`),
		getJson(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
	])
	.then(([post, users, comments]) => printSinglPost([post, users, comments]))
	.catch(error => console.error(`ERROR ${error}`));
} else if (/(userId)/.test(href)) {
	const userId = href.search.match(/[0-9]/g).join('');

	Promise.all([
		getJson(`https://jsonplaceholder.typicode.com/users/${userId}`),
		getJson(`https://jsonplaceholder.typicode.com/posts${href.search}`)
	])
	.then(([user, posts]) => printUserPosts([user, posts]))
	.catch(error => console.error(`ERROR ${error}`));
} else {
	Promise.all([
		getJson('https://jsonplaceholder.typicode.com/posts'),
		getJson('https://jsonplaceholder.typicode.com/users')
	])
	.then(([posts, users]) => printAllPosts([posts, users]))
	.catch(error => console.error(`ERROR ${error}`));
}