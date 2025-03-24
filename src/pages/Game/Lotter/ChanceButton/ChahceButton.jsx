import React,{ useState,useEffect,useContext } from 'react'
import { LotterContext } from '../LotterContainer.jsx'
import { GameContext } from '../../GameContainer.jsx'
import './style.css'

const ChanceButton = () => {
  const [lotterContext,setLotterContext] = useContext(LotterContext)
  const [gameContext,setGameContext] = useContext(GameContext) 

  const [container,setContainer] = useState()

  useEffect(() => {
    if(lotterContext["chanceButtonIsVis"]){
      setContainer(
        <div className="ChanceContainer anim-chanceButton-show">
          <button className="ChanceButton" onClick={() => 
            setLotterContext(prev => ({...prev,count: prev.count - 1,chanceButtonIsVis: false,chance: false})) }>
            Add  
          </button>
          <button className="AlterButton" onClick={() => 
            setLotterContext(prev => ({...prev,chanceButtonIsVis: false,chance: false}))}>
            Add  
          </button>
        </div>
      )       
      setTimeout(() => {
        const elem = document.getElementsByClassName("ChanceContainer")
        elem[0].classList.remove("anim-chanceButton-show") 
      }, 500);
    }else{
      const elem = document.getElementsByClassName("ChanceContainer")
      if(elem.length !== 0){
        elem[0].classList.add("anim-chanceButton-remove") 
        setTimeout(() => {
          setContainer( )
        }, 500);
      }
    }
  }, [lotterContext])

   return (
    <>
      {container} 
    </>
  )
}
export default ChanceButton
