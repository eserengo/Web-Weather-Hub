import { Link } from 'react-router-dom'
import WelcomeLogo from './WelcomeLogo'
import RightArrowSvg from '../assets/icons/right-arrow.svg?react'

const Welcome = () => {
  const isDay = 1;

  return (
    <main className='container-fluid vh-100 p-2'>
      <article className={`${isDay ? 'welcomeAtDay' : 'welcomeAtNight'} row h-100 g-0 rounded-3`}>
        <section className='col position-relative d-flex flex-column align-items-center justify-content-center'>
          <WelcomeLogo />
          <h1 className='text-offWhite text-center fs-3 fw-bold mt-3'>Web Weather Hub</h1>
          <Link to={'weather'} className='position-absolute bottom-0 mb-3'>
            <i className='custom-icon'>
              <RightArrowSvg />
            </i>
          </Link>
        </section>
      </article>
    </main>
  )
}

export default Welcome;