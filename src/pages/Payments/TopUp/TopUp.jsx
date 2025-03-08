import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import getMess from '../getMess.jsx'
import { ReactComponent as TetherLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Tether.svg'
import './style.css'

function TopUp({net}) {
  const adress = "UQAhSMILJ20_-CCDMAJh3JjUxKwOgzSYedmEYc0UeStf3JRP"

  const tg = window.Telegram.WebApp
  const nav = useNavigate()  
  const item = getMess(net,"MessageCryptoLogo")
  const mess = (
    <>
      Переведите <TetherLogo className="MessageCryptoLogo"/>USDT в сети {item} на этот кошелёк
    </>
  )

  const backCallback = () => {
    nav("/payments/item",{replace: false}) 
  }

  const mainCallback = () => {
    nav("/",{replace: false}) 
  }
  const copy_bf = () => {
    navigator.clipboard.writeText(adress)
  }//copy text to buffer on click 

  
  tg.themeParams.button_color = "#FF8911"
  tg.MainButton.setText("На главную")
  tg.MainButton.onClick(mainCallback)
  tg.MainButton.show()

  tg.BackButton.onClick(backCallback)
  tg.BackButton.show()

  return (
    <div className="MainTopUp">
      <div className="Container">
        <div className="Message">
          <div className="DivButton">
            <button className={"ButtonAddr " + tg.colorScheme} tape="button" onClick={copy_bf}>
              <span className="ButtonText">{adress}</span>
            </button>
          </div> 
          <div className="DivMessage">{mess}</div>
        </div>
      </div>
    </div>
  );
}

export default TopUp
