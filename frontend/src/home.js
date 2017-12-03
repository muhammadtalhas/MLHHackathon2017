import React, {Component} from 'react';
import Banner from './banner.js';
import Login from './login.js';
import IssueList from './issue_list.js';
import Footer from './footer.js';
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userData) {
            this.setState({userData: nextProps.userData});
        }

        if (nextProps.issues) {
            this.setState({issues: nextProps.issues});
        }
    }
	render(){
		return(
			<div>
				<Banner title="Issunews" text="Take action on the issues that matter the most" />
				<Login onClick = {this.props.onClick} userData={this.state.userData}/>
				<IssueList issues={this.state.issues}/>
				<Footer />
			</div>
		);
	}


}

export default Home;
