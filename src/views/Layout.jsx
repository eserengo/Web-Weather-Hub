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
      onReset={
        () => {
          navigate(-1);
          console.clear();
        }
      }
      onError={error => error}
    >
      <header className='container-fluid p-2'>
        <article className='row h-100 g-0'>
          <section className='col-12 d-flex align-items-center justify-content-between'>
            <Logo />
            <NavBar />
          </section>
        </article>
      </header>

      <Outlet />

      <footer className='col-12 p-2'>
        <span className='fs-5'>&reg;</span>
        <span className='fs-7 fw-light ms-1'>2024 Licensed.</span>
      </footer>
    </ErrorBoundary>
  )
}

export default Layout;
