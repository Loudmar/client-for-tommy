import React from 'react'
import { useState } from "react";
import './Login.css';

//username: kminchelle
//password: 0lelplR

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      document.cookie = `token=${data.token}; path=/;`
    } else {
      console.log('Authentication failed');
    }
  }
    

  return (
    <div className='login-container'>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
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
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login
