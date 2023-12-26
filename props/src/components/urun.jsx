import React from 'react'
import { IMAGES } from '../data'

function urun({className, baslik, id, urunAdi, adet}) {
    
  return (

    <div className={className} >
      <h3 className={baslik}>  {id}. Ürün Adı</h3>

      <p>{urunAdi} Adet Sayısı : <span>{adet}</span></p>
      <hr />

      { IMAGES.map((item,id)=> <imgThumbnail/> imgSrc={item} key={item} imgAlt )}



    </div>
  )
}

export default urun
