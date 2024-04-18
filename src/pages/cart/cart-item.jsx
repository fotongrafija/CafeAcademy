
// cart-item.jsx

import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { SlArrowRight } from "react-icons/sl";
import { CartItemDescription } from "./CartItemDescription";

import { ItemExtras } from "./ItemExtras";
import { useNavigate } from "react-router-dom";



export const CartItem = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, updateCartItemSize, isLoggedIn } = useContext(ShopContext);
  

  const [showDescription, setShowDescription] = useState(false)
  const [isBackFlipped, setIsBackFlipped] = useState(false); // State to track if the card is flipped

  const [sizePrice, setSizePrice] = useState(null)
  
  const navigate = useNavigate()

console.log(isLoggedIn)

  const handleShowDescription = () => {
    setShowDescription(prevState => !prevState)
    setIsBackFlipped(!isBackFlipped);
  }

  const handleInputChange = (newValue) => {
    
    updateCartItemCount(newValue, id);

  };

  const handleRadioClick = (sizeIndex) => {
    updateCartItemSize(sizeIndex, id)
    setSizePrice(sizeIndex)
  }

  
  
  // Calculate total price by adding the price and sizePrice
  const totalPrice = price + Number(sizePrice);
 
 
  return (<>
  
    <div className='cartItem'>
      
      <div className="imgWrapper">
        <div className="splash"></div>
        <img src={productImage} alt=''/>
      </div>
      <div className={`description ${isBackFlipped ? 'backFlip' : ''}`}>
        <div className="upper">
          <div className="leftContent">
            <p>{productName}</p>
            <div className="coffeeSize">
              <p>Odaberi veličinu:</p>
              <label className="coffeeSizeLabel" htmlFor={`small`}>
                S
                <input type="radio" className="radioSize" value={0} onClick={(e) => handleRadioClick(e.target.value)} name={`size-${id}`} />
              </label>
              <label className="coffeeSizeLabel" htmlFor={`medium`}>
                M
                <input type="radio" className="radioSize" value={10} onClick={(e) => handleRadioClick(e.target.value)} name={`size-${id}`} />
              </label>
              <label className="coffeeSizeLabel" htmlFor={`large`}>
                L
                <input type="radio" className="radioSize" value={20} onClick={(e) => handleRadioClick(e.target.value)} name={`size-${id}`} />
              </label>
            </div>
          </div>
          <div className="middleContent">
            <ItemExtras  />
          </div>
          <div className="rightContent">
            <p>Odaberi količinu:</p>
            
            <div className="countHandler">
              {isLoggedIn ? 
                              <button className="btn" onClick={() => removeFromCart(id)}>
                                <span className="minus">-</span>
                              </button>
                            :
                              <button className="btn-disabled">
                                <span className="minus">-</span>
                              </button>}
              <input
                
                value={cartItems[id]}
                onChange={(e) => handleInputChange(Number(e.target.value))}
              />
              {isLoggedIn ? 
                            <button className="btn" onClick={() => addToCart(id)}>
                              <span className="plus">+</span>
                            </button> 
                          : 
                            <button className="btn-disabled">
                              <span className="plus">+</span>
                            </button>
                          }
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























