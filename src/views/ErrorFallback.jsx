import { Suspense } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import Loading from '../components/Loading'

const ErrorFallback = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <Suspense fallback={<Loading />}>
      <div role="alert">
        <p>Something went wrong</p>
        <button onClick={resetBoundary}>Go Home</button>
      </div>
    </Suspense>
  )
}

export default ErrorFallback;