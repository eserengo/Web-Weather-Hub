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
      <NavLink to={'weather'} className='custom-wrap'>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <MyWeatherSvg />
              </i>
              <span className='text'>My Weather</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <MyWeatherSvg />
            </i>
          )}
      </NavLink>
      <NavLink to={'location'} className='custom-wrap'>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <PinSvg />
              </i>
              <span className='text'>My Location</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <PinSvg />
            </i>
          )}
      </NavLink>
      <NavLink to={'about'} className='custom-wrap'>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <AboutSvg />
              </i>
              <span className='text'>About</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <AboutSvg />
            </i>
          )}
      </NavLink>
      <NavLink to={'contact'} className='custom-wrap'>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <ContactSvg />
              </i>
              <span className='text'>Contact</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <ContactSvg />
            </i>
          )}
      </NavLink>
    </>
  )

  return (
    <>
      <nav className='d-block d-sm-none'>
        <i className='custom-icon' onClick={toggleIsCollapsed}>
          <MenuSvg />
        </i>
        <div className={`custom-bar ${isCollapsed ? 'closed' : 'open'}`}>
          <span className='menu'>
            <i className='custom-icon position-absolute top-0 end-0 m-2' onClick={toggleIsCollapsed}>
              <CloseSvg />
            </i>
            <div className='vh-100 d-flex flex-column align-items-end justify-content-center gap-3'>
              <Links />
            </div>
          </span>
        </div>
      </nav>

      <nav className='d-none d-sm-flex align-items-center justify-content-between gap-2'>
        <Links />
      </nav>
    </>
  )
}

export default NavBar;