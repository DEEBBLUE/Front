import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PreviewList from './components/PreviewList/PreviewList.jsx'
import Header from './components/Header/Header.jsx'

function Main() {
  const [menuVisible,setMenuVisible] = useState(false)
  const [game,getGame] = useState("")
  window.Telegram.WebApp.MainButton.hide()
  window.Telegram.WebApp.BackButton.hide()
  const nav = useNavigate()

  const case1 = () => {
    nav("/games/cases/case1",{replace: false})      
  }
  
  const [games,setGames] = useState([
    {id: "1", img: "#", price: "50", url: "/games/cases"},
    {id: "2", img: "#", price: "100",url: "/games/lottery"},
    {id: "3", img: "#", price: "250",url: "/games/funnel"},
  ])

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} callback={getGame}/>
      <PreviewList itemsList={games} setMenuVisible={setMenuVisible}/>      
    </>
  ); 
}

export default Main
