import { useState } from 'react'
import Urun from './components/urun'
import './App.css'
import { IMAGES } from './data'
import imgThumbnail from  './components/imgThumbnail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Urun adet="12" baslik="baslik" className="urun" id="1"  urunAdi="Bilgisayar"/>
    <Urun adet="56" baslik="baslik" className="urun" id="2" urunAdi="Cep Telefonu"/>
    <Urun adet="89" baslik="baslik" className="urun" id="3" urunAdi="Mouse"/>
    <Urun adet="89" baslik="baslik" className="urun" id="3" urunAdi="Mouse"/>
    <hr />
    { IMAGES.map((img) => {
      return (
        <imgThumbnail imgSrc={img.src} imgAlt={img.alt} />
      )
    })
    



    }

    </>
  )
}

export default App
