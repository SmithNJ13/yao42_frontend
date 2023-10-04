import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./BudgetFilter.css"

const BudgetFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [checkboxColors, setCheckboxColors] = useState({
    '£': 'white',
    '££': 'white',
    '£££': 'white'
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.getAll('filter');
    setSelectedFilters(filterParam);
  }, [location.search, location.pathname]);

  useEffect(() => {
    const updatedColors = { ...checkboxColors };

    Object.keys(updatedColors).forEach(filter => {
      if (selectedFilters.includes(filter)) {
        switch (location.pathname) {
          case '/spring':
            updatedColors[filter] = '#BADC83';
            break;
          case '/summer':
            updatedColors[filter] = '#FFE448';
            break;
          case '/autumn':
            updatedColors[filter] = '#FFA500';
            break;
          case '/winter':
            updatedColors[filter] = '#87CEEB';
            break;
          default:
            updatedColors[filter] = 'white';
        }
      } else {
        updatedColors[filter] = 'white';
      }
    });

    setCheckboxColors(updatedColors);
  }, [selectedFilters, location.pathname]);


  const handleFilterChange = (filter) => {
    const updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(filter)) {
      updatedFilters.splice(updatedFilters.indexOf(filter), 1);
    } else {
      updatedFilters.push(filter);
    }
    setSelectedFilters(updatedFilters);

    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('filter');
    updatedFilters.forEach((f) => {
      queryParams.append('filter', f);
    });
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  

  return (
    <div id="budgetFilter">
      <h2> BUDGET:</h2>
      <label className="budgetCheckbox">
        £
        <input
          type="checkbox"
          value="£"
          checked={selectedFilters.includes('£')}
          onChange={() => handleFilterChange('£')}
        />
        <span className="checkmark" style={{ backgroundColor: checkboxColors['£'] }}></span>
      </label>
      <label className="budgetCheckbox">
        ££
        <input
          type="checkbox"
          value="££"
          checked={selectedFilters.includes('££')}
          onChange={() => handleFilterChange('££')}
        />
        <span className="checkmark" style={{ backgroundColor: checkboxColors['££'] }}></span>
      </label>
      <label className="budgetCheckbox">
        £££
        <input
          type="checkbox"
          value="£££"
          checked={selectedFilters.includes('£££')}
          onChange={() => handleFilterChange('£££')}
        />
        <span className="checkmark" style={{ backgroundColor: checkboxColors['£££'] }}></span>
      </label>
    </div>
  );
};

export default BudgetFilter;