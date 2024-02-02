import { NavLink } from 'react-router-dom'

const TabBar = () => (
  <nav className='d-flex flex-row flex-nowrap align-items-center justify-content-between gap-1'>
    <NavLink to={'today'} className='tab-link' end>
      <span className='text para'>Today</span>
    </NavLink>
    <NavLink to={'forecast'} className='tab-link' end>
      <span className='text para'>Forecast</span>
    </NavLink>
  </nav>
)

export default TabBar;
