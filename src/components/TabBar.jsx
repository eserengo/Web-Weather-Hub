import { NavLink } from 'react-router-dom'
import TodaySvg from '../assets/icons/today.svg?react'
import TomorrowSvg from '../assets/icons/tomorrow.svg?react'
import ThisWeekSvg from '../assets/icons/this-week.svg?react'

const TabBar = () => (
  <nav className='d-flex flex-row flex-nowrap align-items-center justify-content-between gap-1'>
    <NavLink to={'today'} className='tab-link' end>
      {({ isActive }) =>
        isActive ? (
          <div className='link-container'>
            <i className='link-icon bordered'>
              <TodaySvg />
            </i>
            <span className='text'>Today</span>
          </div>
        ) : (
          <i className='link-icon bordered'>
            <TodaySvg />
          </i>
        )}
    </NavLink>
    <NavLink to={'tomorrow'} className='tab-link' end>
      {({ isActive }) =>
        isActive ? (
          <div className='link-container'>
            <i className='link-icon bordered'>
              <TomorrowSvg />
            </i>
            <span className='text'>Tomorrow</span>
          </div>
        ) : (
          <i className='link-icon bordered'>
            <TomorrowSvg />
          </i>
        )}
    </NavLink>
    <NavLink to={'thisweek'} className='tab-link' end>
      {({ isActive }) =>
        isActive ? (
          <div className='link-container'>
            <i className='link-icon bordered'>
              <ThisWeekSvg />
            </i>
            <span className='text'>This Week</span>
          </div>
        ) : (
          <i className='link-icon bordered'>
            <ThisWeekSvg />
          </i>
        )}
    </NavLink>
  </nav>
)

export default TabBar;
