import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BudgetFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterParam = queryParams.get('filter');
    setSelectedFilter(filterParam);
  }, [location.search]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('filter', filter);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const clearFilter = () => {
    setSelectedFilter(null);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('filter');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <>
      <h2> BUDGET FILTER:</h2>
      {selectedFilter && <button onClick={clearFilter}>Clear Filter</button>}
      <button className={`navlink ${selectedFilter === '£' ? 'selected' : ''}`} onClick={() => handleFilterChange('£')}>£</button>
      <button className={`navlink ${selectedFilter === '££' ? 'selected' : ''}`} onClick={() => handleFilterChange('££')}>££</button>
      <button className={`navlink ${selectedFilter === '£££' ? 'selected' : ''}`} onClick={() => handleFilterChange('£££')}>£££</button>
    </>
  );
};

export default BudgetFilter;
