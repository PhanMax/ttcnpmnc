import React, { Component } from "react";
import Item from "./item.component";
import axios from "axios";
import PostDetail from "./postdetail.component";
import { Redirect, Link } from "react-router-dom";
const elements = ["one", "two", "three"];
const URL = "http://10.128.170.6:8080/api/posts/";
const URL1 = "http://10.128.170.6:8080/api/posts/delete";
const URL2 = "localhost:3000/api/posts/";
const URL3 = "http://10.128.170.6:8080/api/posts/all";

export default class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.DeletePost = this.DeletePost.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  componentDidMount() {
    if (!window.localStorage.length) {
      axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL3,
      }).then((res) => {
        let { data } = res;
        console.log(data);
        this.setState({ data: data });
      });
    } else {
      axios({
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL,
      }).then((res) => {
        let { data } = res;
        console.log(data);
        this.setState({ data: data });
      });
    }
  }

  handleDetail(id) {
    console.log(id);
    // if(id){
    //   let link = `${URL}:{id}`
    //   return (<Redirect to="/link"/>);
    // }
  }

  DeletePost(id) {
    if (window.localStorage.getItem("Bearer")) {
      let newData = this.state.data.filter((e) => e.id !== id);
      this.setState({ data: newData });
      // this.setState({data:this.state.data.splice(index,1)});
      //console.log(this.state.data);
      let delete1 = {
        id: id,
      };
      axios({
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
          "Access-Control-Allow-Origin": "*",
        },
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
          "Access-Control-Allow-Origin": "*",
        },
        method: "delete",
        url: URL1,
        data: delete1,
      }).then((res) => {
        console.log(res);
      });
    } else {
      alert("You do not log in");
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="row mx-auto all-item container list-item-wrapper">
        {this.state.data.length
          ? this.state.data.map((value, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5"
                  style={{ height: "300px" }}
                >
                  <Link to={`/${value.id}`} class="btn btn-success">
                    Detail
                  </Link>
                  <Item value={value}></Item>
                  {window.localStorage.length ? (
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => this.DeletePost(value.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
