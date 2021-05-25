import React, { Component } from "react";

class Product extends Component {
  render() {

    const { match } = this.props;
    var slug = match.params.slug;
    return (
        <div className="container">
          <div className="row">
              <div className="col-12">
                  <h1 className="text-center">Day la trang Product { slug }</h1>
              </div>
          </div>
        </div>
    )
  }
}

export default Product;