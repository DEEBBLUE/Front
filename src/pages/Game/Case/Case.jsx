import React from 'react'
import { useNavigate } from 'react-router-dom'
import SpinLine from './SpinLine.jsx'
import onClick from './spin.js'
import './style.css'

const Case = () => {
  window.Telegram.WebApp.MainButton.show()
  window.Telegram.WebApp.MainButton.onClick(() => onClick())

  const nav = useNavigate()
  window.Telegram.WebApp.BackButton.show()
  window.Telegram.WebApp.BackButton.onClick(() => nav("/",{replace: false}))

  return (
    <>
      <div className="CaseMainContainer">
        <SpinLine/>
        <button onClick={() => onClick()}>Test button</button>
      </div>
    </>
  ) 
}
export default Case
