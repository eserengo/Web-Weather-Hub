import PropTypes from 'prop-types'

const ErrorFallback = ({ error, resetErrorBoundary }) => {

  return (
    <div role='alert' className='min-vh-100 d-flex flex-column align-items-center justify-content-center'>
      <p className='fs-3 fw-bold'>Something went wrong:</p>
      <pre className='fs-4 text-danger'>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Go Back</button>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
}

export default ErrorFallback;