class InvalidArgumentError extends Error {
	constructor(argument, value) {
		super();
		this.name = "InvalidArgument";
		this.message = `Invalid value of the argument ${argument}! Argument can not be ${value}`;
		this.stack = (new Error()).stack;
	}
}

const React = {
	createElement (type, props, children) {
		if (typeof type !== 'string') {
			throw new InvalidArgumentError('type', type);
		}
		
		if (typeof props !== 'object' && typeof props !== 'undefined') {
			throw new InvalidArgumentError('props', props);
		}
		
		const element = document.createElement(type);
		
		for (let key in props) {
		  switch (key) {
			case 'style':
			  if(typeof props[key] == 'string') {
				element.style.cssText = props[key];
			  } else if (!Array.isArray(props[key] && !props[key])){
				for (let prop in props[key]) {
					element.style[prop] = props.style[prop];
				}
			  }
			  break;
			case 'cssText':
			  element.style.cssText = props.cssText;
			  break;
			case 'className':
			  element.classList.add(props.className);
			  break;
			default:
			  element[key] = props[key];
			  break;
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
						throw new InvalidArgumentError('children', children)
					} 
					break;
				default:
					throw new InvalidArgumentError('children', children);
					break;
			}
		}
		return element;
	  },

	  render(element, parentElement) {
		if (!parentElement || !parentElement.nodeType) {
			throw new InvalidArgumentError('parentElement', parentElement);
		}
		
		if (typeof element == 'string') {
			parentElement.innerHTML = element;
		} else if (element.nodeType) {
			parentElement.innerHTML = element.outerHTML;
		} else {
			throw new InvalidArgumentError('element', element);
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