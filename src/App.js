import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main.jsx' 
import Profile from './pages/Profile/Profile.jsx'
import Payments from './pages/Payments/payments.jsx'
import "./style.css"

function App() {
  const [action,setAction] = useState("")
  const tg = window.Telegram.WebApp
  tg.setHeaderColor(tg.themeParams.header_bg_color)
  tg.themeParams.button_color = "#FF8911"

  return (
    <Routes>
        <Route path="/" element={<Main callback={setAction} />}/>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/payments" element={<Payments/>}/>
    </Routes>
  )
}
export default App;
//
