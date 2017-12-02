import React, {Component} from 'react'

class CommentList extends Component{
	render(){
		return(
			<div>
				
			</div>
		);
	}
}

class Comment extends Component{
	render(){
		return(
			<div>
				<p>
					{this.props.comment}
				</p>
			</div>
		)
	}
}

export default CommentList;
