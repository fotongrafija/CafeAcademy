
// cart.jsx


import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products.js";
import { SlArrowUp } from "react-icons/sl";
import { Product } from "../shop/product.jsx";
import  checkoutIcon  from "../../assets/checkoutIcon.svg"
import "./cart.css";
import './itemExtras.css'
import { ChosenItems } from "./ChosenItems.jsx";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  
  const getProductById = (id) => {
  // PRODUCTS by ID
  return PRODUCTS.find((product) => product.id === id);
  };
  
  

  const [cartClass, setCartClass] = useState(false)

  const handleChangeCart = () => setCartClass(oldState => !oldState)


  
  return (
    <div className="cart">
      <div>
        <h1></h1>
      </div>
      <div className="cartContainer">
        {Object.entries(cartItems).map(([id, quantity, size]) => {
          const product = getProductById(parseInt(id)); // Product details by id
          if (product) {
            // If product exists
            return <CartItem key={id} data={{ ...product, id, quantity, size }} />;
          } else {
            // When product is not found
            console.error(`Product with id ${id} not found.`);
            return null; 
          }
        })}
      </div>

      {totalAmount > 0 ? (
        
        <div className={`checkout ${cartClass ? 'activeCheckout' : ''}`}>
          <div className={`checkoutUpper ${cartClass ? 'activeCheckout' : ''}`}>
            
            <div className="swipeLine" onClick={handleChangeCart}></div>
            <p> Ukupno: {totalAmount} RSD </p>
            <button
              className="checkoutBtn"
              onClick={() => {
                checkout();
                navigate("/");
              }}
            >
              <img src={checkoutIcon} alt="" /><span>Naruči</span>
            </button>
          </div>  
          <div className={`chosenItemsWrapper ${cartClass ? 'activeCheckout' : ''}`}>
            <ChosenItems />
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};


