import React from 'react';

const RecipeSearch = ({ searchInput, setSearchInput, handleAddIngredient }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for ingredients"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleAddIngredient}>Add Ingredient</button>
    </div>
  );
};

export default RecipeSearch;