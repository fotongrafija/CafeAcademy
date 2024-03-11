import React from 'react'
import { useState } from 'react';
import "./loginForm.css";
import logo from "../assets/logo.svg"



export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
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
                </div>
                <p className='lostPass'><a href="/reset">Zaboravili ste lozinku?</a></p>
                <div>
                    <button type="submit" className='loginFormBtn'>Prijavi se</button>
                </div>
            </form>
            
            <p className='newUser'>Još uvek nemate kreiran nalog?<span><a href="/register">Registrujte se</a>.</span></p>
        </div>
      </div>
    );
  };
  
