import React, { Component } from "react";

export default class Item extends Component {
    constructor(props){
      super(props);
    }
    render() {
      let {value} = this.props;
        return (
            // <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5" style={{height: '300px'}}>
              <div className="card" style={{width: '90%'}}>
                <img className="card-img-top w-100" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/3a/75/3c/accommodation-london.jpg" style={{height: '200px'}}  alt="Card image cap" />
                <div className="card-body"  style={{fontSize: '16', fontWeight: 'bold'}}>
                  <div>{value.title}</div>
                  <div style={{Color: 'c90927'}}>{value.price}
                  </div>
                </div>
              </div>  
            

            // </div>
        );
    }
}


// font-family: Verdana,Arial,sans-serif;