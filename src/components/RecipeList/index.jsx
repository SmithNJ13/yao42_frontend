import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        <div>
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
  );
};

export default RecipeList;