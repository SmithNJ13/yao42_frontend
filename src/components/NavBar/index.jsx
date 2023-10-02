import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import navbar from '../../assets/default-navbar.png';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  const getNavbarStyle = () => {
    if (location.pathname === '/spring' || location.pathname === '/summer' || location.pathname === '/autumn' || location.pathname === '/winter') {
      switch (location.pathname) {
        case '/spring':
          return {
            backgroundColor: '#BADC83',
            color: '#181A1B'
          };
        case '/summer':
          return {
            backgroundColor: '#FFE448',
            color: '#181A1B'
          };
        case '/autumn':
          return {
            backgroundColor: '#FFA500',
            color: '#181A1B'
          };
        case '/winter':
          return {
            backgroundColor: '#87CEEB',
            color: '#181A1B'
          };
        default:
          return {};
      }
    } else {
      return {
        backgroundImage: `url(${navbar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    }
  };

  return (
    <>
      <div className="sidebar" style={getNavbarStyle()}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink'>HOME</NavLink> 
            <NavLink to='/profile' className='navlink'>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink'>ADD RECIPE</NavLink>
            <NavLink to='/mixingbowl' className='navlink'>MIXING BOWL</NavLink>
            <NavLink to='/register' className='navlink'>SIGN UP</NavLink>
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
