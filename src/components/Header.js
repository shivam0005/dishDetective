// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  return (
    <header>
      <h1>Recipe App</h1>
      <p>Find delicious recipes and create amazing dishes.</p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
