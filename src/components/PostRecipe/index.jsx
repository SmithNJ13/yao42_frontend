import React, { useState } from 'react';
import PopUp from '../PopUp';

const PostRecipe = () => {
  
  const [name, setName] = useState('');
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [budget, setBudget] = useState('');
  const [instructions, setInstructions] = useState('');
  const [season, setSeason] = useState('');
  const [image, setImage] = useState('');
  const [openPopUp, SetOpenPopUp] = useState(false);

  const validateInput = () => {
    let isValid = true;

    if (name.length > 100) {
      alert('Name must be 100 characters or less.');
      isValid = false;
    }

    if (description.length > 500) {
      alert('Description must be 500 characters or less.');
      isValid = false;
    }

    if (ingredients.length > 500) {
      alert('Ingredients must be 500 characters or less.');
      isValid = false;
    }

    if (instructions.length > 500) {
      alert('Instructions must be 500 characters or less.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    const userId = localStorage.getItem('user_id');
    if (!userId) {
      alert('You must be logged in to post recipes!');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to post recipes!');
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
          vegetarian,
          vegan,
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
      setVegetarian(false);
      setVegan(false);
      setDescription('');
      setIngredients('');
      setInstructions('');
      setBudget('');
      setSeason('');
      setImage('');
      SetOpenPopUp(true);
    } catch (error) {
      console.error('Error submitting the recipe:', error);
    }
  };
  
  return (
    <>
    <form onSubmit={handleSubmit} className="Recipe_Form">
      <div className='tw-flex tw-items-center tw-my-2 tw-pb-4 '>
        
        <label className="recipe_label tw-w-1/3 tw-text-right tw-pr-4" htmlFor="name">Name</label>
        <input
          className="input_recipe tw-w-2/3 tw-py-2 tw-px-3 tw-border"
          type="text"
          id="recipe_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Spaghetti Bolognese"
          required
        />
      </div>
      <div className='tw-flex tw-items-center tw-my-2 tw-pb-4'>
  <label className="recipe_label tw-w-1/3 tw-text-right tw-pr-4 tw-flex-1" htmlFor="vegetarian">Vegetarian</label>
  <input checked={vegetarian} type="checkbox" id="recipe_vegetarian" onChange={(e) => setVegetarian(e.target.checked)} />
  <label className="recipe_label tw-w-1/3 tw-text-right tw-pr-4 tw-flex-1" htmlFor="vegan">Vegan</label>
  <input checked={vegan} type="checkbox" id="recipe_vegan" onChange={(e) => setVegan(e.target.checked)} />
</div>
      <div className='tw-flex tw-items-center tw-my-2 tw-pb-4'>
        <label className="recipe_label tw-w-1/3 tw-text-right tw-pr-4" htmlFor="description"> Description</label>
        <input
        className="tw-w-2/3 tw-py-2 tw-px-3 tw-border"
          type="text"
          id="recipe_description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A tasty dish originating from ..."
          required
        />
      </div>
      <div className='tw-flex tw-items-center tw-my-2 tw-pb-4'>
        <label htmlFor="ingredients" className="recipe_label tw-w-1/3 tw-text-right tw-pr-4">Ingredients</label>
        <input
         className="tw-w-2/3 tw-py-2 tw-px-3 tw-border"
          type="text"
          id="recipe_ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="ie: two tablespoons of ..."
          required
        />
      </div>
      <div className='tw-flex tw-items-center tw-my-2 tw-pb-4'>
        <label htmlFor="instructions" className="recipe_label tw-w-1/3 tw-text-right tw-pr-4">Instructions</label>
        <input
         className="tw-w-1/2 tw-py-2 tw-px-3 tw-border"
          type="text"
          id="recipe_instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Step 1. ..."
          required
        />
      </div>
      <div className='tw-flex tw-items-center tw-pb-4'>
        <label className="recipe_label tw-w-5/6 tw-text-right tw-pr-5" htmlFor="season"> Season</label>
        <select
         className="tw-w-1/2 tw-py-2 tw-px-3 tw-border"
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
      
        <label className="recipe_label tw-w-2/5 tw-text-right tw-pr-4" htmlFor="budget">Budget</label>
        <select
         className="tw-w-2/3 tw-py-2 tw-px-3 tw-border"
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
      
      <div className='tw-flex tw-items-center tw-my-2'>
        <label className="recipe_label tw-w-1/3 tw-text-right tw-pr-4" htmlFor="image">Image</label>
        <input
         className="tw-w-2/3 tw-py-2 tw-px-3 tw-border"
          type="text"
          id="recipe_season"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Input image URL here"
          required
        />
      </div>
      <div className="button_container">
      <button id ="button" type="submit">Submit</button>
      </div>
    </form>
    {openPopUp && <PopUp SetOpenPopUp={SetOpenPopUp}/>}
    </>
  );
};

export default PostRecipe;
