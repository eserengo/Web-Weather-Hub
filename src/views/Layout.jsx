import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../services/ErrorFallback';
import Loading from '../components/Loading';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
      onError={error => error}
    >
      <Suspense fallback={<Loading />}>
        <div className='d-flex align-items-start justify-content-between'>
          <span className='fs-5 text-offBlack'>Logo placeholder</span>
          <span className='fs-5 text-offBlack'>Nav Bar placeholder</span>
        </div>

        <Suspense fallback={<Loading />} >
          <Outlet />
        </Suspense>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Layout;
