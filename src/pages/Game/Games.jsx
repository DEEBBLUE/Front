import React,{ useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import AmountList from './components/AmountList/AmountList.jsx'
import Case from './Case/Case.jsx'
import Funnel from './Funnel/Funnel.jsx'
import Lotter from './Lotter/Lotter.jsx'
import './style.css'

const Games = () => {
  const [isActive,setIsActive] = useState(false)
  const nav = useNavigate()

  const loc = useLocation()
  const [tag,setTag] = useState()

  const MainButton = window.Telegram.WebApp.MainButton
  const BackButton = window.Telegram.WebApp.BackButton

  useEffect(() => {
    if(isActive){
      MainButton.hide()
      BackButton.hide()   

      const list = document.getElementsByClassName("ListAmountContainer") 
      const line = document.getElementsByClassName("ContainerWithGame")

      list[0].classList.add("anim-ListAmount-remove")
      line[0].classList.add("anim-goto-center")
    }else{
      MainButton.show()
      BackButton.show()

      MainButton.onClick(() => setIsActive(true)) 

      BackButton.onClick(() => nav("/",{replace: false}))

      const list = document.getElementsByClassName("ListAmountContainer") 
      const line = document.getElementsByClassName("ContainerWithGame")

      if(isNaN(list) && isNaN(line)){
        if(line[0].classList.contains("anim-goto-center") && list[0].classList.contains("anim-ListAmount-remove")){
          line[0].classList.remove("anim-goto-center")
          list[0].classList.remove("anim-ListAmount-remove")
          line[0].classList.add("anim-goto-start")
          list[0].classList.add("anim-ListAmount-start")
        }
      } 
    }  
  }, [isActive])
   
  useEffect(() => {
    if (loc.pathname === "/games/case/"){
      setTag(<Case active={isActive} setActive={setIsActive} delay={250}/>)
    }if (loc.pathname === "/games/lottery/"){
      setTag(<Lotter active={isActive} setActive={setIsActive}/>)
    }      
  }, [isActive])
  
  return (
    <>
      <div className="GamesContainer">
        <AmountList/>
        <div className="ContainerWithGame">
          {tag}
        </div>
        <button onClick={() => setIsActive(true)}></button> 
      </div>  
    </>
  )
}
export default Games
