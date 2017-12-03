import React, {Component} from 'react'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ userData: nextProps.userData });
    }

    handleChangeUsername(e) {
        this.setState({ usernameInput: e.target.value });
        console.log(this.state.usernameInput)
    }
    handleChangePassword(e) {
        this.setState({ passwordInput: e.target.value });
    }

    onClick(){
        console.log("ay"+ this.state.usernameInput)
        this.props.onClick(this.state.usernameInput, this.state.passwordInput)
    }

    render() {
        if (this.state.userData) {
            return(
                <div className="Login">
                    <label>Welcome {this.state.userData.username}</label>
                </div>
            )
        } else {
            return (
                <div className="Login">
                    <form>
                        <label>Username</label>
                        <input type="text" placeholder="Username" name="uname" onChange={this.handleChangeUsername}/>
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="pass" onChange={this.handleChangePassword}/>
                        <button type="button" onClick={this.onClick}>Login</button>
                    </form>
                </div>
            );
        }
    }
}

export default Login;
