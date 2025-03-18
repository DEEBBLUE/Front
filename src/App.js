import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main.jsx' 
import Profile from './pages/Profile/Profile.jsx'
import Payments from './pages/Payments/payments.jsx'
import "./style.css"

function App() {
  const balance = "500"

  const [action,setAction] = useState("")
  const [net,setNetwork] = useState("")
  let path = ""

  if(action === "TopUp"){
      path = "/payments/topup"
  }else{
      path = "/payments/withdraw"
  }

  const tg = window.Telegram.WebApp
  tg.setHeaderColor(tg.themeParams.header_bg_color)
  tg.themeParams.button_color = "#FF8911"

  return (
    <Routes>
        <Route path="/" element={<Main callback={setAction} balance={balance}/>}/>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/payments" element={<Payments/>}/>
    </Routes>
  )
}
export default App;
//
