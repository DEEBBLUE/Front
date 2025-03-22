import React,{ useState,useEffect } from 'react'
import LotteryField from './LotterField/LotteryField.jsx'
import ChanceButton from './ChanceButton/ChahceButton.jsx'
import './style.css'

const Lotter = ({active,setActive}) => {
  const [count,setCount] = useState(0)
  const [activeList,setActiveList] = useState([])
  const [chance,setChance] = useState(true)
  const [chanceButtonVis,setChanceButtonVis] = useState(false)

  const callback = (Action) => {
    if(Action){
      setCount(count - 1)
    }else{
      setCount(100)
    }
    setChance(false) 
  }
  useEffect(() => {
    if (chance && count === 3){
      setChanceButtonVis(true)
    }else{
      setChanceButtonVis(false)

      console.log(!chance)
      console.log(!(count === 3))

      if(!chance && !(count === 3)){
        console.log("Her")
        activeList.map((id) => {
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
        setCount(0)
        setChance(true)
        setChanceButtonVis(false)
        setActiveList([])
      }
    }  
  }, [count])
  


  const anim = active ? (id) => {
    if (count <= 2 && !activeList.includes(id,0)){

      const elem = document.getElementById(id)
      const prizeHide = elem.children[0]
      prizeHide.classList.add("anim-lotter-remove")
      setTimeout(() => {
        prizeHide.remove() 
      }, 500);

      const prize = document.createElement("div")
      prize.classList.add("LotteryPrize")
      prize.classList.add("anim-lotteryPrize-create")
    
      elem.append(prize)
      setCount(count + 1)
      activeList.push(id) 
    }
  } : () => {}
  
  return (
    <>
      <div className="LotteryContainer">
        {
          [...Array(4*5)].map((item,index) =>
            <LotteryField index={index} anim={anim}/>
          )
        } 
      </div>
      <ChanceButton  isVisible={chanceButtonVis} callback={callback}/>
    </>
  )
}
export default Lotter
