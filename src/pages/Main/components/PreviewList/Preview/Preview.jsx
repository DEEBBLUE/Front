import React,{ useContext } from 'react'
import { PreviewContext } from '../PreviewContainer.jsx'
import device from 'current-device'
import './style.css'

function Preview({id,img,price,url}) {
  const currency = "$"
  const [context,setContext] = useContext(PreviewContext)
  const action = () => {
    if(context["mainId"] === id){
      setContext(prev => ({...prev,mainId: "none",url: url })) 
    }else{
      setContext(prev => ({...prev,mainId: id,url: url })) 
    }
  } 
  
  const onTouch = device.mobile() ? action : () => {}
  const onClick = device.desktop() ? action : () => {}

  return (
    <>
      <div className="PreviewContainer" key={id} id={id} onClick={() => onClick()} onTouchEnd={() => onTouch()}>
        <button className="PreviewButton">
          <div className="PreviewImg">{img}</div>
          <div className="PreviewPrice"><p><span className="PreviewCurrency">{currency}</span><span>{price}</span></p></div>
        </button>
      </div>
    </>
  ) 
}

export default Preview 
