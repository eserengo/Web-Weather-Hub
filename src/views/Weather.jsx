import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import TabBar from '../components/TabBar'

const Weather = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('today');
  }, [navigate]);

  return (
    <article className='row position-relative g-0 align-items-center justify-content-center justify-content-sm-start'>
      <Outlet />
      <aside className='tab-bar'>
        <TabBar />
      </aside>
    </article>
  )
}

export default Weather;
