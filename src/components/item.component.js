import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetail from "./postdetail.component";
export default class Item extends Component {
  constructor(props) {
    super(props);
    
  }
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5" style={{height: '300px'}}>
              <Route exact path="/show-detail/:id" component={PostDetail} />
              <Link to={`/show-detail/${this.props.iditem}`}>
              <div className="card" style={{width: '90%'}}>
                <img className="card-img-top w-100" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/3a/75/3c/accommodation-london.jpg" style={{height: '200px'}}  alt="Card image cap" />
                <div className="card-body"  style={{fontSize: '16', fontWeight: 'bold'}}>
                  <div>Cho thuê căn hộ dịch vụ đường Tôn Đản, quận 4</div>
                  <div style={{Color: 'c90927'}}>5 Tr/thang</div>
                </div>
              </div>  
              </Link>
            

            </div>
        );
    }
}


// font-family: Verdana,Arial,sans-serif;