import logoImg from '../../../../assets/netflix_logo.png'
import backgroundImg from '../../../../assets/background_image.jpg'
import {CaretRight} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { Home } from '../../../Home'

const backgroundStyle ={
  backgroundImage:`url(${backgroundImg})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover', 
  height: "755px",
  boxShadow:' inset 5px 10px 5px 400px rgba(0,0,0,0.64), inset 5px 17px 50px 50px rgba(0,0,0,0.64), inset 5px 17px 50px 50px rgba(0,0,0,0.64)', 

}


function handleGetIn(){
  let navigate = useNavigate();
  navigate('../')
}

export function Header(){
  return(
    <div style={backgroundStyle} className='border-b-[6px] border-zinc-500'>
      <header className='flex w-full px-14 pt-7 items-center justify-between'>
        <img src={logoImg} alt="logo netflix" className='w-[166px] h-12'/>
        <button
          onClick={handleGetIn}
          className='w-20 h-10 bg-red-700 text-zinc-100  text-center rounded-sm border-0 hover:border-2 hover:border-zinc-100'
         >Entrar</button>
      </header>
      <main className='w-auto h-[755px] flex flex-col items-center justify-center text-zinc-100 text-center gap-5 lg:px-96 md:py-20 '>
        <h1 className='font-bold sm:text-lg lg:text-7xl'>Filmes, séries e muito mais. Sem limites.</h1>
        <span className='text-2xl font-bold'>Assista onde quiser. Cancele quando quiser.</span>
        <p className='text-xl font-bold'>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

        <div className='flex items-center justify-center'>
          <input
            placeholder='Email...'
            type="text" 
            className='p-4 h-16 w-[500px] text-zinc-700 outline-none'/>
          <button className='flex items-center justify-center bg-red-700 p-4 w-44 h-16 font-bold text-xl gap-2'>
            Vamos la
            <CaretRight weight='bold' className='mt-[1px]'/>
          </button>
        </div> 
        
      </main>

    </div>
  )
}