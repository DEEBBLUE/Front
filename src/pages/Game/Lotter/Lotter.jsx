import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LotteryField from './LotteryField.jsx'
import AmountList from '../components/AmountList/AmountList.jsx'
import './style.css'

const Lotter = () => {
  const [count,setCount] = useState(0)
  const nav = useNavigate()
  const MainButton = window.Telegram.WebApp.MainButton
  const BackButton = window.Telegram.WebApp.BackButton

  BackButton.show()
  BackButton.onClick(() => nav("/",{replace: false}))

  MainButton.show()
  MainButton.onClick(() => {
    
  }) 

  const anim = (id) => {
    setCount(count + 1)
    if (count < 3){
      const elem = document.getElementById(id).children
      elem[0].classList.add("anim-lotter-remove")
    }
  }

  return (
    <>
      <AmountList/>
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
