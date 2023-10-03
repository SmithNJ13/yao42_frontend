import React, { useState, useEffect } from 'react';
import { IngredientList, RecipeList, RecipeSearch } from "../../components"
import Lottie from 'lottie-react'
import animationData from '../../assets/mixing-bowl.json'
import mixingBowlImage from '../../assets/mixing-bowl-still.png'
import './style.css'

const MixingBowl = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    setLoading(true);
    
    setTimeout(async () => {
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
            selectedIngredients.some((selectedIngredient) =>
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

      setLoading(false);
    }, 2000);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="mixing-bowl-container">
        <h1 id="title">MIXING BOWL</h1>
        <div className="mixing-bowl">
          <div className="left-column">
            <RecipeSearch
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              handleAddIngredient={handleAddIngredient}
            />
            <IngredientList
              selectedIngredients={selectedIngredients}
              handleRemoveIngredient={handleRemoveIngredient}
            />
          </div>
          <div className="right-column">
            {loading ? (
              <Lottie 
                className="animation"
                animationData={animationData}
              />
            ) : (
              <>
                <button
                  onClick={handleMixMeClick}
                  className="mix-button"
                  disabled={loading}
                >
                  {showRecipes ? "Try Again?" : "Find Recipes!"}
                </button>
                {showRecipes && !loading && <RecipeList recipes={recipes} />}
                {showRecipes && !loading ? null : (
                  <img
                    src={mixingBowlImage}
                    alt="Mixing Bowl"
                    className="mixing-bowl-still"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
};

export default MixingBowl;
