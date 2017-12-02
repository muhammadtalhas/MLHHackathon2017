import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import IssueList from './issue_list.js';
import Footer from './footer.js';
import './style.css';

class Issue extends Component{
	render(){
		return(
			<div>
				<Banner title={this.props.title} text={this.props.description} image={this.props.image}/>
				<Login />
				
				<Footer />
			</div>
		);
	}
}

export default Issue;
