export function Movie({title, overview, vote_average, poster_path }){
  const backCardImg={
    backgroundImage:`url(${poster_path})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'

  }

  return(
    <div className="w-64 h-36" style={backCardImg}>
      <h1 className="text-zinc-100">{title}</h1>
    </div>
  )
}