import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DietaryRequirementsFilter = () => {
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
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('vegan', newSelectedVegan ? 'true' : 'false');
    queryParams.delete('vegetarian'); // Ensure only one dietary filter is active at a time
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleVegetarianFilterChange = () => {
    const newSelectedVegetarian = !selectedVegetarian;
    setSelectedVegetarian(newSelectedVegetarian);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('vegetarian', newSelectedVegetarian ? 'true' : 'false');
    queryParams.delete('vegan'); // Ensure only one dietary filter is active at a time
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const clearAllFilters = () => {
    setSelectedVegan(false);
    setSelectedVegetarian(false);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('vegan');
    queryParams.delete('vegetarian');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <>
      <h2>DIETARY REQUIREMENT FILTER:</h2>
      {selectedVegan && <button onClick={handleVeganFilterChange}>Clear Vegan Filter</button>}
      <button className={`navlink ${selectedVegan ? 'selected' : ''}`} onClick={handleVeganFilterChange}>
        VEGAN
      </button>
      {selectedVegetarian && <button onClick={handleVegetarianFilterChange}>Clear Vegetarian Filter</button>}
      <button className={`navlink ${selectedVegetarian ? 'selected' : ''}`} onClick={handleVegetarianFilterChange}>
        VEGETARIAN
      </button>
      {(selectedVegan || selectedVegetarian) && <button onClick={clearAllFilters}>Clear All Filters</button>}
    </>
  );
};

export default DietaryRequirementsFilter;
