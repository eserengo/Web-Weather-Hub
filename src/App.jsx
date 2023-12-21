import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import Layout from './views/Layout'
import Weather from './views/Weather'
import TodaysForecast from './views/TodaysForecast'
import TomorrowsForecast from './views/TomorrowsForecast'
import ThisWeeksForecast from './views/ThisWeeksForecast'
import Location from './views/Location'
import About from './views/About'
import Contact from './views/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

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
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
