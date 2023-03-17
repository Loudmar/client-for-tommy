import React from 'react'
import { useState } from "react";
import './Login.css';

function Login() {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      window.location.href = '/home';
      //console.log(data);
    } else {
      console.log('Login failed');
    }
  }

  const handleClearForm = () => {
    setUsername("");
    setPassword("");
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
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
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
