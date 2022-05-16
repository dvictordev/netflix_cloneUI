import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider  from 'react-slick'
import { Movie } from "./Movie"
import { useApi } from "../../../hooks/useApi"

export function CarouselComp(){
  const data = useApi()
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 2,
    centerMode:true,
    centerPadding: '450px',
    rtl:true,
  };

  const baseImgUrl = 'https://image.tmdb.org/t/p/original/'
        


  return (
    <div className="w-full flex items-center justify-center mt-10">

    <Slider {...settings} className='w-[1200px]'>
     {data.map(movie=> {
       console.log(movie)
          return( 
            <div>
              <Movie key={movie.id} title={movie.title} poster_path={`${baseImgUrl}${movie.poster_path}`}/>   
            </div> 
          )
        })}

      
    </Slider>
    </div>
  )
}