import LoadingGears from './icons/LoadingGears'

const Loading = () => (
  <main className='container-fluid vh-100 p-2'>
    <article className='row h-100 g-0 align-items-center'>
      <section className='col-12 text-center'>
        <p className='fs-2 pb-5 m-0'>Loading...</p>
        <LoadingGears />
        <p className='fs-2 pt-5 m-0'>Please wait</p>
      </section>
    </article>
  </main>
)

export default Loading;
