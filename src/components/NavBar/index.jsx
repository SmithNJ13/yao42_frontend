import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  
  const getNavbarColor = () => {
    switch (location.pathname) {
      case '/spring':
        return '#BADC83'; 
      case '/summer':
        return '#FFE448'; 
      case '/autumn':
        return '#FFA500';
      case '/winter':
        return '#87CEEB';
      case '/profile':
        return '#D296EE';
      case '/recipe':
        return '#F5C6C6';
      case '/register':
        return '#D296EE';
      case '/mixingbowl':
        return '#D296EE';
      case '/notfound':
        return '#FF4500';
      default:
        return '#008080';
    }
  };

  return (
    <>
      <div className="sidebar" style={{ backgroundColor: getNavbarColor() }}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink'>HOME</NavLink> 
            <NavLink to='/profile' className='navlink'>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink'>ADD RECIPE</NavLink>
            <NavLink to='/register' className='navlink'>SIGN UP</NavLink>
            <NavLink to='/mixingbowl' className='navlink'>MIXING BOWL</NavLink>
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
