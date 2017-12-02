import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import Footer from './footer.js';
import './style.css';

class Issue extends Component{
	render(){
		return(
			<div className="Issue">
				<Banner title="Issunews" text="Net Neutrality" />
				<Login />
				<div className="content">
					<img src={this.props.image} />
					<p>
						{this.props.description}
						Net neutrality is the principle that Internet service providers must treat all data on the Internet the same, and not discriminate or charge differently by user, content, website, platform, application, type of attached equipment, or method of communication.For instance, under these principles, internet service providers are unable to intentionally block, slow down or charge money for specific websites and online content.
					</p>
					<form>
						<button type="submit">I Support</button>
					</form>	
				</div>
				<Footer />
			</div>
		);
	}
}

export default Issue;
