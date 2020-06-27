import React, { Component } from "react";
import axios from "axios";
const URL = "http://10.128.170.6:8080/api/auth/signup";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phone: "",
    };
    this.handlePhone = this.handlePhone.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handlePw = this.handlePw.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    // create a ref to store the textInput DOM element
    //   this.usernameInput = React.createRef();
    //   this.pwInput = React.createRef();
    //   this.phoneInput = React.createRef();
  }


  handleUser(e) {
    this.setState({ username: e.target.value });
  }

  handlePw(e) {
    this.setState({ password: e.target.value });
  }

  handlePhone(e) {
    this.setState({ phone: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let signup = {
        username: this.state.username,
        password : this.state.password,
        phone: this.state.phone
    }
    axios({
        method: 'POST',
        data: signup,
        url: URL 
    }).then(res => {
        console.log(res);
    });
  }

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Username: </label>
          <input
            onChange={this.handleUser}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            onChange={this.handlePw}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <label>Phone: </label>
          <input
            onChange={this.handlePhone}
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.onSubmit}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
