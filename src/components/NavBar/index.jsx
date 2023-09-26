
import { NavLink, Outlet } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
    <div className=''>
     <NavLink to='/' className='navlink'>Home</NavLink> 
     <NavLink to='/profile' className='navlink'>My Profile</NavLink>
     <NavLink to='/addrecipe' className='navlink'>Add Recipe</NavLink>
     <NavLink to='/register' className='navlink'>Sign-Up</NavLink>
     <NavLink to='/mixingbowl' className='navlink'>Mixing Bowl</NavLink>
    </div>
  </nav>    
  <Outlet />
  <footer className='footer'>SzndChef 2023</footer>
    </>
  )
}

export default NavBar
