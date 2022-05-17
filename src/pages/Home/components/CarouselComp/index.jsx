
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

import React from "react";
import { Movie } from "../Movie"
import { useApi } from "../../../../hooks/useApi"

export  function CarouselComp({query}){
  // request api data
  const data = useApi('popular')

  // img base url
  const baseImgUrl = 'https://image.tmdb.org/t/p/original'
        

  return (
    <div className="w-full  flex items-center justify-center px-10 pb-40 -mt-12 ">
    <Swiper
      spaceBetween={-500}
      slidesPerView={6}
      modules={[Navigation]}
    >
     {data.map(movie=> {
          return( 
            <SwiperSlide>
              <Movie key={movie.id} title={movie.title} poster_path={`${baseImgUrl}${movie.poster_path}`}/>   
            </SwiperSlide>   
          )
        })}
    </Swiper>
    </div>
  )
}