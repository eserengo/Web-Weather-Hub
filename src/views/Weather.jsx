import { Outlet } from 'react-router-dom'
import TabBar from '../components/TabBar'

const Weather = () => {

  return (
    <main className='container-fluid p-2'>
      <article className='row h-100 g-0 align-items-center justify-content-center justify-content-sm-start'>
        <Outlet />
        <section className='tab-bar col col-xs-9 col-sm-6 col-md-4'>
          <TabBar />
        </section>
      </article>
    </main>
  )
}

export default Weather;
