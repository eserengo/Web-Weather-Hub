import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ErrorFallback from '../services/ErrorFallback'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'

const Layout = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={
        () => {
          navigate(-1);
          console.clear();
        }
      }
      onError={error => error}
    >
      <header className='d-flex align-items-start justify-content-between p-2'>
        <Logo />
        <NavBar />
      </header>

      <Outlet />

      <footer className='p-2'>
        <span className='fs-4'>&reg;</span>
        <span className='fs-6 fw-light'>2024 under License | All rights reserved.</span>
      </footer>
    </ErrorBoundary>
  )
}

export default Layout;
