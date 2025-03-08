import React from 'react'
import { useNavigate } from 'react-router-dom'

function Item({ShortName,FullName,setNet,path,...props}) {
  const nav = useNavigate()

  const callback = () => {
    setNet(ShortName)
    nav(path,{replace: false})
  }
  return (
    <>
      <div className="NetItem">
        <button className="ItemButton" onClick={callback}>
          <div className="ItemImg">{props.Logo}</div>
          <div className="FullName">{FullName}</div>
          <div className="ShortName">{ShortName}</div>
        </button> 
      </div>
    </>
  ); 
}
export default Item
