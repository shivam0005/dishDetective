import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeSearch from './RecipeSerach'; // Import the RecipeSearch component
import '../styles/styles.css'; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUsername(user.username); // Set username from localStorage
      const userSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.id}`)) || [];
      setSearchHistory(userSearchHistory);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const handleClearHistory = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      localStorage.removeItem(`searchHistory_${user.id}`);
      setSearchHistory([]);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Welcome to the Dashboard, {username}!</h2> {/* Display username */}
        <div className="dashboard-links">
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="search-history">
          <h3>Search History:</h3>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index}>{item.query} - {new Date(item.timestamp).toLocaleString()}</li>
            ))}
          </ul>
          <button onClick={handleClearHistory}>Clear History</button>
        </div>
        <div>
          {/* Display RecipeSearch component for recipe search */}
          <RecipeSearch />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
