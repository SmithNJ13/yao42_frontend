import React from 'react';
import './style.css';

const IngredientList = ({ selectedIngredients, handleRemoveIngredient }) => {
  return (
    <div>
      <ul className="ingredients">
        {selectedIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => handleRemoveIngredient(ingredient)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;