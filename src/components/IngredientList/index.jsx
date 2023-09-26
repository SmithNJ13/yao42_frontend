import React from 'react';

const IngredientList = ({ selectedIngredients, handleRemoveIngredient }) => {
  return (
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
  );
};

export default IngredientList;