import React from 'react';
import './style.css';

const IngredientList = ({ selectedIngredients, handleRemoveIngredient }) => {
  return (
    <div>
      <ul className="ingredients">
        {selectedIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <i
              data-testid="trash-icon"
              className="fa fa-trash"
              style={{ color: '#181a1b', marginLeft: '5px', cursor: 'pointer' }}
              onClick={() => handleRemoveIngredient(ingredient)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;