import { NavLink } from 'react-router-dom'
import MenuSvg from '../assets/icons/menu.svg?react'
import MyWeatherSvg from '../assets/icons/my-weather.svg?react'
import PinSvg from '../assets/icons/pin.svg?react'
import AboutSvg from '../assets/icons/about.svg?react'
import ContactSvg from '../assets/icons/contact.svg?react'

const NavBar = () => {

  return (
    <>
      <nav className='d-block d-sm-none'>
        <i className='custom-icon'>
          <MenuSvg />
        </i>
      </nav>

      <nav className='d-none d-sm-flex align-items-center justify-content-between gap-2'>
        <NavLink to={'weather'} className='custom-btn'>
          {({ isActive }) => 
            isActive ? (
              <div className='btn-container active'>
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
        <NavLink to={'location'} className='custom-btn'>
          {({ isActive }) =>
            isActive ? (
              <div className='btn-container active'>
                <i className='custom-icon'>
                  <PinSvg />
                </i>
                <span className='text'>My Locations</span>
              </div>
            ) : (
              <i className='custom-icon'>
                <PinSvg />
              </i>
            )}
        </NavLink>
        <NavLink to={'about'} className='custom-btn'>
          {({ isActive }) =>
            isActive ? (
              <div className='btn-container active'>
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
        <NavLink to={'contact'} className='custom-btn'>
          {({ isActive }) =>
            isActive ? (
              <div className='btn-container active'>
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
      </nav>
    </>
  )
}

export default NavBar;