import { useEffect, useState } from "react"

export function useApi({query}){
  const API_KEY = 'dc555813684c5016feb59b2bbfac5bca'
  const [movies, setMovies] = useState([])
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`).then(res => res.json()).then(data => {
      setMovies(data.results)
    })
  return movies
}