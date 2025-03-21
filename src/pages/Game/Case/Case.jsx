import React from 'react'
import onClick from './spin.js' 
import './style.css'

const Case = ({active,setActive,delay}) => {
  const animDuration = 12000
  if (active){
    setTimeout(() => {
      onClick()       
    }, delay);
    setTimeout(() => {
      setActive(!active)
    },animDuration);
  }

  return (
    <>
      <div className="CaseSpinLine">
        {
          [...Array(7)].map((content,index) => 
            <div className="CasePrizeContainer">
              <div className="CasePrize"></div>
            </div>
          )
        }
   
      </div> 
    </>
  ) 
}
export default Case
