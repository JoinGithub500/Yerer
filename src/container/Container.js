import React, { Component } from 'react';
import '../css/w3.css';
import Header from './Header';
import Body from './Body';

class Container extends Component {

	render() {
		return(
			<React.Fragment>
				<Header />
				<Body />
			</React.Fragment>
		);
	}
}

export default Container;