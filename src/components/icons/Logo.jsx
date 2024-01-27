import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/icons/logo.svg?react'

const Logo = () => {
  const Icon = () => (
    <i className='link-icon bordered'>
      <LogoSvg />
    </i>
  );

  return (
    <>
      <Link to={'/'} className='logo-icon d-block d-md-none'>
        <Icon />
      </Link>

      <Link to={'/'} className='logo-link d-none d-md-block'>
        <div className='link-container'>
          <Icon />
          <span className='text'>Web Weather Hub</span>
        </div>
      </Link>
    </>
  )

}

export default Logo;
