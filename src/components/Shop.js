import React, {Component} from "react";
import Iphonex from "../assets/images/iphone-x.jpg";
import Samsung from "../assets/images/samsung-galaxy-s8.jpg";
import Redmi from "../assets/images/xiaomi-redmi-note-10.jpg";
import {NavLink} from "react-router-dom";

class Shop extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug : "Ipone-X",
                image: Iphonex,
                name: "Iphone X",
                price: 24000000
            },
            {
                id: 2,
                slug : "Samsung-8",
                image: Samsung,
                name: "Samsung 8",
                price: 8000000
            },
            {
                id: 3,
                slug : "Remmi-10",
                image: Redmi,
                name: "Remmi 10",
                price: 9000000
            },
        ];

        var {match} = this.props;
        var url = match.url;
        var showProduct = products.map((product, index) => {
            return (
                <NavLink className="col-md-4" key={index} to={`${url}/${product.slug}`}>
                    <div className="card">
                        <img className="card-img-top p-4" src={product.image} alt={product.name}/>
                        <div className="card-body p-3">
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>
                </NavLink>
            )
        });

        var {location} = this.props;
        console.log(location);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-3">Day la trang Shop Product</h1>
                    </div>
                    {showProduct}
                </div>
            </div>
        )
    }
}

export default Shop;