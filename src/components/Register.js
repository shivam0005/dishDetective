import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/styles.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Check if username already exists
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.username === username) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    // Register the user
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Registration successful. Please login to continue.');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Register</h2>
        <div className="register-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
