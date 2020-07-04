import React, { Component } from "react";
import { Redirect, Route, Router } from "react-router-dom";
import "../App.css";
import axios from "axios";
import LandingPage from "./ladingpage.component";
//const URL = "http://10.128.170.6:8080/api/auth/login";
const URL = "http://10.128.170.6:8080/api/auth/login";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: "",
    };
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePw = this.handlePw.bind(this);
  }

  login(e) {
    e.preventDefault();
    let login = {
      username: this.state.username,
      password: this.state.password,
    };
    axios({
      method: "POST",
      url: URL,
      data: login,
    }).then((res) => {
      let { data } = res;
      const { accessToken, tokenType } = data;
      console.log(accessToken, tokenType);
      if (accessToken) {
        window.localStorage.setItem(tokenType, accessToken);
        this.setState({redirect : "/"})
      }
    });
  }

  handleEmail(e) {
    this.setState({ username: e.target.value });
  }

  handlePw(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.redirect.length != 0) {
      return <Redirect to={`/listitem`}/>;
    } else {
      return (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={this.handleEmail}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.handlePw}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={this.login}
              >
                Submit
              </button>
              <p className="forgot-password text-right">
                Don't have account, <a href="/sign-up">sign up ?</a>
                <br />
                <a href="#">Forgot password ?</a>
              </p>
            </form>
          </div>
        </div>
      );
    }
  }
}
