import React,{ useContext } from 'react'
import { LotterContext } from '../LotterContainer.jsx'
import { GameContext } from '../../GameContainer.jsx'
import device from 'current-device'
import './style.css'

const LotteryField = ({index,anim}) => {
  const [lotterContext,setLotterContext] = useContext(LotterContext)
  const [gameContext] = useContext(GameContext)

  const active = gameContext["isActive"] ? () => {
    if (lotterContext["count"] < 3 && lotterContext["activeList"].indexOf(index) === -1){
      const elem = document.getElementById(index)
      const prizeHide = elem.children[0]

      prizeHide.classList.add("anim-lotter-remove")
      setTimeout(() => {
        prizeHide.remove() 
      }, 500);

      const prize = document.createElement("div")
      prize.classList.add("LotteryPrize")
      prize.classList.add("anim-lotteryPrize-create")
    
      elem.append(prize)
      setLotterContext(prev => ({...prev,count: prev.count + 1,activeList: [...prev.activeList, index]}))
    }
  } : () => {}

  const onTouch = device.mobile() ? active : () => {}
  const onClick = device.desktop() ? active : () => {}

  return (
    <div key={index} id={index} className="LotteryField" onClick={() => onClick()} onTouchEnd={() => onTouch()}>
      <div className="LotteryPrizeHide">
      </div>
    </div>
  )
}

export default LotteryField
