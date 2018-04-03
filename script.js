const React = {
	createElement (type, props, children) {
		const element = document.createElement(type);

		for (let key in props) {
		  switch (key) {
			case 'style':
			  for (let prop in props[key]) {
				element.style[prop] = props.style[prop];
			  };
			  break;
			case 'cssText':
			  element.style.cssText = props.cssText;
			  break;
			case 'className':
			  element.classList.add(props.className);
			  break;
			default:
			  element[key] = props[key];
		  }
		}

		if (children) {
			switch (typeof children) {
				case 'string':
					let textNode = document.createTextNode(children);
					element.appendChild(textNode);
					break;

				case 'object':
					if (Array.isArray(children)) {
						children.forEach(child => {
							if (typeof child == 'string') {
								let textNode = document.createTextNode(child);
								element.appendChild(textNode);
							} else {
								element.appendChild(child);
							}
						});
					} else {
						element.appendChild(children);
					} 
					break;
			}
		}
		console.log(element.nodeType)
		return element;
	  },

	  render(element, parentElement) {
		parentElement.innerHTML = element.outerHTML;
	  }
	}

	const app = 
	  React.createElement('div', { style: { backgroundColor: 'red' } }, [
	    React.createElement('span', undefined, 'Hello world'),
	    React.createElement('br'),
	    'This is just a text node',
	    React.createElement('div', { textContent: 'Text content' })
	  ]);

	React.render(
	  app,
	  document.getElementById('root'),
	);
