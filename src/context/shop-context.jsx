
// shop-context.jsx

import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import { ItemExtras } from "../pages/cart/ItemExtras";


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
  // const [size, setSize] = useState('')
  const [sizePrices, setSizePrices] = useState({}); // Maintain size prices for each item
  
  const [isLoggedIn, setIsLoggedIn] = useState(false) //if user is LoggedIn or not


  function logIn() {
    setIsLoggedIn(true)
  }

  function logOut() {
    setIsLoggedIn(false)
  }

  const chosenItems = () => {
    const items = [];
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        items.push({ ...itemInfo, quantity });
      }
    }
    return items;
  };
 
// Function to get size price based on item ID and selected size
  const getSizePriceForItem = (itemId, selectedSize) => {
    const itemInfo = PRODUCTS.find((product) => product.id === itemId);
    if (!itemInfo) return 0; // Return 0 if item not found

    const size = itemInfo.size;
    switch (selectedSize) {
      case 'sizeS':
        return size[sizeS];
      case 'sizeM':
        return size[sizeM];
      case 'sizeL':
        return size[sizeL];
       default:
        return 0; // Default to 0 if size is not recognized
    }
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        const selectedSize = getSizePriceForItem(itemId); // Get selected size for the item
        console.log(selectedSize)
        totalAmount += (itemInfo.price + sizePrices) * quantity ;
        
      }
   
    }
    return totalAmount;
  };

  

  

  
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.min(prev[itemId] + 1, 15), // quantity can't be more than 15
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // quantity doesn't go below 0
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.min(newAmount >= 0 ? newAmount : 0, 15), // quantity doesn't go below 0 and not more than 15
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
    ItemExtras,
    chosenItems, // items in cart
    sizePrices, // to receives value from CartItem
    setSizePrices, // updates value in CartItem component
    getSizePriceForItem, // function for finding the product with id and switch itemInfo.size
    isLoggedIn,
    logIn,
    logOut
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
