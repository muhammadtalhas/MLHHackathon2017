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
					<form>
					<img src={this.props.image} alt=""/>
					<div>
						<label>Email</label>
						<br/>
						<input type="text" name="email" value={this.props.userData?this.props.userData.email:""}/>
					</div>

					<div>
					<label>Message</label>
					<br/>
					<textarea name="message" rows="6" cols="100">
						Net neutrality is the principle that Internet service providers must treat all data on the Internet the same, and not discriminate or charge differently by user, content, website, platform, application, type of attached equipment, or method of communication.For instance, under these principles, internet service providers are unable to intentionally block, slow down or charge money for specific websites and online content.
					</textarea>
					</div>
	
					<p>
						By clicking the "I Support" button, you agree to send the above to your constituents.
					</p>
						<ConstituentView userData={this.props.userData} />	
						<br/>
						<button type="submit" disabled={!this.props.userData}>I Support</button>
					</form>	
				</div>
				<Footer />
			</div>
		);
		
	}
}

class ConstituentView extends Component{
	render(){
		if(this.props.userData){
			let congressman = this.props.userData.constituents.map(function(people, i){
				return(
					<div>
						<Constituent name={people.name} party={people.party} district={people.district}/>
					</div>
				);	
			});
			return(
				<div>
					{congressman}
				</div>
			)
		}else{
			return(<div>Login to see your constituents</div>);
		}
	};
};

class Constituent extends Component{
	render(){
		let name = "Representative: ";
		if(this.props.district.length < 1)
			name = "Senator: "
		name += this.props.name;
		return(
			<div className="Consitiuent">
				<b>{name}</b> - {this.props.party}
			</div>
		)
	};
};

export default Issue;
