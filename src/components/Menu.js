import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus =[
    {
        name : "Home",
        to : "/",
        exact : true
    },
    {
        name : "About Us",
        to : "/about-us",
        exact : false
    },
    {
        name : "Shop",
        to : "/shop",
        exact : false
    },
    {
        name : "Contact",
        to : "/contact",
        exact : false
    },
    {
        name : "Login",
        to : "/login",
        exact : false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match })=>{
            var active = match ? "action" : "";
            return (
                <li className={"nav-item " + active}>
                    <Link className="nav-link" to={to}> {label} </Link>
                </li>
            )
        }}/>
    )
};

class Menu extends Component {
    render() {
        return (
            <div id="main_menu" className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                                <Link className="navbar-brand" to="/">Navbar</Link>
                                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavId">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        { this.showMenu(menus) }
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index)=>{
                return (
                    <MenuLink key={index}
                              label={menu.name}
                              to={menu.to}
                              activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;