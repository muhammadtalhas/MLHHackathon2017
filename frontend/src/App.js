import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import IssueList from './issue_list.js';
import Footer from './footer.js';
import './style.css';

class App extends Component{
	render(){
		return(
			<div>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald" rel="stylesheet"/>
				<Banner title="Issunews"/>
				<Login />
				<IssueList />

				<Footer />
			</div>
		);
	}
}

export default App;
