import tvImage from '../../../../assets/tv-banner.png'
import mobileImagem from '../../../../assets/mobile_banner.jpg'
import pcImage from '../../../../assets/pc-banner.png'
import kidsImage from '../../../../assets/kids_banner.png'

const loginPageContent={
  TV:{
    img:tvImage,
    title:'Aproveite na TV',
    desc:'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.'
  },
  MOBILE:{
      img:mobileImagem,
      title:'Baixe séries para assistir offline.',
  },
  PC:{
      img:pcImage,
      title:'Assista quando quiser.',
      desc:'Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.'
  },
  KIDS:{
      img:kidsImage,
      title:'Crie perfis para crianças.',
      desc:'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.'
  },
}



export function Content(){
  return(
    <>
      <div className=' flex flex-col items-center justify-center bg-black '>
        {Object.entries(loginPageContent).map(([key, value]) => {
        return(
          <>
          <div className='w-full h-[1px] bg-zinc-600'></div>
          <div key={key} className="flex items-center justify-between gap-4 p-4 ">
            <div className='flex flex-col text-center items-center max-w-xs justify-between'>
              <h1 className='font-bold text-zinc-100 text-sm'>{value.title}</h1>
              <span className='text-zinc-100'>{value.desc}</span>
            </div>
              <img src={value.img} alt={value.title} />
          </div>
          <div className='w-full h-[1px] bg-zinc-600'></div>
          </>
        )
      })}
      </div>
    </>
  )
}