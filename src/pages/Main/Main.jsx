import React from 'react'
import { useNavigate } from 'react-router-dom'
import Balance from './components/Balance/Balance.jsx'
import CasePrev from './components/Game/Cases/Case/Prev/CasePrev.jsx'

function Main({callback,balance}) {
  window.Telegram.WebApp.MainButton.hide()
  window.Telegram.WebApp.BackButton.hide()
  const nav = useNavigate()

  const case1 = () => {
    nav("/games/cases/case1",{replace: false})      
  }

  return (
    <>
      <Balance balance={balance} setAction={callback}/>
      <CasePrev callback={case1}/>
    </>
  ); 
}

export default Main
