import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; 

const RecipeSearch = () => {
  // const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_ID = '9d2af817';
  const API_KEY = '5ed7faec74579df67a296afb25d2bea0';

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data);

      // Store search history in localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const timestamp = new Date().getTime();
        const searchItem = { query, timestamp };
        const userSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.id}`)) || [];
        localStorage.setItem(`searchHistory_${user.id}`, JSON.stringify([...userSearchHistory, searchItem]));
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Recipe Search</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredients or keywords..."
        />
        <button onClick={handleSearch}>Search</button>
        
        {/* Display search results */}
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe">
              <h3>{recipe.recipe.label}</h3>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p>Ingredients: {recipe.recipe.ingredients.map(ingredient => ingredient.text).join(', ')}</p>
              <p>Calories: {Math.round(recipe.recipe.calories)}</p>
              <p>Total Nutrients:</p>
              <ul>
                {Object.keys(recipe.recipe.totalNutrients).map(nutrientKey => (
                  <li key={nutrientKey}>
                    {recipe.recipe.totalNutrients[nutrientKey].label}: {recipe.recipe.totalNutrients[nutrientKey].quantity.toFixed(2)} {recipe.recipe.totalNutrients[nutrientKey].unit}
                  </li>
                ))}
              </ul>
              <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
