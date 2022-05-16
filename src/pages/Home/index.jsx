import { CarouselComp } from "./components/CarouselComp"
import { Header } from "./components/Header"

export function Home(){ 
  
  return(
    <div className=" w-full h-full  bg-zinc-900 shadow-2xl">
      <Header className='-mt-10' />
      <CarouselComp />
    </div>
  ) 
}