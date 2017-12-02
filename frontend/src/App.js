import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';

import Home from './home.js';
import CreateIssue from './create_issue.js';
import Issue from './issue.js';

import './style.css';

class App extends Component{
	render(){
		return(
			<div>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald" rel="stylesheet"/>

			<BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
					<Route exact path="/Create" component={CreateIssue}/>
					<Route exact path="/Issue" component={Issue}/>
                </Switch>
            </BrowserRouter>

			</div>
		);
	}
}

export default App;
