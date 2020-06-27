import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Listitem from "./components/listitem.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
// import LadingPage from "./components/ladingpage.component";
import LandingPage from "./components/ladingpage.component";
import PostDetail from "./components/postdetail.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ABC</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/listitem"}>list item</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="list-item-wrapper">
        <Route path="/listitem" component={Listitem} />
      </div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/show-detail" component={PostDetail} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

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
