import React from 'react';
import { RecipeCard } from "../../components"
import './style.css'

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-cards">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe}/>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
