import { NavLink } from 'react-router-dom'
import TodaySvg from '../assets/icons/today.svg?react'
import TomorrowSvg from '../assets/icons/tomorrow.svg?react'
import ThisWeekSvg from '../assets/icons/this-week.svg?react'

const TabBar = () => {

  return (
    <nav className='d-flex flex-row flex-nowrap align-items-center justify-content-between gap-1'>
      <NavLink to={'today'} className='custom-wrap' end>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <TodaySvg />
              </i>
              <span className='text'>Today</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <TodaySvg />
            </i>
          )}
      </NavLink>
      <NavLink to={'tomorrow'} className='custom-wrap' end>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <TomorrowSvg />
              </i>
              <span className='text'>Tomorrow</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <TomorrowSvg />
            </i>
          )}
      </NavLink>
      <NavLink to={'thisweek'} className='custom-wrap' end>
        {({ isActive }) =>
          isActive ? (
            <div className='btn-container'>
              <i className='custom-icon'>
                <ThisWeekSvg />
              </i>
              <span className='text'>This Week</span>
            </div>
          ) : (
            <i className='custom-icon'>
              <ThisWeekSvg />
            </i>
          )}
      </NavLink>
    </nav>
  )
}

export default TabBar;