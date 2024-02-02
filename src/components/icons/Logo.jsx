import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/icons/logo.svg?react'

const Logo = () => {
  const Icon = () => (
    <i className='link-icon'>
      <LogoSvg />
    </i>
  );

  return (
    <>
      <Link to={'/'} className='logo-icon d-block d-md-none'>
        <Icon />
      </Link>

      <Link to={'/'} className='logo-link d-none d-md-flex align-items-center justify-content-start gap-1'>
        <Icon />
        <span className='text para'>Web Weather Hub</span>
      </Link>
    </>
  )

}

export default Logo;
