import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Listitem from "./components/listitem.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
// import LadingPage from "./components/ladingpage.component";
import Logout from "./components/Logout.component";
import LandingPage from "./components/ladingpage.component";
import PostDetail from "./components/postdetail.component";
import CreatePost from "./components/createpost.component";
import axios from "axios";
const URL = "http://10.128.170.6:8080/api/posts/";
const URL1 = "http://10.128.170.6:8080/api/posts/all";

function App() {
  const [token, setToken] = useState([false]);
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   window.localStorage.clear();
  // },[]);
  //window.localStorage.clear();
  let check = false;
  useEffect(() => {
    if(!window.localStorage.length){
      axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL1,
      }).then((res) => {
        let { data } = res;
        setData(data);
        console.log(data);
      });
    }
    else{
      axios({
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL,
      }).then((res) => {
        let { data } = res;
        setData(data);
        console.log(data);
      });
    }
  }, []);
  useEffect(() => {
    if (window.localStorage.length != 0) {
      setToken((token) => [...token, true]);
    } else {
      setToken((token) => [...token, false]);
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              ABC
            </Link>
            {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
          </div> */}
            {token[token.length - 1] ? <Logout /> : null}
          </div>
        </nav>
        {/* <div className="list-item-wrapper container">  */}
        {/* <div className="">
          <Route path="/listitem" component={Listitem} />
          <Route path="/show-detail" component={PostDetail} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-post" component={CreatePost} />
        </div> */}
        {/* <div className="auth-wrapper"> */}
        {/* <div className="auth-inner"> */}
        <Switch>
          {data
            ? data.map((e, index) => {
                let link = `/${e.id}`
                return(<Route path = {link} component = {PostDetail} />);
              })
            : null}
          <Route path="/listitem" component={Listitem} />
          <Route path="/show-detail" component={PostDetail} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-post" component={CreatePost} />
        </Switch>
        {/* </div> */}
        {/* </div> */}
      </div>
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
