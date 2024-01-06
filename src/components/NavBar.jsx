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

  return (
    <>
      <nav className='d-block d-sm-none'>
        {isCollapsed ? (
          <i className='custom-icon' onClick={toggleIsCollapsed}>
            <MenuSvg />
          </i>
        ) : (
          <div className='custom-bar'>
            <i className='custom-icon position-absolute top-0 end-0 m-2' onClick={toggleIsCollapsed}>
              <CloseSvg />
            </i>
            <div className='vh-100 d-flex flex-column align-items-center justify-content-center p-2 gap-4'>
              <NavLink to={'weather'} className='custom-wrap'>
                <div className='btn-container'>
                  <i className='custom-icon'>
                    <MyWeatherSvg />
                  </i>
                  <span className='text'>My Weather</span>
                </div>
              </NavLink>
              <NavLink to={'location'} className='custom-wrap'>
                <div className='btn-container'>
                  <i className='custom-icon'>
                    <PinSvg />
                  </i>
                  <span className='text'>My Locations</span>
                </div>
              </NavLink>
              <NavLink to={'about'} className='custom-wrap'>
                <div className='btn-container'>
                  <i className='custom-icon'>
                    <AboutSvg />
                  </i>
                  <span className='text'>About Me</span>
                </div>
              </NavLink>
              <NavLink to={'contact'} className='custom-wrap'>
                <div className='btn-container'>
                  <i className='custom-icon'>
                    <ContactSvg />
                  </i>
                  <span className='text'>Contact</span>
                </div>
              </NavLink>
            </div>
          </div>
          )
        }        
      </nav>

      <nav className='d-none d-sm-flex align-items-center justify-content-between gap-2'>
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
                <span className='text'>My Locations</span>
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
                <span className='text'>About Me</span>
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
      </nav>
    </>
  )
}

export default NavBar;