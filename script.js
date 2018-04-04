
const React = {
	createElement (type, props, children) {
		//varification argument "type"
		if (typeof type !== 'string') {
			throw new Error(`Invalid value of the argument "type" in createElement()! "type" is a ${typeof type}. Argument must be a string. ""`);
		}
		
		if (typeof props !== 'object' && typeof props !== 'undefined') {
			throw new Error(`Invalid value of the argument "props" in createElement()! Argument must be an object.`);
		}
		
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
							} else if (child.nodeType){
								element.appendChild(child);
							}
						});
					} else if (children.nodeType){
						element.appendChild(children);						
					} else {
						throw new Error(`Invalid value of the argument "children" in createElement()! Argument "children" must be an array or Node element.`);
					} 
					break;
			}
		}
		return element;
	  },

	  render(element, parentElement) {
		if (!parentElement) throw new Error(`Invalid value of the argument "parentElement" in render()! "parentElement" is null`);
		if (!parentElement || !parentElement.nodeType) throw new Error(`Invalid value of the argument "parentElement" in render()! "parentElement" must be a Node element `);
		
		if (typeof element == 'string') {
			parentElement.innerHTML = element;
		} else if (element.nodeType) {
			parentElement.innerHTML = element.outerHTML;
		}
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

