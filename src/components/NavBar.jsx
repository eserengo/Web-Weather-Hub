import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuSvg from '../assets/icons/menu.svg?react'
import CloseSvg from '../assets/icons/close.svg?react'
import MyWeatherSvg from '../assets/icons/my-weather.svg?react'
import PinSvg from '../assets/icons/pin.svg?react'
import AboutSvg from '../assets/icons/about.svg?react'
import ContactSvg from '../assets/icons/contact.svg?react'

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  const Links = () => (
    <>
      <NavLink to={'weather'} className='nav-link'>
        <div className='link-container'>
          <i className='link-icon bordered'>
            <MyWeatherSvg />
          </i>
          <span className='text'>My Weather</span>
        </div>
      </NavLink>
      <NavLink to={'location'} className='nav-link'>
        <div className='link-container'>
          <i className='link-icon bordered'>
            <PinSvg />
          </i>
          <span className='text'>My Location</span>
        </div>
      </NavLink>
      <NavLink to={'about'} className='nav-link'>
        <div className='link-container'>
          <i className='link-icon bordered'>
            <AboutSvg />
          </i>
          <span className='text'>About</span>
        </div>
      </NavLink>
      <NavLink to={'contact'} className='nav-link'>
        <div className='link-container'>
          <i className='link-icon bordered'>
            <ContactSvg />
          </i>
          <span className='text'>Contact</span>
        </div>
      </NavLink>
    </>
  )

  return (
    <>
      <nav className='d-block d-md-none'>
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

      <nav className='d-none d-md-flex align-items-center justify-content-between gap-3'>
        <Links />
      </nav>
    </>
  )
}

export default NavBar;
