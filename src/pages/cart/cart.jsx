
// cart.jsx


import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products.js";
import "./cart.css";
import './itemExtras.css'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, getSizePrice } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const sizeAmount = getSizePrice()
  const getProductById = (id) => {
  // PRODUCTS is an array of products
  return PRODUCTS.find((product) => product.id === id);
  };

  return (
    <div className="cart">
      <div>
        <h1></h1>
      </div>
      <div className="cart">
        {Object.entries(cartItems).map(([id, quantity]) => {
          const product = getProductById(parseInt(id)); // Product details by id
          if (product) {
            // Ensure product exists before rendering
            return <CartItem key={id} data={{ ...product, id, quantity }} />;
          } else {
            // When product is not found
            console.error(`Product with id ${id} not found.`);
            return null; 
          }
        })}
      </div>

      {totalAmount >= 0 ? (
        <div className="checkout">
          <p> Ukupno: {totalAmount} RSD </p>
          <button
            className="checkoutBtn"
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            Poruči!
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};


