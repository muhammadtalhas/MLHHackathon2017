import React, {Component} from 'react'

class IssueList extends Component{
	render(){
		return(
			<div className="IssueList">
				<Issue title="Net Neutrality" description="Net neutrality is the principle that Internet service providers must treat all data on the Internet the same, and not discriminate or charge differently by user, content, website, platform, application, type of attached equipment, or method of communication.For instance, under these principles, internet service providers are unable to intentionally block, slow down or charge money for specific websites and online content."/>
				<Issue title="Ocean Acidity" description="Pour Baking Soda in the water"/>
			</div>
		);
	}
}

class Issue extends Component{
	render(){
		return(
			<div className="IssuePreview">
				<h3>{this.props.title}</h3>
				<p>
					{this.props.description}
				</p>
			</div>
		)
	}
}

export default IssueList;
