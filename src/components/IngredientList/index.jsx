import React from 'react';

const IngredientList = ({ selectedIngredients, handleRemoveIngredient }) => {
  return (
    <div>
      <ul>
        {selectedIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => handleRemoveIngredient(ingredient)}> X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;