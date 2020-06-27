import React, { Component } from "react";
import Item from "./item.component";
const elements = ['one', 'two', 'three'];


export default class Listitem extends Component {
    render() {
        return (
          <div className="row all-item">
            {elements.map((value, index) => {
              return (
                <Item>

                </Item>
              )
            })}
            
          </div>
        );
    }
}
