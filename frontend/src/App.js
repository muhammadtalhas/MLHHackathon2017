import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import './style.css';

class App extends Component{
	render(){
		return(
			<div>
			<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
				<Banner title="Issunews"/>
				<Login />
				
			</div>
		);
	}
}

export default App;
