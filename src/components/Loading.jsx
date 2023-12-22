import Spinner from 'react-bootstrap/Spinner'

const Loading = () => (
  <div className="d-flex align-items-center justify-content-center">
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      variant="dark"
    />
    <span className="fs-4 text-offBlack ms-1">Loading...</span>
  </div>
)

export default Loading;