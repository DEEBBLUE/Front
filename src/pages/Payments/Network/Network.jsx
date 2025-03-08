import React, { useState } from 'react'
import Item from './Item.jsx'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as TonLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Ton.svg'
import { ReactComponent as ErcLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Erc.svg'
import { ReactComponent as SolanaLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Solana.svg'
import { ReactComponent as BnbLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Bnb.svg'
import { ReactComponent as TronLogo } from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Tron.svg'
import './style.css'

function Network({path, setNet}) {
  window.Telegram.WebApp.MainButton.hide()

  const backButton = window.Telegram.WebApp.BackButton

  const nav = useNavigate() 

  backButton.show()
  backButton.onClick(() => {
    nav("/",{ replace: false })
  })

  return (
    <>
      <div className="NetContainer">
        <div className="NetworkName"><span>Выберете сеть</span></div>
        <div className="SmallContainer">
          <Item FullName = "The open network" ShortName="TON" path={path} setNet={setNet} Logo={<TonLogo className="CryptoLogo"/>}/>
          <Item FullName = "Ethereum" ShortName="ERC20" path={path} setNet={setNet} Logo={<ErcLogo className="CryptoLogo"/>}/>
          <Item FullName = "Tron" ShortName="TRC20" path={path} setNet={setNet} Logo={<TronLogo className="CryptoLogo"/>}/>
          <Item FullName = "BNB SmartChain" ShortName="BNB20" path={path} setNet={setNet} Logo={<BnbLogo className="CryptoLogo"/>}/>
          <Item FullName = "Solana" ShortName="SLN" path={path} setNet={setNet} Logo={<SolanaLogo className="CryptoLogo"/>}/>
        </div>
      </div>
    </>
  ); 
}

export default Network
//<div className=""></div>
