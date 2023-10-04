/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const RecipeSearch = ({ searchInput, setSearchInput, handleAddIngredient }) => {
  return (
    <div className="recipe-search">
      <input
        data-testid="input"
        type="text"
        placeholder="Search for ingredients"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="search-input"
      />
      <button
        data-testid="button" 
        onClick={handleAddIngredient}
        className="search-button"
      >
        Add
      </button>
    </div>
  );
};

export default RecipeSearch;
