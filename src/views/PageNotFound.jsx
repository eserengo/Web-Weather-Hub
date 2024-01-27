import { Link } from 'react-router-dom'
import Error404 from '../components/icons/Error404'
import LeftArrowSvg from '../assets/icons/left-arrow.svg?react'

const PageNotFound = () => (
  <main className='container-fluid vh-100 p-2'>
    <article className='row h-100 g-0 align-items-center'>
      <section className='col'>
        <div role='alert' className='d-flex flex-column align-items-center justify-content-center'>
          <Error404 />
          <h2 className='fs-3 fw-bold mt-2 '>Something went wrong:</h2>
          <pre className='fs-4 text-danger'>Page not found</pre>
          <Link to={-1} className='custom-btn'>
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

export default PageNotFound;