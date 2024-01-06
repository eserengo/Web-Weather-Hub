import Spinner from 'react-bootstrap/Spinner'

const Loading = () => (
  <main className='container-fluid vh-100 p-2'>
    <article className='row h-100 g-0 align-items-center'>
      <section className='col-12 text-center'>
        <Spinner
          as='span'
          animation='border'
          size='md'
          role='status'
          aria-hidden='true'
          variant='dark'
          className='fs-1'
        />
        <span className='fs-2 pb-1 px-3'>Loading...</span>
      </section>
    </article>
  </main>
)

export default Loading;