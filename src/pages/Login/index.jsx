import { Header } from "./components/Header";

import { Content } from "./components/Content";




export function Login(){
  return(
    <div className="h-full w-full flex flex-col">
      <div> 
      <Header />
      <Content />
      </div>
    </div>
    
  )
}