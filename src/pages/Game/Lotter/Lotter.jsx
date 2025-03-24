import React,{ useEffect,useContext } from 'react'
import LotteryField from './LotterField/LotteryField.jsx'
import ChanceButton from './ChanceButton/ChahceButton.jsx'
import { GameContext } from '../GameContainer.jsx'
import { LotterContext } from './LotterContainer.jsx'
import './style.css'

const Lotter = () => {
  const [gameContext,setGameContext] = useContext(GameContext)
  const [lotterContext,setLotterContext] = useContext(LotterContext)
  
  useEffect(() => {
    if(gameContext["isActive"]){
      if(lotterContext["chance"]){
        if(lotterContext["count"] === 3){
          console.log(lotterContext["chance"])
          setLotterContext(prev => ({...prev,chanceButtonIsVis: true,chance:false }))
        }
      }else{
        if(lotterContext["count"] === 3 && !lotterContext["chanceButtonIsVis"]){
          setTimeout(() => {
            setGameContext(prev => ({...prev,isActive: false}))
          },1500);
        }
      }
    }else{
      if(lotterContext["activeList"].length > 1){
        lotterContext["activeList"].map((id,index) => {
          const prize = document.getElementById(id)
          prize.children[0].remove()
          const prizeHide = document.createElement("div")
          prizeHide.classList.add("LotteryPrizeHide")
          prizeHide.classList.add("anim-lotter-create")
          setTimeout(() => {
            prizeHide.classList.remove("anim-lotter-create")
          }, 1000);
          prize.append(prizeHide)
        })
        setLotterContext(prev => ({activeList: [0],count: 0,chance: true,chanceButtonIsVis: false}))
      }
    }
  }, [lotterContext,gameContext])
  
  return (
    <>
      <div className="LotteryContainer">
        {
          [...Array(4*5)].map((item,index) =>
              <LotteryField index={index}/>
          )
        } 
      </div>
      <ChanceButton/>
    </>
  )
}
export default Lotter
