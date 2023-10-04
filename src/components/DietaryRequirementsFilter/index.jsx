import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./DietaryRequirementsFilter.css"

const DietaryFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVegan, setSelectedVegan] = useState(false);
  const [selectedVegetarian, setSelectedVegetarian] = useState(false);
  const [checkboxColors, setCheckboxColors] = useState({
    vegan: 'white',
    vegetarian: 'white'
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const veganParam = queryParams.get('vegan') === 'true';
    const vegetarianParam = queryParams.get('vegetarian') === 'true';
    setSelectedVegan(veganParam);
    setSelectedVegetarian(vegetarianParam);
  }, [location.search, location.pathname]); 

  useEffect(() => {
    const updatedColors = { ...checkboxColors };

    if (selectedVegan) {
      switch (location.pathname) {
        case '/spring':
          updatedColors.vegan = '#BADC83';
          break;
        case '/summer':
          updatedColors.vegan = '#FFE448';
          break;
        case '/autumn':
          updatedColors.vegan = '#FFA500';
          break;
        case '/winter':
          updatedColors.vegan = '#87CEEB';
          break;
        default:
          updatedColors.vegan = 'white';
      }
    } else {
      updatedColors.vegan = 'white';
    }

    if (selectedVegetarian) {
      switch (location.pathname) {
        case '/spring':
          updatedColors.vegetarian = '#BADC83';
          break;
        case '/summer':
          updatedColors.vegetarian = '#FFE448';
          break;
        case '/autumn':
          updatedColors.vegetarian = '#FFA500';
          break;
        case '/winter':
          updatedColors.vegetarian = '#87CEEB';
          break;
        default:
          updatedColors.vegetarian = 'white';
      }
    } else {
      updatedColors.vegetarian = 'white';
    }

    setCheckboxColors(updatedColors);
  }, [selectedVegan, selectedVegetarian, location.pathname]);

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
        <span className="checkmark" style={{ backgroundColor: checkboxColors.vegan }}></span>
      </label>
      <label className="dietaryRequirementsCheckbox">
        VEGETARIAN
        <input 
          type="checkbox" 
          checked={selectedVegetarian} 
          onChange={handleVegetarianFilterChange}
        />
        <span className="checkmark" style={{ backgroundColor: checkboxColors.vegetarian }}></span>
      </label>
    </div>
  );
};

export default DietaryFilter;
