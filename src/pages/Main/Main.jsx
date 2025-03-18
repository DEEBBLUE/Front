import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PreviewList from './components/PreviewList/PreviewList.jsx'
import Header from './components/Header/Header.jsx'

const Main = (props) => {
  const [menuVisible,setMenuVisible] = useState(false)
  const [mainButtonShow,setMainButtonShow] = useState(false)

  if(mainButtonShow){
    window.Telegram.WebApp.MainButton.show()
  }else{
    window.Telegram.WebApp.MainButton.hide()
  }
  window.Telegram.WebApp.BackButton.hide()

  const [games,setGames] = useState([
    {id: "1", img: "#", price: "50", url: "/games/cases"},
    {id: "2", img: "#", price: "100",url: "/games/lottery"},
    {id: "3", img: "#", price: "250",url: "/games/funnel"},
  ])

  return (
    <>
      <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} callback={props.setGame}/>
      <PreviewList itemsList={games} setMenuVisible={setMenuVisible} setMainVisible={setMainButtonShow}/>      
    </>
  ); 
}

export default Main
