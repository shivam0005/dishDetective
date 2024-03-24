// Home.js, Login.js, Register.js, Dashboard.js, RecipeSearch.js

import React from 'react';
import Header from './Header';
import '../styles/styles.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Welcome to Recipe App!</h1>
      </div>
    </div>
  );
};

export default Home;
