import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, SignIn } from "phosphor-react";
import logo from "../assets/logo.svg"
import "./navbar.css";
import { Login } from "./Login";
import { RegisterForm } from "./RegisterForm";
import { ShopContext } from "../context/shop-context";
import Avatar from "../assets/Avatar.svg"
import { UserMenu } from "./UserMenu";

export const Navbar = () => {

  const {isLoggedIn, logIn, logOut} = useContext(ShopContext)

  return ( <div className="container">
    <div className="navbar">
      <Link to="/"><img className="logo" src={logo}  alt="CoffeShop Logo" /></Link>
      <div className="links">
        {!isLoggedIn ? <Link to="/login"><Login /></Link> : <UserMenu />}
        
        
      </div>
    </div>
    </div>
  );
};
