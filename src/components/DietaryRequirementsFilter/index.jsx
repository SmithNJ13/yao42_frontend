import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./DietaryRequirementsFilter.css"

const DietaryFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVegan, setSelectedVegan] = useState(false);
  const [selectedVegetarian, setSelectedVegetarian] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const veganParam = queryParams.get('vegan') === 'true';
    const vegetarianParam = queryParams.get('vegetarian') === 'true';
    setSelectedVegan(veganParam);
    setSelectedVegetarian(vegetarianParam);
  }, [location.search]);

  const handleVeganFilterChange = () => {
    const newSelectedVegan = !selectedVegan;
    setSelectedVegan(newSelectedVegan);
    updateQueryParams(newSelectedVegan, selectedVegetarian);
  };

  const handleVegetarianFilterChange = () => {
    const newSelectedVegetarian = !selectedVegetarian;
    setSelectedVegetarian(newSelectedVegetarian);
    updateQueryParams(selectedVegan, newSelectedVegetarian);
  };

  const updateQueryParams = (vegan, vegetarian) => {
    const queryParams = new URLSearchParams(location.search);
    if (vegan) {
      queryParams.set('vegan', 'true');
    } else {
      queryParams.delete('vegan');
    }
    if (vegetarian) {
      queryParams.set('vegetarian', 'true');
    } else {
      queryParams.delete('vegetarian');
    }
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <div id="dietaryRequirementsFilter">
      <h2>DIETARY REQUIREMENTS:</h2>
      <label className="dietaryRequirementsCheckbox">
        VEGAN
        <input 
            type="checkbox" 
            checked={selectedVegan} 
            onChange={handleVeganFilterChange} 
        />
      </label>
      <label className="dietaryRequirementsCheckbox">
        VEGETARIAN
        <input 
            type="checkbox" 
            checked={selectedVegetarian} 
            onChange={handleVegetarianFilterChange} 
        />
      </label>
    </div>
  );
};

export default DietaryFilter;
