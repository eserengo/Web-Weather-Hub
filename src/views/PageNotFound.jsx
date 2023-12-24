import { Suspense } from 'react'
import { useNavigate } from "react-router-dom"
import Loading from '../components/Loading'

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <div role="alert" className='min-vh-100 d-flex flex-column align-items-center justify-content-center bg-danger bg-gradient'>
        <p className='text-offWhite fs-3 text-bold'>Something went wrong</p>
        <pre className='text-offWhite fs-4'>Page not found</pre>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </Suspense>
  )
}

export default PageNotFound;