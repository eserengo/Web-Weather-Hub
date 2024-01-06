import { Link } from 'react-router-dom'
import LogoSvg from '../assets/icons/logo.svg?react'

const Logo = () => {
  const Icon = () => (
    <i className='custom-icon'>
      <LogoSvg />
    </i>
  );

  return (
    <>
      <Link to={'/'} className='d-block d-sm-none'>
        <Icon />
      </Link>

      <Link to={'/'} className='custom-wrap d-none d-sm-block'>
        <div className='btn-container'>
          <Icon />
          <span className='text'>Web Weather Hub</span>
        </div>
      </Link>
    </>
  )

}

export default Logo;
