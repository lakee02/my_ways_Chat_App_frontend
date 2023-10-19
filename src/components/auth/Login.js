import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Create a user object with the email and password
    const user = {
      email,
      password,
    };

    
    axios
      .post('https://chat-app-myways.onrender.com/auth/login', user)
      .then((response) => {
        // Handle successful login, e.g., store user token in local storage
        const token = response.data.token;
        localStorage.setItem('token', token);

        
        
        window.location.href = '/chat';
      })
      .catch((error) => {
        
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;