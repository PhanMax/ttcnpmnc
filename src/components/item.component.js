import React, { Component } from "react";

export default class Item extends Component {
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5" style={{height: '300px'}}>
              <div className="card" style={{width: '90%'}}>
                <img className="card-img-top w-100" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/3a/75/3c/accommodation-london.jpg" style={{height: '200px'}}  alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Nha loai 1</h5>
                  <h5 className="card-title">Quan 11 - 50 m2</h5>
                </div>
              </div>  
            

            </div>
        );
    }
}


// font-family: Verdana,Arial,sans-serif;