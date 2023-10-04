import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CarouselComponent, RecipeCard, Loading, ScrollToTopButton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeBGColour } from '../../actions/bgActions';
import axios from "axios";
import "./style.css";

const seasons = ["spring", "summer", "autumn", "winter"];

const SeasonalPage = () => {
  const { season } = useParams();
  const [recipes, setRecipes] = useState();
  const [ingredients, setIngredients] = useState();
  const displaySeason = season.toUpperCase();
  const dispatch = useDispatch();
  const BGColour = useSelector(state => state.BGColour);
  const queryParams = new URLSearchParams(location.search);
  const selectedFilter = queryParams.get('filter'); 
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const selectedVegan = queryParams.get('vegan') === 'true';
  const selectedVegetarian = queryParams.get('vegetarian') === 'true';

  useEffect(() => {
    getIngredients();
    getRecipes();

    function handleScroll() {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const BGStyle = {
    backgroundColor: BGColour,
  };

  const handleBG = (colour) => {
    dispatch(changeBGColour(colour));
  };

  if (!seasons.includes(season)) {
    return <Navigate replace={true} to="/notfound" />;
  }

  async function getRecipes() {
    await axios.get("https://lap-4-server.onrender.com/recipes")
      .then(resp => {
        const data = resp.data.recipes;
        setRecipes(data);
      });
  }

  async function getIngredients() {
    await axios.get("https://lap-4-server.onrender.com/ingredients")
      .then(resp => {
        const data = resp.data.ingredients;
        setIngredients(data);
      });
  }

  if (!recipes || !ingredients) {
    switch (season) {
      case "spring":
        handleBG("#fafcf8");
        break;
      case "summer":
        handleBG("#fffefa");
        break;
      case "autumn":
        handleBG("#fffcf8");
        break;
      case "winter":
        handleBG("#f9fcff");
        break;
    }
    const getLoadingColor = () => {
      switch (location.pathname) {
        case '/spring':
          return '#BADC83'; 
        case '/summer':
          return '#FFE448'; 
        case '/autumn':
          return '#FFA500';
        case '/winter':
          return '#87CEEB';
        default:
          return '#008080';
      }
    };
    return (
      <div style={{ backgroundColor: getLoadingColor() }} className='loading'>
        <Loading />
      </div>
    );
  }

  const filteredRecipes = selectedFilter
  ? recipes.filter(r => r.season.toLowerCase().includes(season) && r.budget === selectedFilter)
  : recipes.filter(r => r.season.toLowerCase().includes(season));

const ourRecipes = filteredRecipes.filter(recipe => {
  const isOurRecipe = recipe.user_id === 1;
  const isVegan = recipe.vegan === true;
  const isVegetarian = recipe.vegetarian === true;
  return isOurRecipe && ((!selectedVegan && !selectedVegetarian) || (selectedVegan && isVegan) || (selectedVegetarian && isVegetarian));
});

const userCreatedRecipes = filteredRecipes.filter(recipe => recipe.user_id !== 1);

const veganRecipes = filteredRecipes.filter(recipe => recipe.vegan === true && !ourRecipes.includes(recipe));
const vegetarianRecipes = filteredRecipes.filter(recipe => recipe.vegetarian === true && !ourRecipes.includes(recipe));

return (
  <div style={BGStyle} className="SeasonalPage">
    <div id="MainContent">
      <div id="Title" className={season}>
        {displaySeason}
      </div>
      <div id="Carousel" className={season}>
        <CarouselComponent ingredients={ingredients} season={season} />
      </div>
      <div id ='User_Admin_Recipe_Heading'>
        <h2>Our Recipes</h2>
      </div>
      <div id='RecipeInfo'>
        {ourRecipes.length > 0 && (
          <>
            {ourRecipes.map((recipe, index) => (
              <div key={index + 1} id='card'>
                <RecipeCard recipe={recipe} season={season} />
              </div>
            ))}
          </>
        )}
      </div>
      <div id="Community_Recipes_Heading">
        <h2>Community Recipes</h2>
      </div>
      <div id='RecipeInfo'>
        {selectedVegan && (
          <>
            {veganRecipes.map((recipe, index) => (
              <div key={index + 1 + ourRecipes.length + userCreatedRecipes.length} id='card'>
                <RecipeCard recipe={recipe} season={season} />
              </div>
            ))}
          </>
        )}
        {selectedVegetarian && (
          <>
            {vegetarianRecipes.map((recipe, index) => (
              <div key={index + 1 + ourRecipes.length + userCreatedRecipes.length} id='card'>
                <RecipeCard recipe={recipe} season={season} />
              </div>
            ))}
          </>
        )}
        {!selectedVegan && !selectedVegetarian && (
          <>
            {userCreatedRecipes.length > 0 && (
              <>
                {userCreatedRecipes.map((recipe, index) => (
                  <div key={index + 1 + ourRecipes.length} id='card'>
                    <RecipeCard recipe={recipe} season={season} />
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </body>
  );
}

export default SeasonalPage;
