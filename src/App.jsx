import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const Layout = lazy(() => import('./views/Layout'));
const Weather = lazy(() => import('./views/Weather'));
const TodaysForecast = lazy(() => import('./views/TodaysForecast'));
const TomorrowsForecast = lazy(() => import('./views/TomorrowsForecast'));
const ThisWeeksForecast = lazy(() => import('./views/ThisWeeksForecast'));
const Location = lazy(() => import('./views/Location'));
const About = lazy(() => import('./views/About'));
const Contact = lazy(() => import('./views/Contact'));
const PageNotFound = lazy(() => import('./views/PageNotFound'));

const App = () => {
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
              index: true,
              element: <TodaysForecast />,
            },
            {
              path: 'tomorrow',
              element: <TomorrowsForecast />,
            },
            {
              path: 'thisweek',
              element: <ThisWeeksForecast />,
            },
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
      element: <PageNotFound />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
