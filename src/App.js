import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Buy } from './pages/Buy';
import { Sale } from './pages/Sale';
import { Default } from './pages/Default';

class App extends Component {
	render() {
		return(
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Buy" component={Buy} />
					<Route path="/Sale" component={Sale} />
					<Route component={Default} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;