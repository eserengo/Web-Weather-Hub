/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserLocation } from '../App/userLocationSlice'
import { Link } from 'react-router-dom'
import { setIsDay } from '../App/isDaySlice'
import Loading from '../components/Loading'
import WelcomeLogo from './icons/WelcomeLogo'
import RightArrowSvg from '../assets/icons/right-arrow.svg?react'

const Welcome = () => {
  const isDay = useSelector(state => state.isDay);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDay.value === null) {
      const date = new Date().getHours();
      date >= 6 && date < 18 ? dispatch(setIsDay(1)) : dispatch(setIsDay(0));
    }  
  }, [])

  useEffect(() => {
    dispatch(fetchUserLocation());
  }, [dispatch])

  return (
    <Suspense fallback={<Loading />}>
      <main className='container-fluid vh-100 p-2'>
        <article className={`${isDay.value ? 'welcome-day' : 'welcome-night'} row h-100 g-0 rounded-4`}>
          <section className='col position-relative d-flex flex-column align-items-center justify-content-center'>
            <WelcomeLogo />
            <h1 className='text-offWhite text-center fs-3 fw-bold mt-3'>Web Weather Hub</h1>
            <Link to={'weather'} className='custom-btn position-absolute bottom-0 mb-3'>
              <div className='btn-container'>
                <span className='text'>Get started</span>
                <i className='btn-icon'>
                  <RightArrowSvg />
                </i>
              </div>
            </Link>
          </section>
        </article>
      </main>
    </Suspense>
  )
}

export default Welcome;
