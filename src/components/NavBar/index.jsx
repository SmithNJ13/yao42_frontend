import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  let activeStyle = {
    fontWeight: 'bold'};
  
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
      default:
        return '#D296EE';
    }
  };

  return (
    <>
      <div className="sidebar" style={{ backgroundColor: getNavbarColor() }}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink> 
            <NavLink to='/profile' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>ADD RECIPE</NavLink>
            <NavLink to='/mixingbowl' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MIXING BOWL</NavLink>
            <NavLink to='/register' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>SIGN UP</NavLink>
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
