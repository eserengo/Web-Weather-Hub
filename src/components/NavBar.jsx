import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuSvg from '../assets/icons/menu.svg?react'
import CloseSvg from '../assets/icons/close.svg?react'

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  const Links = () => (
    <>
      <NavLink to={'weather'} className='nav-link'>
        <span className='text para'>My Weather</span>
      </NavLink>
      <NavLink to={'location'} className='nav-link'>
        <span className='text para'>My Location</span>
      </NavLink>
      <NavLink to={'about'} className='nav-link'>
        <span className='text para'>About</span>
      </NavLink>
      <NavLink to={'contact'} className='nav-link'>
        <span className='text para'>Contact</span>
      </NavLink>
    </>
  )

  return (
    <>
      <nav className='d-block d-sm-none'>
        <i className='nav-icon drop' onClick={toggleIsCollapsed}>
          <MenuSvg />
        </i>
        <div className={`mobile-navbar ${isCollapsed ? 'closed' : 'open'}`}>
          <span className='menu'>
            <i className='nav-icon drop position-absolute top-0 end-0 m-3' onClick={toggleIsCollapsed}>
              <CloseSvg />
            </i>
            <div className='vh-100 d-flex flex-column align-items-start justify-content-center gap-5'>
              <Links />
            </div>
          </span>
        </div>
      </nav>

      <nav className='d-none d-sm-flex align-items-center justify-content-between gap-3'>
        <Links />
      </nav>
    </>
  )
}

export default NavBar;
