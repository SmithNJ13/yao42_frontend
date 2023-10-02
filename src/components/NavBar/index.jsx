import React from 'react';
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

  return (
    <>
      <div className="sidebar" style={getNavbarStyle()}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink> 
            <NavLink to='/profile' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>ADD RECIPE</NavLink>
            <NavLink to='/mixingbowl' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MIXING BOWL</NavLink>            
            { isLoggedIn() ? (
              <button onClick={handleLogout} className='navlink'>LOG OUT</button>
            ) : (
              <NavLink to='/register' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>SIGN UP</NavLink>
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
