import React,{ useContext,useEffect } from 'react'
import onClick from './spin.js' 
import { GameContext } from '../GameContainer.jsx'
import './style.css'

const Case = () => {
  const delay = 250
  const animDuration = 12000
  const [gameContext,setGameContext] = useContext(GameContext)

  useEffect(() => {
    if (gameContext["isActive"]){
      setTimeout(() => {
        onClick()       
      }, delay);
      setTimeout(() => {
        setGameContext(prev => ({...prev,isActive: false}))
      },animDuration);
    }
  }, [gameContext])

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
