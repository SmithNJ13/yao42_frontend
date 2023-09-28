import { NavLink, Outlet } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className="sidebar"> 
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
  )
}

export default NavBar