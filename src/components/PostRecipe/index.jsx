/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';

const PostRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [budget, setBudget] = useState('');
  const [instructions, setInstructions] = useState('');
  const [season, setSeason] = useState('');
  const [image, setImage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      alert('user_id not found in local storage!');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('token not found in local storage!');
      return;
    }
    
    try {
      const response = await fetch('https://lap-4-server.onrender.com/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          description,
          ingredients,
          budget,
          instructions,
          season,
          image,
          user_id: userId,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Recipe submitted successfully:', data);

      setName('');
      setDescription('');
      setIngredients('');
      setInstructions('');
      setBudget('');
      setSeason('');
      setImage('');
      
    } catch (error) {
      console.error('Error submitting the recipe:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} class="Recipe_Form">
      <div>
        <label class="recipe_label" htmlFor="name">Name:</label>
        <input
          class="input_recipe"
          type="text"
          id="recipe_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Spaghetti Bolognese"
          required
        />
      </div>
      <div>
        <label class="recipe_label" htmlFor="description">Description:</label>
        <input
          type="text"
          id="recipe_description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A tasty dish originating from ..."
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients" class="recipe_label">Ingredients:</label>
        <input
          type="text"
          id="recipe_ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="ie: two tablespoons of ..."
          required
        />
      </div>
      <div>
        <label htmlFor="instructions" class="recipe_label">Instructions:</label>
        <input
          type="text"
          id="recipe_instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Step 1. Afford a home"
          required
        />
      </div>
      <div>
        <label class="recipe_label" htmlFor="season">Season:</label>
        <select
          id="recipe_season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          required
        >
          <option value="" disabled>Select a season</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
      <div>
        <label class="recipe_label" htmlFor="budget">Budget:</label>
        <select
          id="recipe_budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        >
          <option value="" disabled>Select a budget</option>
          <option value="£">£</option>
          <option value="££">££</option>
          <option value="£££">£££</option>
        </select>
      </div>
      <div>
        <label class="recipe_label" htmlFor="image">Image:</label>
        <input
          type="text"
          id="recipe_season"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Input image URL here"
          required
        />
      </div>
      <div class="button_container">
      <button id ="button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PostRecipe;
