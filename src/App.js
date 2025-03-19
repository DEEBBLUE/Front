import React,{ useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main.jsx' 
import Profile from './pages/Profile/Profile.jsx'
import Payments from './pages/Payments/payments.jsx'
import Games from './pages/Game/Games.jsx'
import Funnel from './pages/Game/Funnel/Funnel.jsx'
import Case from './pages/Game/Case/Case.jsx'
import Lotter from './pages/Game/Lotter/Lotter.jsx'
import "./style.css"

function App() {
  const [action,setAction] = useState("")
  const [game,getGame] = useState("")

  const tg = window.Telegram.WebApp
  tg.setHeaderColor(tg.themeParams.header_bg_color)
  tg.themeParams.button_color = "#FF8911"

  return (
    <Routes>
        <Route path="/" element={<Main setGame={getGame}/>}/>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/games" element={<Games/>}>
          <Route path="/games/case" element={<Case/>}/>
          <Route path="/games/funnel" element={<Funnel/>}/>
          <Route path="/games/lottery" element={<Lotter/>}/>
        </Route>
    </Routes>
  )
}
export default App;
//
