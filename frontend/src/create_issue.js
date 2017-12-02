import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import Footer from './footer.js';
import './style.css';

class CreateIssue extends Component{
	render(){
		return(
			<div>
				<Banner title="Issunews" text="Take actions on the issues that matter the most"/>
				<Login />
				<form className="IssueForm">
					<div>
						<label><b>Issue Name</b></label>
						<br/>
						<input type="text" placeholder="What is the issue?" name="issuename"/>
					</div>
					<div>
						<label><b>Description of Issue</b></label>
						<br/>
						<textarea type="text" rows="8" cols="50" placeholder="Describe the issue!" name="issuedescription" />
					</div>
					<button type="submit">Submit</button>
				</form>
				<Footer />
			</div>
		);
	}
}

export default CreateIssue;
