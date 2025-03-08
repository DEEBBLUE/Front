import React,{useState} from 'react'
import {Routes, Route , useNavigate} from 'react-router-dom';

import Main from './pages/Main/Main.jsx' 
import TopUp from './pages/Payments/TopUp/TopUp.jsx'
import Network from './pages/Payments/Network/Network.jsx'
import Withdraw from './pages/Payments/WithDraw/withdraw.jsx'
import Cases from './pages/Main/components/Game/Cases/Cases.jsx'
import CasePage from './pages/Main/components/Game/Cases/Case/Case.jsx'
import "./style.css"

function App() {
  const balance = "500"

  const [action,setAction] = useState("")
  const [net,setNetwork] = useState("")
  let path = ""

  if(action == "TopUp"){
      path = "/payments/topup"
  }else{
      path = "/payments/withdraw"
  }

  const tg = window.Telegram.WebApp
  tg.setHeaderColor(tg.themeParams.header_bg_color)
  tg.themeParams.button_color = "#FF8911"

  return (
    <Routes>
        <Route path="/payments/topup" element={<TopUp net={net} />}/>
        <Route path="/payments/withdraw" element={<Withdraw net={net} balance={balance} />}/>
        <Route path="/payments/item" element={<Network setNet={setNetwork} path={path}/>}/>
        <Route path="/games/cases" element={<Cases/>}>
          <Route path="/games/cases/case1" element={<CasePage/>}/>
        </Route> 
        <Route path="/" element={<Main callback={setAction} balance={balance}/>}/>
    </Routes>
  )
}
export default App;
//
