import React from 'react'
import './style.css'

function Preview({id,img,price,url,onClick}) {
  const currency = "$"
  return (
    <>
      <div className="PreviewContainer" id={id} onClick={() => onClick(id,url)}>
        <button className="PreviewButton">
          <div className="PreviewImg">{img}</div>
          <div className="PreviewPrice"><p><span className="PreviewCurrency">{currency}</span><span>{price}</span></p></div>
        </button>
      </div>
    </>
  ) 
}

export default Preview 
