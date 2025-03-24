import React,{ useState,useEffect,useContext } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { GameContext } from './GameContainer.jsx'
import LotterContainer from './Lotter/LotterContainer.jsx'
import AmountList from './components/AmountList/AmountList.jsx'
import Case from './Case/Case.jsx'
import Funnel from './Funnel/Funnel.jsx'
import Lotter from './Lotter/Lotter.jsx'
import './style.css'

const Games = () => {
  const [gameContext,setGameContext] = useContext(GameContext)

  const loc = useLocation()
  const [tag,setTag] = useState()

  const nav = useNavigate()

  const MainButton = window.Telegram.WebApp.MainButton
  const BackButton = window.Telegram.WebApp.BackButton

  useEffect(() => {
    const list = document.getElementsByClassName("ListAmountContainer") 
    const line = document.getElementsByClassName("ContainerWithGame")

    if(gameContext["isActive"]){
      MainButton.hide()
      BackButton.hide()

      list[0].classList.add("anim-ListAmount-remove")
      line[0].classList.add("anim-goto-center")
    }else{
      MainButton.show()
      BackButton.show()

      MainButton.onClick(() => setGameContext(prev => ({...prev,isActive: true}))) 
      BackButton.onClick(() => nav("/",{replace: false}))

      if(isNaN(list) && isNaN(line)){
        if(line[0].classList.contains("anim-goto-center") && list[0].classList.contains("anim-ListAmount-remove")){
          console.log(line[0])
          line[0].classList.remove("anim-goto-center")
          list[0].classList.remove("anim-ListAmount-remove")
          line[0].classList.add("anim-goto-start")
          list[0].classList.add("anim-ListAmount-start")
        
          setTimeout(() => {
            line[0].classList.remove("anim-goto-start")
            list[0].classList.remove("anim-ListAmount-start")
          }, 300);
        }
      } 
    }  
  }, [gameContext])
   
  useEffect(() => {
    if (loc.pathname === "/games/case/"){
      setTag(<Case/>)
    }if (loc.pathname === "/games/lottery/"){
      setTag(<LotterContainer><Lotter/></LotterContainer>)
    }      
  }, [gameContext])
  
  return (
    <>
      <div className="GamesContainer">
        <AmountList/>
        <div className="ContainerWithGame">
          {tag}
        </div>
        <button onClick={() => setGameContext(prev => ({...prev,isActive: true}))}></button> 
      </div>  
    </>
  )
}
export default Games
