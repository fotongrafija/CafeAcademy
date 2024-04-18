import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { Link } from 'react-router-dom'
import itemRemoveIcon from "../../assets/itemRemoveIcon.svg"

export const ChosenItems = () => {
    const { chosenItems, removeFromCart } = useContext(ShopContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className='listContainer'>
      <h2></h2>
      <ul>
        {chosenItems().map((item, index) => (
          <li key={index} className='liWrapper'>

            <h3>{item.quantity} x {item.productName}</h3>
            <Link to={`/product/${item.id}`}>
              {/* <img src={item.productImage} alt={item.productName} /> */}
              <div>
                
                {/* <p>Količina: </p> */}
                {/* <p>Cena: {item.price + sizePrices} RSD</p> */}
              </div>
            </Link>
            <div onClick={() => handleRemoveItem(item.id)}><img src={itemRemoveIcon}/></div>
            {/* <button onClick={() => handleRemoveItem(item.id)}>x</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
