import React, { Component } from "react";
import axios from "axios";
const URL = "http://10.128.170.6:8080/api/posts/create";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title : "",
        location: "",
        price: "",
        phone: "",
        url : ""
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeDes = this.handleChangeDes.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  
  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  };

  handleChangeDes(e) {
    this.setState({ title: e.target.value });
  };

  handleChangeLocation(e) {
    this.setState({ location: e.target.value });
  };

  handleChangePrice(e) {
    this.setState({ price: e.target.value });
  };

  handleChangePhone(e) {
    this.setState({ phone: e.target.value });
  };

  handleChangeUrl(e) {
    this.setState({ url: e.target.value  });
  };

  createPost(e){
      console.log("hello");
      e.preventDefault();
    
    let createpost = {
        title: this.state.title,
        location: this.state.location,
        price: this.state.price,
        phone: this.state.phone,
        imageURL: this.state.url
    }

    axios({
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTU5MzIyOTAxNiwiZXhwIjoxNTkzODMzODE2fQ.GvEQdYfbnIp9GLIpoWcIW4islriLK5fGT9rPioCN4Bg3b9CgBTIr_WPYqJBf-wQEQXn33wccvtchAAi3XzpkhA',
            'Access-Control-Allow-Origin': '*'},
        method: 'post',
        url: URL,
        data: createpost
    });
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Create Post</h3>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange = {this.handleChangeTitle}
              />
            </div>

            
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                onChange = {this.handleChangeDes}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                onChange = {this.handleChangeLocation}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                onChange = {this.handleChangePrice}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                onChange = {this.handleChangePhone}
              />
            </div>

            <div className="form-group">
              <label>Imgurl</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image"
                onChange = {this.handleChangeUrl}
              />
            </div>

            <button
              onClick= {this.createPost}
              className="btn btn-primary btn-block"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}
