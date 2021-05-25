import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
        }

    };

    onClick = (isChecked) => {
        this.setState({
            isChecked :isChecked
        })
    };

  render() {
        var { isChecked } = this.state;
    return (
        <div className="container">
          <div className="row">
              <div className="col-12">
                  <h1>Day la trang Gioi Thieu</h1>
              </div>
              <div className="col-12">
                  <button className="btn btn-primary m-2" onClick={() => this.onClick(false)}> Cho phep </button>
                  <button className="btn btn-danger m-2" onClick={() => this.onClick(true)}> Khong cho phep </button>

                  <Prompt when={isChecked} message={location => (`Ban co muon di den ${location.pathname}`)}/>
              </div>
          </div>
        </div>
    )
  }
}

export default Contact;