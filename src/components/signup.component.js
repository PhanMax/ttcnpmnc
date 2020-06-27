import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.usernameInput = React.createRef();
      this.pwInput = React.createRef();
      this.phoneInput = React.createRef();
    }
    onSubmit(e){
        e.preventDefault();
        console.log('The link was clicked.');
        let username = this.usernameInput.current.value;
        let pw = this.pwInput.current.value;
        let phoneInput = this.phoneInput.current.value;
        console.log(username, pw, phoneInput);

    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username: </label>
                    <input ref = {this.usernameInput} type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input ref = {this.pwInput} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Phone: </label>
                    <input ref = {this.phoneInput} type="text" className="form-control" placeholder="Last name" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick = {this.onSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
