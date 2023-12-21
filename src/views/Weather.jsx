import { Outlet } from 'react-router-dom'

const Weather = () => {

  return (
    <>
      <Outlet />
      <span className='fs-5 text-offBlack text-center'>Tab Bar placeholder</span>
    </>
  )
}

export default Weather;