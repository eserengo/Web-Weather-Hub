import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import TabBar from '../components/TabBar'

const Weather = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('today');
  }, [navigate]);

  return (
    <main className='container-fluid p-2'>
      <article className='row h-100 g-0 align-items-center justify-content-center justify-content-sm-start'>
        <Outlet />
        <aside className='tab-bar col-12 col-sm-6 col-lg-4'>
          <TabBar />
        </aside>
      </article>
    </main>
  )
}

export default Weather;
