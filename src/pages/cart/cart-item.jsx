
// cart-item.jsx

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { SlArrowRight } from "react-icons/sl";
import { CartItemDescription } from "./CartItemDescription";
import { ReactCardFlip } from "react-card-flip";
import { ItemExtras } from "./ItemExtras";


export const CartItem = (props) => {
  const { id, productName, price, productImage, description, size, extra, beans } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getSizePriceForItem, sizePrices, setSizePrices } = useContext(ShopContext);
  
  // const [newValue, setNewValue] = useState(null); 
  // const [sizePrice, setSizePrice] = useState('');
  const [showDescription, setShowDescription] = useState(false)
  
//console.log(sizePrices)
  const [selectedSize, setSelectedSize] = useState(''); // State to store the selected size
  const [sizePrice, setSizePrice] = useState(0); // State to store the size price

  // Function to update size prices
  // const updateSizePrices = (id, size, price) => {
  //   setSizePrices((prevSizePrices) => ({
  //     ...prevSizePrices,
  //     [id]: { ...prevSizePrices[id], [size]: price },
  //   }));
  // };
 const handleChangePrice = (sizeIndex) => {
    //setSelectedSize(sizeIndex); // Update selectedSize state
 
    
    if (sizeIndex === 'sizeS') setSizePrice(0)
    if (sizeIndex === 'sizeM') setSizePrice(10)
    if (sizeIndex === 'sizeL') setSizePrice(20)
    return setSizePrices(sizePrice)
   
  };



  const handleShowDescription = () => {
    setShowDescription(prevState => !prevState)
  }
  const handleInputChange = (newValue) => {
  
    updateCartItemCount(newValue, id);
    

  };

  


 
  
  
  // const handleChangePrice = (sizeIndex) => {
  //   switch (sizeIndex) {
  //     case 'S':
  //       setSizePrice(size.sizeS);
  //       break;
  //     case 'M':
  //       setSizePrice(size.sizeM);
  //       break;
  //     case 'L':
  //       setSizePrice(size.sizeL);
  //       break;
  //     default:
  //       setSizePrice(0);
  //   }
  
  // };
  
  // Calculate total price by adding the price and sizePrice
  const totalPrice = price + sizePrice;
 
 
  return (<>
  
    <div className="cartItem">
      <div className="imgWrapper">
        <div className="splash"></div>
        <img src={productImage} alt=''/>
      </div>
      <div className="description">
        <div className="upper">
          <div className="leftContent">
            <p>{productName}</p>
            <div className="coffeeSize">
              <p>Odaberi veličinu:</p>
              <label className="coffeeSizeLabel" htmlFor={`small-${id}`}>
                S
                <input type="radio" className="radioSize" value="S" onClick={() => handleChangePrice('sizeS')} name={`size-${id}`} id={`small-${id}`} />
              </label>
              <label className="coffeeSizeLabel" htmlFor={`medium-${id}`}>
                M
                <input type="radio" className="radioSize" value="M" onClick={() => handleChangePrice('sizeM')} name={`size-${id}`} id={`medium-${id}`} />
              </label>
              <label className="coffeeSizeLabel" htmlFor={`large-${id}`}>
                L
                <input type="radio" className="radioSize" value="L" onClick={() => handleChangePrice('sizeL')} name={`size-${id}`} id={`large-${id}`} />
              </label>
            </div>
          </div>
          <div className="middleContent">
            <ItemExtras  />
          </div>
          <div className="rightContent">
            <p>Odaberi količinu:</p>
            <div className="countHandler">
              <button className="btn" onClick={() => removeFromCart(id)}><span className="minus">-</span></button>
              <input
                
                value={cartItems[id]}
                onChange={(e) => handleInputChange(Number(e.target.value))}
              />
              <button className="btn" onClick={() => addToCart(id)}><span className="plus">+</span></button>
            </div>
          </div>
        </div>
        <div className="lower">
          <p> Cena: <span>{totalPrice} RSD</span><SlArrowRight className="rightArrow" onClick={handleShowDescription}/></p>
        </div>
      </div>
      {showDescription && <CartItemDescription description={description}/>}
      
    </div>
    
    </>
  );
};




























