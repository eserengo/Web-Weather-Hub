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
      onReset={() => navigate(-1)}
      onError={error => error}
    >
      <header className='d-flex align-items-start justify-content-between p-2'>
        <Logo />
        <NavBar />
      </header>

      <Outlet />
    </ErrorBoundary>
  )
}

export default Layout;
