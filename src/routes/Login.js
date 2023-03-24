import React from 'react'
import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import './Login.css';

function Login() {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState('password');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3300/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      document.cookie = `token=${data.accessToken}; path=/;`;
      document.cookie = `refreshToken=${data.refreshToken}; path=/;`;
      //window.location.href = '/';
      console.log(data);
    } else {
      console.log('Login failed');
    }
  }

  const handleClearForm = () => {
    setUsername("");
    setPassword("");
  }

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return;
    }
    setPasswordType('password')
  }
    

  return (
    <div className='login-container'>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUsername}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          type={passwordType}
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <span className="password-icon" onClick={togglePassword}>
          { passwordType === 'password'? <FaEye /> : <FaEyeSlash /> }
        </span>
        </div>
        <div className='login-button-form'>
          <button type="submit" onClick={handleLoginSubmit}>Log in</button>
          <button type="button" onClick={handleClearForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Login
