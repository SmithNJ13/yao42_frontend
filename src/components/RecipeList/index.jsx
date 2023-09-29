import React from 'react';
import { RecipeCard } from "../../components"
import './style.css'

const RecipeList = ({ recipes, season }) => {
  return (
    <div className="recipe-cards">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} season={season} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
