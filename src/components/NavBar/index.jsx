import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  let activeStyle = {
    fontWeight: 'bold'
  };

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
        return '#D296EE';
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
      <div className="sidebar" style={{ backgroundColor: getNavbarColor() }}>
        <nav className='navbar'>
          <div className='navlinks' data-testid="navlinks">
            <NavLink to='/' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink> 
            <NavLink to='/profile' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MY PROFILE</NavLink>
            <NavLink to='/recipe' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>ADD RECIPE</NavLink>

            { isLoggedIn() ? (
              <button onClick={handleLogout} className='navlink'>LOG OUT</button>
            ) : (
              <NavLink to='/register' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>SIGN UP</NavLink>
            )}
            
            <NavLink to='/mixingbowl' className='navlink' style={({isActive}) => (isActive ? activeStyle : undefined)}>MIXING BOWL</NavLink>
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
