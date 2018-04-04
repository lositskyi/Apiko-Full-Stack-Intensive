import styled, {keyframes} from 'styled-components';
import React, { Component } from 'react';

const loaderFrame = keyframes`
	from {
		background: linear-gradient(45deg, #0B2349 33%, #0D61BC 66%, #8AA9D6);
		-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	}
	25% {
		background: linear-gradient(45deg, #8AA9D6 33%, #0B2349 66%, #0D61BC);
		-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	}
	50% {
		background: linear-gradient(45deg, #0D61BC 33%, #8AA9D6 66%, #0B2349);
		-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	}
	75% {
		background: linear-gradient(45deg, #0B2349 33%, #0D61BC 66%, #8AA9D6);
		-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	}
	to {
		background: linear-gradient(45deg, #8AA9D6 33%, #0B2349 66%, #0D61BC);
		-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	}
`;

const Loading = styled.h2`
	diaplay: block;
	content: "lofgdf";
	font-size: 60px;
	margin: 31.2% auto;
	text-align: center;
	animation: ${loaderFrame} 2s infinite ease;
  	color: #fff;
`;

class Loader extends Component {
	render() {
		return <Loading>Loading...</Loading>
	}
}

export default Loader;