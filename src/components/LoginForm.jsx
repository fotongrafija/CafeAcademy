import React, { useContext } from 'react'
import { useState } from 'react';
import "./loginForm.css";
import logo from "../assets/logo.svg"
import inputAlert from "../assets/inputAlert.svg"
import { Link } from 'react-router-dom';
import { ChosenItems } from '../pages/cart/ChosenItems';
import { ShopContext } from "../context/shop-context";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false)
  
    const {isLoggedIn, logIn, logOut} = useContext(ShopContext)

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here
      if (password !== password) setWrongPassword(true)
      console.log('Email:', email);
      console.log('Password:', password);
      
      logIn()
    };
  
    return (
      <div className='loginFormContainer'>
        <div className='navBackground'></div>
        <div className='loginFormWrapper'>
            <img className="loginLogo" src={logo}  alt="CoffeShop Logo" />
            <h2>Prijavi se</h2>
            <form onSubmit={handleSubmit} className='loginForm'>
                <div className='emailWrapper'>
                    <label htmlFor="email" className='emailForm'>Email:</label>
                    <input
                        placeholder='Unesite Email adresu'
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                
                <div className='passwordWrapper'>
                    <label htmlFor="password" className='passForm'>Password:</label>
                    <input
                        placeholder='Unesite lozinku'
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {wrongPassword && <span className='inputAlert'><img src={inputAlert} alt="" />Uneli ste pogrešnu lozinku. Pokušajte ponovo.</span>}
                </div>
                <p className='lostPass'><Link to='/reset'><a href="#">Zaboravili ste lozinku?</a></Link></p>
                <div>
                    <button type="submit" className='loginFormBtn'>Prijavi se</button>
                </div>
            </form>
            
            <p className='newUser'>Još uvek nemate kreiran nalog?<span><Link to='/register'><a href="#">Registrujte se</a></Link>.</span></p>
        </div>
      </div>
    );
  };
  
