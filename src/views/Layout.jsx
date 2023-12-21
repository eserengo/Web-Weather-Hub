import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
      <div className='d-flex align-items-start justify-content-between'>
        <span className='fs-5 text-offBlack'>Logo placeholder</span>
        <span className='fs-5 text-offBlack'>Nav Bar placeholder</span>
      </div>
      <Outlet />
    </>
  )
}

export default Layout;