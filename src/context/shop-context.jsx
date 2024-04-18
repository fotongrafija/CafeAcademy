
// shop-context.jsx

import { createContext, useState } from "react";
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
  
  const [cartItemsPrice, setCartItemsPrice] = useState(null)
  
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
    const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
    if (!itemInfo) return 'nije pronadjen info'; // Return 0 if item not found

    const SIZE = itemInfo.size;
    switch (selectedSize) {
      case 'sizeS':
        return SIZE.sizeS;
      case 'sizeM':
        return SIZE.sizeM;
      case 'sizeL':
        return SIZE.sizeL;
       default:
        return null; // Default to 0 if size is not recognized
    }
  };

  // const itemSizePrice = () => {
  //   const sizePrice = 0
  //   for (const itemId in cartItemsPrice) {
  //     const addAmount = cartItemsPrice[itemId]
  //     return sizePrice
      
  //   }
  // }
  // itemSizePrice()

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        
        totalAmount += (itemInfo.price + Number(cartItemsPrice?.[itemId])) * quantity ;
        
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

  const updateCartItemSize = (sizeIndex, itemId) => {
    setCartItemsPrice((prev) => ({
      ...prev,
      [itemId]: sizeIndex
    }))
  }
  console.log(cartItemsPrice)

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItemsPrice,
    cartItems,
    addToCart,
    updateCartItemSize,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    ItemExtras,
    chosenItems, // items in cart
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
