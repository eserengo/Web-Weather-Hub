import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import Loading from './components/Loading'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
  const Layout = lazy(() => import('./views/Layout'));
  const Weather = lazy(() => import('./views/Weather'));
  const Today = lazy(() => import('./views/Today'));
  const Forecast = lazy(() => import('./views/Forecast'));
  const Location = lazy(() => import('./views/Location'));
  const About = lazy(() => import('./views/About'));
  const Contact = lazy(() => import('./views/Contact'));
  const PageNotFound = lazy(() => import('./views/PageNotFound'));
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: 'weather',
          element: <Weather />,
          children: [
            {
              path: 'today',
              element: <Today />,
            },
            {
              path: 'forecast',
              element: <Forecast />,
            }
          ],
        },
        {
          path: 'location',
          element: <Location />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ]
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ])

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;
