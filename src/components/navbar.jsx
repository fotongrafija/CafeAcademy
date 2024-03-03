import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, SignIn } from "phosphor-react";
import logo from "../assets/logo.svg"
import "./navbar.css";

export const Navbar = () => {
  return ( <div className="container">
    <div className="navbar">
      <img className="logo" src={logo}  alt="CoffeShop Logo" />
      <div className="links">
        
        {/* <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link> */}
        <Link to="/cart">
          <SignIn size={32} />
        </Link>
      </div>
    </div>
    </div>
  );
};
