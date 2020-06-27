import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
// import LadingPage from "./components/ladingpage.component";
import LandingPage from "./components/ladingpage.component";
import PostDetail from "./components/postdetail.component";

function App() {
  return (
    <Router>
      <Route path = "/" exact component = {LandingPage} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/show-detail" component={PostDetail} />
    </Router>
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
