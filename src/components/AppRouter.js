// AppRouter.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import RecipeSearch from './RecipeSerach';
// import RecipeDetails from './RecipeDetails';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<RecipeSearch />} />
        {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
