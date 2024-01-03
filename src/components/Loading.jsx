import Spinner from 'react-bootstrap/Spinner'

const Loading = () => (
  <main className='container-fluid vh-100 p-2'>
    <article className='row h-100 g-0'>
      <section className='col d-flex align-items-center justify-content-center'>
        <Spinner
          as='span'
          animation='border'
          size='md'
          role='status'
          aria-hidden='true'
          variant='dark'
        />
        <span className='fs-3 ms-2'>Loading...</span>
      </section>
    </article>
  </main>
)

export default Loading;