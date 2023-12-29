import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ErrorFallback from '../services/ErrorFallback'

const Layout = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
      onError={error => error}
    >
      <div className='d-flex align-items-start justify-content-between'>
        <span className='fs-5 text-offBlack'>Logo placeholder</span>
        <span className='fs-5 text-offBlack'>Nav Bar placeholder</span>
      </div>

      <Outlet />
    </ErrorBoundary>
  )
}

export default Layout;
