import React,{ useContext }from 'react'
import ProfileButton from './ProfileButton/ProfileButton.jsx'
import { MainContext } from '../../Container.jsx'
import Menu from './Menu/Menu.jsx'
import './style.css'

const Header = () => {
  
  const [context,setContext] = useContext(MainContext)

  return (
    <>
      <div className="MainHeaderContainer">

        <div className="HeaderContainer">
          <ProfileButton/>    
          <button className="MenuButton" onClick={() => 
            setContext(prev => ({menuVisible: !prev.menuVisible, mainButtonVisible: false, mainCallback: ""}))
          }>
          </button>
        </div>
        <Menu/>
      </div>

    </>

  )
}
export default Header
/*
 *const clear = () => {
    setTimeout(() => {
      const list = document.getElementsByClassName("MenuItem")
      if(list.length != 0){
        console.log({list})
        for(var i = 0; i < list.length; i++){
          if(list[i].classList.contains("animationMenuCreate")){
            list[i].classList.remove("animationMenuCreate")
          }
        }
      }
    }, 250);
  }
  const anim = () => {
    const list = document.getElementsByClassName("MenuItem")
    if(list.length != 0){
      for(var i = 0; i < list.length; i++){
        list[i].classList.add("animationMenuRemove")
      }
    }
  }

  const onClick = () => {
    if(!menuVisible){
      setMenuVisible(!menuVisible)
      clear()
    }else{
      anim()
      setTimeout(() => {
        setMenuVisible(!menuVisible)
      }, 250);
    }
  }

  const getGame = (game) => {
    callback(game)
    onClick()
  }
 *
 *
 * */
