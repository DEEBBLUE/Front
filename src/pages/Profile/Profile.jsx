import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListItems from './listItems/listItems.jsx'
import Transform from '../transform.js'
import './style.css'

function Profile(){
  const balance = "1000"
  const nav = useNavigate() 
  window.Telegram.WebApp.BackButton.show()
  window.Telegram.WebApp.BackButton.onClick(() => {
    nav("/",{replace: false})
  })
  window.Telegram.WebApp.MainButton.hide()

  const [context,setContext] = useState("prize")
  const [items,setItems] = useState([
      {id: "0",img: "#", amount: "prize"},
      {id: "1",img: "#", amount: "prize"},
      {id: "2",img: "#", amount: "prize"},
      {id: "3",img: "#", amount: "prize"}
    ])
  if(context === "prize"){
    items.map((item) => item.amount="prize")
  }else{
    items.map((item) => item.amount="game")
  }

  return (
    <>
      <div className="BalanceContainer">
        <div className="Balance">
          {Transform(balance)} 
        </div>
        <button className="PaymentsButton" onClick={() => nav("/payments",{replace: false})}>Пополнить</button>
      </div>
      <div className="ChoiseButtonContainer">
        <button className="ChoiseButton" onClick={() => setContext("prize")}>Prizes</button>
        <button className="ChoiseButton" onClick={() => setContext("game")}>Games</button>
      </div>
      <ListItems listItems={items}/>
    </>
  )

}

export default Profile
