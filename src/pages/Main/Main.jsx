import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PreviewList from './components/PreviewList/PreviewList.jsx'
import Header from './components/Header/Header.jsx'

function Main({callback,balance}) {
  const [menuVisible,setMenuVisible] = useState(false)
  const [game,getGame] = useState("")
  window.Telegram.WebApp.MainButton.hide()
  window.Telegram.WebApp.BackButton.hide()
  const nav = useNavigate()

  const case1 = () => {
    nav("/games/cases/case1",{replace: false})      
  }
  
  const [games,setGames] = useState([
    {id: "1", img: "#", price: "50"},
    {id: "2", img: "#", price: "100"},
    {id: "3", img: "#", price: "250"},
  ])

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} callback={getGame}/>
      <PreviewList itemsList={games} setMenuVisible={setMenuVisible}/>      
    </>
  ); 
}

export default Main
