import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ErrorFallback from '../services/ErrorFallback'
import Logo from '../components/icons/Logo'
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
      <main className='container-fluid position-relative p-2'>
        <article className='row w-100 g-0 position-absolute top-0 start-0 z-2 p-3'>
          <section className='col-12 d-flex align-items-center justify-content-between'>
            <Logo />
            <NavBar />
          </section>
        </article>

        <Outlet />
      </main>
    </ErrorBoundary>
  )
}

export default Layout;
