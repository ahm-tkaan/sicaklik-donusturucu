import React from 'react'

function imgThumbnail({imgSrc,imgAlt}) {
    const imgStyle = {
        padding:"4px",
        borderRadius:"8px",
        border: "1px solid rgba(255,255,255,0.3)",
        width:"80%",
        boxSizing:"border-box",
        marginBottom:"5px",
        
    }
  return (
    <img src={imgSrc} alt={imgAlt} style={imgStyle} />
  )
}

export default imgThumbnail
