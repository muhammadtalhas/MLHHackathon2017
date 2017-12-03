import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';

import Home from './home.js';
import CreateIssue from './create_issue.js';
import Issue from './issue.js';

import './style.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
        this.attemptLogin = this.attemptLogin.bind(this);

    }
    attemptLogin=(username, password)=>{
        console.log("usernmae: "+ username)
        console.dir(username);
        console.log("password: "+ password)
        fetch("http://localhost:8080/api/login/ ",{
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then( (response) => {
            return response.json()
        }).then( (response)=> {
            console.log("Setting state")
            this.setState({userData: response});
        })
    }

	render(){
		return(
			<div>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald" rel="stylesheet"/>

			<BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props)=><Home onClick={this.attemptLogin} userData={this.state.userData}/>}/>
					<Route exact path="/Create" component={CreateIssue}/>
					<Route exact path="/Issue" component={Issue}/>

                </Switch>
            </BrowserRouter>

			</div>
		);
	}
}

export default App;
