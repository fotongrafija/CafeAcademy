
// CartItemDescription.jsx

import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";

export const CartItemDescription = ({ description }) => {

    const [backClick, setBackClick] = useState(true)
    const handleBackClick = () => {
        setBackClick(prev => !prev)
    }
  return (
    <div className="backDescription">
      <div className="flipDescription">
        <div className="BackUpper">
          <div className="backContent">
            <p>Opis:</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="backLower">
          
            {/* <SlArrowLeft onClick={handleBackClick} /> */}
          
        </div>
      </div>
    </div>
  );
};
