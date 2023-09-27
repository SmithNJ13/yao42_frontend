import React from 'react';
import './style.css';

const RecipeSearch = ({ searchInput, setSearchInput, handleAddIngredient }) => {
  return (
    <div className="recipe-search">
      <input
        type="text"
        placeholder="Search for ingredients"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="search-input"
      />
      <button 
        onClick={handleAddIngredient}
        className="search-button"
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default RecipeSearch;