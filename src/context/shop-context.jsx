
// shop-context.jsx

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { CartItem } from "../pages/cart/cart-item";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        const size = itemInfo.size;
       
        totalAmount += (itemInfo.price) * quantity ;
        
      }
      

      
    }
    return totalAmount;
  };

  

  const getSizePrice = (product, size) => {
    switch (size) {
      case 'S':
        return product.size.sizeS;
      case 'M':
        return product.size.sizeM;
      case 'L':
        return product.size.sizeL;
      default:
        return 0;
    }
  };
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount >= 0 ? newAmount : 0, // Ensure quantity doesn't go below 0
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getSizePrice,
  
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
