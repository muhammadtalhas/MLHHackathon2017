import React, {Component} from 'react'

class IssueList extends Component{
	render(){
		if(this.props.issues){
			let issue = this.props.issues.map(function(item, i){
			return(
				<div>	
					<Issue key={item._id} title={item.title} description={item.description} />
				</div>
			);
});
			return(
				<div>
					{issue}
				</div>
			);
		}else{
			return(<div>No Issues!</div>);
		}
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
