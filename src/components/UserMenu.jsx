import React, { useState } from 'react'
import profil from '../assets/profil.svg'
import logout from '../assets/logout.svg'
import { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import Avatar from "../assets/Avatar.svg"

export const UserMenu = () => {

    const { isLoggedIn, logOut } = useContext(ShopContext)
    const [menuClass, setMenuClass] = useState(false)

    function handleClick() {
        setMenuClass((prev) => !prev)
    }
    
  return (
    <div className='profilContainer'>
        <div className='navbarIcon'><img src={Avatar} alt="" onClick={handleClick}/></div>
        <div className={menuClass ? `userMenuContainer activeClass` : `userMenuContainer hiddenClass`}>
            
            <div className="firstOption">
                <img src={profil} alt="" />
                <p>Prikaži profil</p>
            </div>
            <div className="logout" >
                <img src={logout} alt="" />
                <p onClick={logOut}>Odjavi se</p>
            </div>
        </div>
    </div>   
  )
}
