import { Link } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'
import ErrorSign from '../components/icons/ErrorSign'
import LeftArrowSvg from '../assets/icons/leftArrow.svg?react'
import PropTypes from 'prop-types'

const ErrorFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();
  
  return (
    <main className='container-fluid vh-100 p-2'>
      <article className='row h-100 g-0 align-items-center'>
        <section className='col'>
          <div role='alert' className='d-flex flex-column align-items-center justify-content-center'>
            <ErrorSign />
            <h2 className='fs-3 fw-bold mt-2 '>Something went wrong:</h2>
            <pre className='fs-4 text-danger'>{error.message}</pre>
            <Link onClick={resetBoundary} className='custom-btn'>
              <div className='btn-container'>
                <span className='text'>Go Back</span>
                <i className='btn-icon'>
                  <LeftArrowSvg />
                </i>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
}

export default ErrorFallback;