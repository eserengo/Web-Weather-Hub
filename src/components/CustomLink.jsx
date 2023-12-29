import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CustomLink = ({ to, className, text, Icon }) => {

  return (
    <Link to={to} className={`${className}`}>
      {text ? text : null}
      {Icon ? Icon : null}
    </Link>
  )
}

CustomLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.object,
}

export default CustomLink;