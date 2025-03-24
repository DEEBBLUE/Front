import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AppContainer from './AppContext.jsx'
import Container from './pages/Main/Container.jsx'
import ProfileContainer from './pages/Profile/ProfileContainer.jsx'
import GameContainer from './pages/Game/GameContainer.jsx'

import Main from './pages/Main/Main.jsx' 
import Profile from './pages/Profile/Profile.jsx'
import Payments from './pages/Payments/payments.jsx'
import Games from './pages/Game/Games.jsx'

import "./style.css"

function App() {
  const tg = window.Telegram.WebApp 

  tg.setHeaderColor(tg.themeParams.header_bg_color)
  tg.themeParams.button_color = "#FF8911"


  return (
  <AppContainer>
    <Routes>
        <Route path="/" element={<Container><Main/></Container>}/>
        <Route path="/profile/" element={<ProfileContainer><Profile/></ProfileContainer>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/games/case/" element={<GameContainer><Games/></GameContainer>}/>
        <Route path="/games/lottery/" element={<GameContainer><Games/></GameContainer>}/>
        <Route path="/games/funnel/" element={<GameContainer><Games/></GameContainer>}/>
    </Routes>
  </AppContainer>
  )
}
export default App;
//
