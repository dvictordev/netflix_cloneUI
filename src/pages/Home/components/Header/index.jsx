import backHeaderImg from '../../../../assets/Title-Image.svg'


const backHeaderImgConfig ={
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundImage:`url(${backHeaderImg})`,
  boxShadow:'inset 12px 12px 500px rgb(0,0,0)',
}

export function Header(){
  return(
    <div className='h-[450px] relative' style={backHeaderImgConfig}>
    <header  className="p-4 w-full flex justify-between items-center">
      <div className="flex items-cente justify-center">
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
      <div>
        <button>Pesquisar</button>
        <button>Perfil</button>
      </div>
    </header>
    </div>
  )
}