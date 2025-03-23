import React,{ useState,useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from './ProfileContainer.jsx'
import { AppContext } from '../../AppContext.jsx'
import ListItems from './listItems/listItems.jsx'
import Transform from '../transform.js'
import ListItemsContainer from './listItems/ListItemsContainer.jsx'
import './style.css'

function Profile(){
  const backButton = window.Telegram.WebApp.BackButton
  const mainButton = window.Telegram.WebApp.MainButton
  const nav = useNavigate() 

  const [appContext,setAppContext] = useContext(AppContext)
  const [profileContext,setProfileContext] = useContext(ProfileContext)

  const balance = appContext["balance"] 

  backButton.show()
  backButton.onClick(() => {
    nav("/",{replace: false})
  })

  useEffect(() => {
    setAppContext(prev => ({...prev,category: profileContext["category"]}))

    if(profileContext["mainButtonVisible"]){
      mainButton.show()      
      mainButton.onClick(() => nav(profileContext["mainButtonCallback"]))
    }else{
      mainButton.hide()      
    }
  }, [profileContext])
  

  return (
    <>
      <div className="BalanceContainer">
        <div className="Balance">
          {Transform(balance)} 
        </div>
        <button className="PaymentsButton" onClick={() => nav("/payments",{replace: false})}>Пополнить</button>
      </div>
      <div className="ChoiseButtonContainer">
        <button className="ChoiseButton" onClick={() => setProfileContext(prev => ({...prev,category: "prizes"}))}>Prizes</button>
        <button className="ChoiseButton" onClick={() => setProfileContext(prev => ({...prev,category: "games"}))}>Games</button>
      </div>
      <ListItemsContainer>
        <ListItems/>
      </ListItemsContainer>
    </>
  )

}

export default Profile
