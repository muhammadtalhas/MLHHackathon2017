import React, {Component} from 'react'

class IssueList extends Component{
	render(){
		return(
			<div className="IssueList">
				<Issue title="Net Neutrality" description="Fuck AT&T"/>
				<Issue title="Ocean Acidity" description="Pour Baking Soda in the water"/>
			</div>
		);
	}
}

class Issue extends Component{
	render(){
		return(
			<div className="Issue">
				<h3>{this.props.title}</h3>
				<p>
					{this.props.description}
				</p>
			</div>
		)
	}
}

export default IssueList;
