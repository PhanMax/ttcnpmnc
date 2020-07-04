import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./landingpage.css";

import Login from "./login.component";
import SignUp from "./signup.component";
import CreatePost from "./createpost.component";

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      token : false
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              ABC
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/listitem"}>
                    list item
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container_div">
          <header className="masthead text-white text-center">
            <div className="overlay" />
            <div className="container" style={{ padding: "100px" }}>
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <div className="image"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

{
  /* <div className="auth-wrapper">
  <div className="auth-inner">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </div>
</div> */
}
