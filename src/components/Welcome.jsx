import WelcomeLogo from './icons/WelcomeLogo'
import CustomLink from './CustomLink'
import RightArrow from './icons/rightArrow.svg?react'

const Welcome = () => {
  const isDay = 1;

  return (
    <main className='container-fluid vh-100 p-2'>
      <article className={`${isDay ? 'welcomeAtDay' : 'welcomeAtNight'} row h-100 g-0 rounded-3`}>
        <section className='col position-relative d-flex flex-column align-items-center justify-content-center'>
          <WelcomeLogo />
          <h1 className='text-offWhite text-center fs-3 fw-bold mt-3'>Web Weather Hub</h1>
          <CustomLink to={'weather'} Icon={<RightArrow />} className={'getStarted position-absolute bottom-0 mb-2'} />
        </section>
      </article>
    </main>
  )
}

export default Welcome;