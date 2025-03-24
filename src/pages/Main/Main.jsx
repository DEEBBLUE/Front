import React, { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from './Container.jsx'
import PreviewList from './components/PreviewList/PreviewList.jsx'
import Header from './components/Header/Header.jsx'
import Container from './Container.jsx'
import PreviewContainer from './components/PreviewList/PreviewContainer.jsx'

const Main = (props) => {
  window.Telegram.WebApp.BackButton.hide()

  const MainButton = window.Telegram.WebApp.MainButton
  const [mainContext,setMainContext] = useContext(MainContext)
  const nav = useNavigate()
  
  useEffect(() => {
    if(mainContext["mainButtonVisible"] === true ) {
      MainButton.show()
      console.log(mainContext["mainCallback"])
      MainButton.onClick(() => nav(mainContext["mainCallback"],{replace: false}))
    }else{
      MainButton.hide()
    }
  }, [mainContext])
  

  return (
    <>
      <Header/>
      <PreviewContainer>
        <PreviewList/>      
      </PreviewContainer>
    </>
  ); 
}

export default Main
