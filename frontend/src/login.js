import React, {Component} from 'react'

class Login extends Component{
	render(){
		return(
			<div>
				<form>
					<label>Username</label>
					<input type="text" placeholder="Username" name="uname">
					<label>Password</label>
					<input type="password" placeholder="Password" name="pass">
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
