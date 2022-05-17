export function Movie({poster_path, title }){

  return(
    <div className="px-8 rounded-lg group">
      <h1 className="text-transparent group-hover:text-6xl">{title}</h1>
      <img src={poster_path} className='h-56 rounded-lg hover:opacity-80'/>
    </div>
  )
}