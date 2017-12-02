import React, {Component} from 'react'

class Banner extends Component{
	render(){
		return(
			<div className = "Banner">
				<h1>{this.props.title}</h1>
				<img src={this.props.image} alt=""></img>
				<p>
					{this.props.text}
				</p>
			</div>
		);
	}
}

export default Banner;
