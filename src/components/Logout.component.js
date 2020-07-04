import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
const URL = "http://10.128.170.6:8080/api/auth/logout";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    axios({
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
        "Access-Control-Allow-Origin": "*",
      },
      method:"post",
      url: URL
    }).then(res =>{
      console.log(res);
    });
    window.localStorage.clear();

  }
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/"} onClick={this.handleLogout}>
              Log out
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/create-post"}>
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
