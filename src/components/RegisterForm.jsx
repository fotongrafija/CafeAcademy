import React from 'react'
import { useState } from 'react';
import './registerForm.css'
import logo from "../assets/logo.svg"
import inputAlert from "../assets/inputAlert.svg"


export const RegisterForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
  
    const handleFullNameChange = (e) => {
      setFullName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      // Check if email exists (simulated)
      // This logic should be replaced with actual backend validation
      // For now, let's simulate email existence randomly
      const exists = Math.random() < 0.5;
      setEmailExists(exists);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setPasswordMismatch(false); // Reset password mismatch error
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setPasswordMismatch(true);
        return;
      }
      // Add your registration logic here
      const [firstName, ...lastNameArray] = fullName.split(' ');
      const lastName = lastNameArray.join(' ');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div className="loginFormContainer">
                <div className='navBackground'></div>
            <div className='registerFormWrapper'>
            <img className="loginLogo" src={logo}  alt="CoffeShop Logo" />
                <h2>Registracija</h2>
                <form onSubmit={handleSubmit} className="registerForm">
                <div className="nameWrapper">
                    <label htmlFor="fullName">Ime i prezime:</label>
                    <input
                    placeholder='Unesite Ime i Prezime'
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={handleFullNameChange}
                    required
                    />
                </div>
                <div className="emailWrapper">
                    <label htmlFor="email">Email:</label>
                    <input
                    placeholder='Unesite email adresu'
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                    {emailExists && <span className='inputAlert'><img src={inputAlert} alt="" />Već postoji nalog sa ovom email adresom.</span>}
                </div>
                <div className="passwordWrapper">
                    <label htmlFor="password">Lozinka:</label>
                    <input
                    placeholder='Unesite lozinku'
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </div>
                <div className="passwordWrapper">
                    <label htmlFor="confirmPassword">Potvrdi lozinku:</label>
                    <input
                    placeholder='Potvrdite lozinku'
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    />
                    {passwordMismatch && <span className='inputAlert'><img src={inputAlert} alt="" />Lozinke se ne podudaraju. Pokusajte ponovo.</span>}
                </div>
                <div>
                    <button type="submit" className='loginFormBtn registerBtn'>Registruj se</button>
                </div>
                </form>
                <p className='newUser'>
                Već imate nalog? <span><a href="/login">Prijavite se</a></span>.
                </p>
            </div>
      </div>
    );
  };

