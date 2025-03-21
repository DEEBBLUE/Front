import React,{ useState,useEffect } from 'react'
import LotteryField from './LotteryField.jsx'
import './style.css'

const Lotter = ({active,setActive}) => {

  const [count,setCount] = useState(0)

  const anim = (id) => {
    setCount(count + 1)
    if (count < 3 && active){
      const elem = document.getElementById(id).children
      elem[0].classList.add("anim-lotter-remove")
    }else{
      setActive(false)
    }
  }

  return (
    <>
      <div className="LotteryContainer">
        {
          [...Array(4*5)].map((item,index) => 
            <LotteryField index={index} anim={anim}/>
         )
        } 
      </div>
    </>
  )
}
export default Lotter
