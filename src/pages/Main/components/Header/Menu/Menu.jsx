import React,{ useState,useEffect,useContext } from 'react'
import { MainContext } from '../../../Container.jsx'
import { AppContext }from '../../../../../AppContext.jsx'
import device from 'current-device'

import './style.css'

const Menu = () => {
  const [mainContext,setMainContext] = useContext(MainContext)
  const [appContext,setAppContext] = useContext(AppContext)

  const action = ( category ) => {
    setMainContext(prev => ({ menuVisible: false, mainButtonVisible: false, mainCallback: ""}))  
    setAppContext(prev => ({balance: appContext.balance,category: category}))
  }

  const onTouch = device.mobile() ? action : () => {}
  const onClick = device.desktop() ? action : () => {}

  const [menuList,setMenuList] = useState([
    {title: "het"},
    {title: "het1"},
    {title: "het4"},
    {title: "het6"},
  ])
  const [container,setContainer] = useState()

  useEffect(() => {
    if(mainContext["menuVisible"]){
      setContainer(
        <div className="MenuListContainer animationMenuListCreate">
          {
            menuList.map((item,index)=> 
              <div className="MenuItem animationMenuCreate" 
                onClick={() => onClick(item.title)} 
                onTouchEnd={() => onTouch(item.title)}>
                <p className="ItemPar">{item.title}</p>
                <hr className="Line animationLineCreate"/>
              </div>
            )
          }
        </div>
      )
      setTimeout(() => {
        document.getElementsByClassName("MenuListContainer")[0].classList.remove("animationMenuListCreate")

        const list = document.getElementsByClassName("MenuItem")

        for(var i = 0; i < list.length; i++){

          const elem = list[i]
          if(elem.classList.contains("animationMenuCreate")){
            elem.classList.remove("animationMenuCreate")
            let lines = elem.getElementsByClassName("Line")
            for(let line of lines){
              line.classList.remove("animationLineCreate")
            }
          }
        }
      }, 250);  
    }
    else{
      const list = document.getElementsByClassName("MenuItem")
      if(list.length !== 0){
        document.getElementsByClassName("MenuListContainer")[0].classList.remove("animationMenuListCreate")
        for(var i = 0; i < list.length; i++){
          const elem = list[i]
          elem.classList.add("animationMenuRemove")
          let lines = elem.getElementsByClassName("Line")
          for(let line of lines){
            line.classList.add("animationLineRemove")
          }
        }
      }
      setTimeout(() => {
        setContainer()
      }, 250);
    }
  }, [mainContext])

  return (
    <>
      {container}        
    </>
  )
}
export default Menu
