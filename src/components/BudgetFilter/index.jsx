import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./BudgetFilter.css"

const BudgetFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.getAll('filter');
    setSelectedFilters(filterParam);
  }, [location.search]);

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

  const clearFilter = () => {
    setSelectedFilters([]);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('filter');
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
      </label>
      <label className="budgetCheckbox">
        ££
        <input
          type="checkbox"
          value="££"
          checked={selectedFilters.includes('££')}
          onChange={() => handleFilterChange('££')}
        />
      </label>
      <label className="budgetCheckbox">
        £££
        <input
          type="checkbox"
          value="£££"
          checked={selectedFilters.includes('£££')}
          onChange={() => handleFilterChange('£££')}
        />
      </label>
    </div>
  );
};

export default BudgetFilter;