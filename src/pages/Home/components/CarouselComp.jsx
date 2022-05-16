// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider  from 'react-slick'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

import React from "react";
import { Movie } from "./Movie"
import { useApi } from "../../../hooks/useApi"

export function CarouselComp(){
  // request api data
  const data = useApi()


  // settings carousel
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 2,
  //   centerMode:true,
  //   centerPadding: '480px',
  //   rtl:true,
  // };
  // img base url
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300'
        

  return (
    <div className="w-full flex items-center justify-center bg-[#141414] px-10">
    <Swiper
      spaceBetween={-200}
      slidesPerView={6}
      
      modules={[Navigation]}
    >
     {data.map(movie=> {
          return( 
            <SwiperSlide>
              <Movie key={movie.id} title={movie.title} poster_path={`${baseImgUrl}${movie.backdrop_path}`}/>   
            </SwiperSlide>   
          )
        })}
    </Swiper>
    </div>
  )
}