import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'
import ErrorFallback from '../services/ErrorFallback'
import Loading from '../components/Loading'
import Welcome from '../components/Welcome'

const Home = () => {
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
      <Suspense fallback={<Loading />}>
        <Welcome />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Home;
