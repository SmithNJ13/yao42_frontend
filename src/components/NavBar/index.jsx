import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import navbar from '../../assets/default-navbar.png';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const getNavbarStyle = () => {
    if (['/spring', '/summer', '/autumn', '/winter'].includes(location.pathname)) {
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
            backgroundColor: '#FEBB40',
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
            <NavLink to='/' className='navlink'>HOME</NavLink> 
            <NavLink to='/profile' className='navlink'>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink'>ADD RECIPE</NavLink>
            <NavLink to='/mixingbowl' className='navlink'>MIXING BOWL</NavLink>
            
            { isLoggedIn() ? (
              <button onClick={handleLogout} className='navlink'>LOG OUT</button>
            ) : (
              <NavLink to='/register' className='navlink'>SIGN UP</NavLink>
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
