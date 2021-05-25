import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Login from "./components/Login";

const routes = [
    {
        path : "/",
        exact : true,
        main : () => <Home />
    },
    {
        path : "/about-us",
        exact : false,
        main : () => <About />
    },
    {
        path : "/shop",
        exact : true,
        main : ({match, location}) => <Shop match={match} location={location}/>
    },
    {
        path : "/shop/:slug",
        main : ({match}) => <Product match={match}/>
    },
    {
        path : "/contact",
        exact : false,
        main : () => <Contact />
    },
    {
        path : "/login",
        exact : false,
        main : ({location}) => <Login location={location}/>
    },
    {
        path : "",
        exact : false,
        main : () => <NotFound />
    }
];

export default routes;