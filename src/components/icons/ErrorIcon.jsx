const ErrorIcon = () => (
  <i className="">
    <svg className="svg" width="128px" height="128px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#350000" />
          <stop offset="50%" stopColor="#ff1212" />
          <stop offset="100%" stopColor="#350000" />
        </linearGradient>
      </defs>
      <path className="shape" stroke="url(#gradient)" d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="shape" stroke="#ff1212" d="M12 9V13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="shape" stroke="#ff1212" d="M12 17.0195V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </i>
)

export default ErrorIcon;