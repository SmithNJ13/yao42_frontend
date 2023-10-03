import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeBGColour } from '../../actions/bgActions';
import { Comments, LikeButton, Loading } from '../../components';
import axios from 'axios';
import "./style.css";

const ViewRecipe = () => {
  const { name } = useParams();
  const [recipes, setRecipes] = useState();
  const dispatch = useDispatch();
  const BGColour = useSelector((state) => state.BGColour);
  const BGStyle = {
    backgroundColor: BGColour,
  };

  const handleBG = (colour) => {
    dispatch(changeBGColour(colour));
  };

  async function getRecipes() {
    await axios.get("https://lap-4-server.onrender.com/recipes")
      .then(resp => {
        const data = resp.data.recipes;
        setRecipes(data);
      });
  }

  useEffect(() => {
    getRecipes();
    handleBG("#F7F6FE");
  }, []);

  const handleAddToList = async (ingredients) => {
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    
    try {
      await axios.post('https://lap-4-server.onrender.com/lists', {
        user_id: parseInt(user_id, 10),
        items: ingredients,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert('Ingredient added to your shopping list!');
    } catch (error) {
      console.error('Error:', error);
      alert('Please sign up and login to add these ingredients to your shopping list');
    }
  };

  if (!recipes) {
    return <Loading />;
  }


  const handleRemoveFromList = async (recipeIngredients) => {
    const token = localStorage.getItem('token');
    
    try {
        
        const listsResponse = await axios.get('https://lap-4-server.onrender.com/lists', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        
        const listItemToDelete = listsResponse.data.lists.find(listItem => 
            listItem.items === recipeIngredients
        );

        if (listItemToDelete) {
            
            await axios.delete(`https://lap-4-server.onrender.com/lists/${listItemToDelete.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Recipe ingredients removed from your shopping list!');
        } else {
            alert('Ingredient not found in your shopping list!');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while trying to remove ingredients from the shopping list.');
    }
};

  return (
    <div style={BGStyle} className="ViewRecipe">
      <>
        {recipes.filter((r) => r.name.includes(name))
          .map((recipe, key) => (
            <div id="Information" key={key}>
              <div className="top">
                <div id="ImageBox">
                  <img className="tw-max-w-none image" src={recipe.image} alt={recipe.name} />
                </div>
                <div id="Headings">
                  <div className="one">
                    <p>{name}</p>
                  </div>
                  <div className="two">
                    <p>{recipe.season}</p>
                  </div>
                  <div>
                  <button id ="shopping_button" onClick={() => handleAddToList(recipe.ingredients)}>Add to my Shopping List</button>
                  <button id="shopping_button" onClick={() => handleRemoveFromList(recipe.ingredients)}>Remove from my Shopping List</button>
                  </div>
                  
                </div>
              </div>
              <div id="MainBody">
                <div id="Description">
                  <h3><b>Description: </b></h3>
                  <p>{recipe.description}</p>
                </div>
                <div id="Ingredients">
                  <h3><b>Ingredients: </b></h3>
                  <p>{recipe.ingredients}</p>
                </div>
                <div id="Instructions">
                  <h3><b>Instructions: </b></h3>
                  <p>{recipe.instructions}</p>
                </div>
              </div>
              <div className="bottom">
                <div id="LikeButton">
                  <p>Like this recipe!</p>
                  <div className="heart">
                    <LikeButton recipe_id={recipe.id} />
                  </div>
                </div>
                
              </div>
              <div id="SideInfo">
                <div id="Comments">
                  <Comments recipe_id={recipe.id} />
                </div>
              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default ViewRecipe;
