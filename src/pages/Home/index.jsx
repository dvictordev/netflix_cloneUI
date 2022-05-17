
import { CarouselComp } from "./components/CarouselComp"
import { Header } from "./components/Header"

export  function Home(){ 
  
  
  return(
    <div className=" w-full h-full flex flex-col  bg-black ">
      <Header className='-mt-10' />
      <h1 className="text-zinc-100 relative -top-20 ml-20">Populares</h1>
      <CarouselComp query='popular'/>
      <h1 className="text-zinc-100 relative -top-20 ml-20">Lançamentos</h1>
      <CarouselComp query='now_playing'/>
      <h1 className="text-zinc-100 relative -top-20 ml-20">em breve</h1>
      <CarouselComp query='upcoming' />
      <h1 className="text-zinc-100 relative -top-20 ml-20">Mais Assistidos</h1>
      <CarouselComp query='top_rated' />
    </div>
  ) 
}