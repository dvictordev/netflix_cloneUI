import logoImg from '../../../../assets/netflix_logo.png'
import backgroundImg from '../../../../assets/background_image.jpg'

const backgroundStyle ={
  backgroundImage:`url(${backgroundImg})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover', 
  height: "755px",
  boxShadow:' inset 5px 10px 5px 400px rgba(0,0,0,0.64), inset 5px 17px 50px 50px rgba(0,0,0,0.64), inset 5px 17px 50px 50px rgba(0,0,0,0.64)', 

}

export function Header(){
  return(
    <div style={backgroundStyle} className='border-b-[6px] border-zinc-500'>
      <header className='flex w-full px-14 pt-7 items-center justify-between'>
        <img src={logoImg} alt="logo netflix" className='w-[166px] h-12'/>
        <button className='w-16 h-10 bg-red-700 text-zinc-100 rounded-lg border-0 hover:border-2 hover:border-zinc-100'>Entrar</button>
      </header>
      <main>
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <span>Assista onde quiser. Cancele quando quiser.</span>
        <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
        
      </main>

    </div>
  )
}