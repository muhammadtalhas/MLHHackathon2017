import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import IssueList from './issue_list.js';
import Footer from './footer.js';
import './style.css';

class Home extends Component{
	render(){
		return(
			<div>
				<Banner title="Issunews" text="Take actions on the issues that matter the most"/>
				<Login />
				<IssueList />

				<Footer />
			</div>
		);
	}
}

export default Home;
