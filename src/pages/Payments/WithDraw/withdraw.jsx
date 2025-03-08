import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import getMess from '../getMess.jsx'

function Withdraw({net,balance}) {
  const [adress,setAdress] = useState()
  const [amount,setAmount] = useState()
  const nav = useNavigate()
  const mainButton = window.Telegram.WebApp.MainButton
  const backButton = window.Telegram.WebApp.BackButton

  const item = getMess(net,"WithdrawCryptoLogo")

  const mess = (
    <>
      Введите адрес {item} кошелька и сумму вывода
    </>
  )

  const update = (target) => {
    if(isNaN(Number(target)) == false) {

      console.log(isNaN(Number(target)))
      setAmount(target)
    }
  }

  const mainCallback = () => {
    nav("/",{replace: false})   
  }

  const backCallback = () => {
    nav("/payments/item",{replace: false})   
  }

  mainButton.show()
  mainButton.setText("Вывести")
  mainButton.onClick(mainCallback)

  backButton.show()
  backButton.onClick(backCallback)


  return (
    <>
      <div className="WithdrawContainer">
        <div className="SmallWithdrawContainer">
          <div className="InputDiv">
            <div className="WithdrawMessage">{mess}</div>
            <div className="Inputs">
              <div className="WithdrawAdress">
               <input 
                 className="WithdrawInput" 
                 value={adress}
                 onChange={e => {setAdress(e.target.value)}}
                 placeholder="Адрес"/>
             </div>
             <div className="WithdrawAmount">
               <input 
                 className="WithdrawInput" 
                 value={amount}
                 onChange={e => {update(e.target.value)}}
                 placeholder="Количество"/>
               <div className="WithdrawBalance">
                 <span className="WithdrawBalanceSpan">Баланс:{balance}.</span>
                 <button className="WithdrawBalanceButton" onClick={() => update(balance)}>Max</button>
               </div>
             </div>
            </div>
         </div>
       </div> 
      </div>
    </>
  ); 
}

export default Withdraw
