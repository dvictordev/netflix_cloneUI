import { MagnifyingGlass, Play, User, WarningCircle } from 'phosphor-react'
import backHeaderImg from '../../../../assets/Title-Image.svg'



const backHeaderImgConfig ={
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundImage:`url(${backHeaderImg})`,
  boxShadow:"inset 5px 10px 20px 10px rgba(0,0,0,0.64), inset 5px 17px 50px 50px rgba(0,0,0,0.64), 5px 17px 50px 50px rgba(0,0,0,0.64)",
}

export function Header(){
  return(
    <div className='h-[700px] relative' style={backHeaderImgConfig}>
    <header  className="p-4 px-10 w-full flex justify-between items-center ">
      <div className="flex items-center justify-center">
      <img 
        src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
        alt="logo netflix" 
        className="w-28 h-16 mr-5"
        />
        <ul className="flex items-center justify-center text-zinc-100 gap-6">
          <li><button className="">Inicio</button></li>
          <li><button>Series</button></li>
          <li><button>Filmes</button></li>
          <li><button>Lançamentos</button></li>
        </ul>
      </div>
      <div className='flex gap-4'>
        <button><MagnifyingGlass size={25} color='white' /></button>
        <button><User size={25} color='white'/></button>
      </div>
    </header>

    <main className='mt-44 pl-20'>
      <h1 className='text-9xl text-zinc-100'>Maid</h1>
      <div className='flex items-center pt-10 gap-6'>
      <button className=' gap-2 px-3 h-10 flex items-center justify-center rounded-md bg-zinc-400 hover:bg-zinc-300'><Play />Play</button>
      <button className='gap-2 px-3 h-10 flex items-center justify-center rounded-md bg-zinc-300 hover:bg-zinc-400'><WarningCircle /> More info</button>
      </div>
    </main>
    </div>
  )
}