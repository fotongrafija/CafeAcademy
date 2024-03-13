
// cart.jsx


import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products.js";
import { SlArrowUp } from "react-icons/sl";
import { Product } from "../shop/product.jsx";
import "./cart.css";
import './itemExtras.css'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, id } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  // const sizeAmount = getSizePrice()
  const getProductById = (id) => {
  // PRODUCTS by ID
  return PRODUCTS.find((product) => product.id === id);
  };
  
  

  const [cartClass, setCartClass] = useState(false)

  const handleChangeCart = () => setCartClass(!cartClass)


  console.log(cartClass)
  return (
    <div className="cart">
      <div>
        <h1></h1>
      </div>
      <div className="cartContainer">
        {Object.entries(cartItems).map(([id, quantity]) => {
          const product = getProductById(parseInt(id)); // Product details by id
          if (product) {
            // If product exists
            return <CartItem key={id} data={{ ...product, id, quantity }} />;
          } else {
            // When product is not found
            console.error(`Product with id ${id} not found.`);
            return null; 
          }
        })}
      </div>

      {totalAmount > 0 ? (
        
        <div className={`checkout ${cartClass ? 'activeCheckout' : ''}`}>
          <SlArrowUp onClick={handleChangeCart}/>
          
          <p> Ukupno: {totalAmount} RSD </p>
          <button
            className="checkoutBtn"
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            <span>Poruči</span>
          </button>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};


