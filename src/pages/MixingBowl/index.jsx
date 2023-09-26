import React, { useState } from 'react';

const MixingBowl = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  const fetchIngredients = async () => {
    try {
      const response = await fetch('https://lap-4-server.onrender.com/recipes');
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      if (data && Array.isArray(data.recipes)) {
        return data.recipes;
      } else {
        console.error('Invalid data:', data);
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchRecipes = async () => {
    const allRecipes = await fetchIngredients();
    if (selectedIngredients.length > 0 || searchInput.trim() !== '') {
      const filteredRecipes = allRecipes.filter((recipe) => {
        const recipeIngredients = recipe.ingredients
          .split(',')
          .map((ingredient) => ingredient.trim().toLowerCase());
        const searchWords = searchInput
          .toLowerCase()
          .split(' ')
          .filter((word) => word);

        const selectedIngredientsIncluded =
          selectedIngredients.length === 0 ||
          selectedIngredients.every((selectedIngredient) =>
            recipeIngredients.some((recipeIngredient) =>
              recipeIngredient.includes(selectedIngredient.toLowerCase())
            )
          );

        const searchInputMatched =
          searchWords.length === 0 ||
          searchWords.some((searchWord) =>
            recipeIngredients.some((recipeIngredient) =>
              recipeIngredient.includes(searchWord)
            )
          );

        return selectedIngredientsIncluded && searchInputMatched;
      });

      setRecipes(filteredRecipes);
      setShowRecipes(true);
    } else {
      setRecipes([]);
      setShowRecipes(false);
    }
  };

  const handleAddIngredient = () => {
    if (searchInput && !selectedIngredients.includes(searchInput)) {
      setSelectedIngredients([...selectedIngredients, searchInput]);
      setSearchInput('');
    }
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    const updatedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient !== ingredientToRemove
    );
    setSelectedIngredients(updatedIngredients);
  };

  const handleMixMeClick = () => {
    fetchRecipes();
  };

  return (
    <div>
      <h1>Mixing Bowl</h1>
      <div>
        <input
          type="text"
          placeholder="Search for ingredients"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      <div>
        <h2>Selected Ingredients:</h2>
        <ul>
          {selectedIngredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
              <button onClick={() => handleRemoveIngredient(ingredient)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleMixMeClick}>Mix Me!</button>
      {showRecipes && (
        <div>
          {recipes.length > 0 ? (
            <div>
              <h2>Recipes:</h2>
              <ul>
                {recipes.map((recipe, index) => (
                  <li key={index}>{recipe.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MixingBowl;
