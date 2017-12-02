import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';

import Home from './home.js'

import './style.css';

class App extends Component{
	render(){
		return(
			<div>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald" rel="stylesheet"/>

			<BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>

			</div>
		);
	}
}

export default App;
