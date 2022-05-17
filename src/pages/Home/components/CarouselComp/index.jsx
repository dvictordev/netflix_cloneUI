import React from "react";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Movie } from "../Movie"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

export  function CarouselComp({query}){
  const API_KEY = 'dc555813684c5016feb59b2bbfac5bca'
  const [movies, setMovies] = useState([])


 // request api data
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}&language=pt-BR&page=1`)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
      console.log(data.results)
    })
  },[])

  // img base url
  const baseImgUrl = 'https://image.tmdb.org/t/p/original'
        

  return (
    <div className="w-full shadow-inner flex items-center justify-center px-10 pb-40 -mt-12 ">
    <Swiper
      spaceBetween={-500}
      slidesPerView={6}
      modules={[Navigation]}
    >
     {movies.map(movie=> {
          return( 
            <SwiperSlide key={movie.id}>
              <Movie  title={movie.title} poster_path={`${baseImgUrl}${movie.poster_path}`}/>   
            </SwiperSlide>   
          )
        })}
    </Swiper>
    </div>
  )
}