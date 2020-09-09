import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SingUp } from './pages/SingUp';
import { Buy } from './pages/Buy';
import { Sale } from './pages/Sale';
import { NoMatch } from './pages/NoMatch';

class App extends Component {
	render() {
		return(
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={SingUp} />
						<Route path="/Buy" component={Buy} />
						<Route path="/Sale" component={Sale} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;