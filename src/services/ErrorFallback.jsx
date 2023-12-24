import { Suspense } from 'react'
import Loading from '../components/Loading'
import PropTypes from 'prop-types'

const ErrorFallback = ({ error, resetErrorBoundary }) => {

  return (
    <Suspense fallback={<Loading />}>
      <div role='alert' className='min-vh-100 d-flex flex-column align-items-center justify-content-center bg-danger bg-gradient'>
        <p className='text-offWhite fs-3 text-bold'>Something went wrong</p>
        <pre className='text-offWhite fs-4'>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Go Back</button>
      </div>
    </Suspense>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
}

export default ErrorFallback;