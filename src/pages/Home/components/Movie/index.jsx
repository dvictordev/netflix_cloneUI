export function Movie({poster_path }){

  return(
    <div className="px-8 rounded-lg">
      <img src={poster_path} className='h-56 rounded-lg' />
    </div>
  )
}