import React, {useState} from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import defaultNavbar from '../../assets/default-navbar.png';
import springNavbar from '../../assets/spring-navbar.png';
import summerNavbar from '../../assets/summer-navbar.png';
import autumnNavbar from '../../assets/autumn-navbar.png';
import winterNavbar from '../../assets/winter-navbar.png';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSeasonsMenu, setShowSeasonsMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedVegan, setSelectedVegan] = useState(false); 
  const [selectedVegetarian, setSelectedVegetarian] = useState(false); 

  const isSeasonalPage = ['/spring', '/summer', '/autumn', '/winter'].includes(location.pathname);

  const toggleSeasonsMenu = () => {
    setShowSeasonsMenu(!showSeasonsMenu);
  };

  let activeStyle = {
    fontWeight: 'bold'};

  const getNavbarStyle = () => {
    if (location.pathname === '/spring') {
      return {
        backgroundImage: `url(${springNavbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#181A1B'
      };
    } else if (location.pathname === '/summer') {
      return {
        backgroundImage: `url(${summerNavbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#181A1B'
      };
    } else if (location.pathname === '/autumn') {
      return {
        backgroundImage: `url(${autumnNavbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#181A1B'
      };
    } else if (location.pathname === '/winter') {
      return {
        backgroundImage: `url(${winterNavbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#181A1B'
      };
    } else {
      return {
        backgroundImage: `url(${defaultNavbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    }
  };

  const isLoggedIn = () => {
    return localStorage.getItem('user_id') && localStorage.getItem('token') && localStorage.getItem('username') && localStorage.getItem('email');
  };

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login'); 
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    navigate(`?filter=${filter}&vegan=${selectedVegan}&vegetarian=${selectedVegetarian}`);
  };

  const handleVeganFilterChange = () => {
    const newSelectedVegan = !selectedVegan;
    setSelectedVegan(newSelectedVegan);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('vegan', newSelectedVegan ? 'true' : 'false');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };
  
  const handleVegetarianFilterChange = () => {
    const newSelectedVegetarian = !selectedVegetarian;
    setSelectedVegetarian(newSelectedVegetarian);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('vegetarian', newSelectedVegetarian ? 'true' : 'false');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const clearFilter = () => {
    setSelectedFilter(null);
    navigate(`/${location.pathname.split('/').pop()}`);
  };

  const handleClearVeganFilter = () => {
    setSelectedVegan(false);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('vegan');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };
  
  const handleClearVegetarianFilter = () => {
    setSelectedVegetarian(false);
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('vegetarian');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const clearAllFilters = () => {
    setSelectedFilter(null);
    setSelectedVegan(false);
    setSelectedVegetarian(false);
    navigate(`/${location.pathname.split('/').pop()}`);
  };
  

 

  return (
    <>
      <div className="sidebar" style={getNavbarStyle()}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink> 
            <NavLink to='/profile' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>ADD RECIPE</NavLink>
            <NavLink to='/mixingbowl' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MIXING BOWL</NavLink>
            <NavLink to='/shopping' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>SHOPPING LIST</NavLink>            
            { isLoggedIn() ? (
              <button onClick={handleLogout} className='navlink'>LOG OUT</button>
            ) : (
              <NavLink to='/register' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>SIGN UP</NavLink>
            )}

            <div className="collapsible-menu">
              <button 
                onClick={toggleSeasonsMenu}
                className="collapsible-button"
              >
                SEASONS
                <i className={`fas fa-chevron-${showSeasonsMenu ? 'up' : 'down'}`}></i>
              </button>
              {showSeasonsMenu && (
                <div className="collapsible-content">
                  <NavLink to='/spring' className='seasonsDrop' style={({isActive}) => (isActive ? activeStyle : undefined)}>SPRING</NavLink>
                  <NavLink to='/summer' className='seasonsDrop' style={({isActive}) => (isActive ? activeStyle : undefined)}>SUMMER</NavLink>
                  <NavLink to='/autumn' className='seasonsDrop' style={({isActive}) => (isActive ? activeStyle : undefined)}>AUTUMN</NavLink>
                  <NavLink to='/winter' className='seasonsDrop' style={({isActive}) => (isActive ? activeStyle : undefined)}>WINTER</NavLink>
                </div>
              )}
            </div>

{isSeasonalPage && (
             <>
              <br />
            <h2> BUDGET FILTER:</h2>
            <br />
            {selectedFilter && (
               <button onClick={clearFilter}>Clear Filter</button>
             )}
             
            <button
              className={`navlink ${selectedFilter === '£' ? 'selected' : ''}`}
              onClick={() => handleFilterChange('£')}
            >
              £
            </button>
            <button
              className={`navlink ${selectedFilter === '££' ? 'selected' : ''}`}
              onClick={() => handleFilterChange('££')}
            >
              ££
            </button>
            <button
              className={`navlink ${selectedFilter === '£££' ? 'selected' : ''}`}
              onClick={() => handleFilterChange('£££')}
            >
              £££
            </button>
           </>
            )}

{isSeasonalPage && (
            <>
<br />
            <h2> DIETARY REQUIREMENT FILTER:</h2>
            <br />
            {selectedVegan && (
              <button className="clear-filter-button" onClick={handleClearVeganFilter}>
                Clear Vegan Filter
              </button>
            )}
            <button
              className={`navlink ${selectedVegan ? 'selected' : ''}`}
              onClick={handleVeganFilterChange}
            >
              VEGAN
            </button>
            {selectedVegetarian && (
              <button className="clear-filter-button" onClick={handleClearVegetarianFilter}>
                Clear Vegetarian Filter
              </button>
            )}
            <button
              className={`navlink ${selectedVegetarian ? 'selected' : ''}`}
              onClick={handleVegetarianFilterChange}
            >
              VEGETARIAN
            </button>
            {selectedFilter || selectedVegan || selectedVegetarian ? (
                <button onClick={clearAllFilters}>Clear All Filters</button>
              ) : null}
              <br/>
           
</>
)}
            
          </div>
        </nav>    
        <Outlet />
        <footer className='footer'>
          <i className="fa-regular fa-copyright" style={{ color: '#181a1b' }}></i> SzndChef 2023
        </footer>
      </div>
    </>
  );
};

export default NavBar;
