import React,{ useState } from 'react'
import './style.css'

const Menu = ({getGame}) => {
  const [menuList,setMenuList] = useState([
    {title: "het"},
    {title: "het1"},
    {title: "het4"},
    {title: "het6"},
  ])
  return (
    <>
        {
          menuList.map((item)=> 
            <div className="MenuItem animationMenuCreate" onClick={() => getGame(item.title)}>
              {item.title}
            </div>
          )
        }
    </>
  )
}
export default Menu
