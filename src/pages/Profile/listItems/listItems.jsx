import React,{ useContext,useEffect,useState } from 'react'
import ItemCard from './ItemCard/ItemCard.jsx'
import { ProfileContext } from '../ProfileContainer.jsx'
import { ListItemsContext } from './ListItemsContainer.jsx'
import './style.css'

const ListItems = () => { 
  const [profileContext,setProfileContext] = useContext(ProfileContext)
  const [listItemsContext,setListItemsContext] = useContext(ListItemsContext)

  const [items,setItems] = useState([
      {id: "0",img: "#",url: ""},
      {id: "1",img: "#",url: ""},
      {id: "2",img: "#",url: ""},
      {id: "3",img: "#",url: ""}
  ])

  const clear = () => {
    const list = document.querySelectorAll(".ItemCard")
    list.forEach(card => {
      if(card.classList.contains("Coloring")) {
        card.classList.remove("Coloring")
      }
    }); 
  }

  const AddStyle = (id) => {
    var elem = document.getElementById(id)
    elem.classList.add("Coloring")
  }

  useEffect(() => {
    clear()
    if(listItemsContext["mainId"] === "none"){
      setProfileContext( prev => ({...prev,mainButtonVisible: false}))      
    }else{
      setProfileContext( prev => ({...prev,mainButtonVisible: true,mainButtonCallback: listItemsContext["url"]}))      
      AddStyle(listItemsContext["mainId"])
    }
    
  }, [listItemsContext])
   
  return (
    <>
      <div className="ListItemContainer">
        {
          items.map((item) => 
            <ItemCard img={item.img} category={ProfileContext["category"]} id={item.id} url={item.url}/>
          )
        } 
      </div>
    </>
  )
}

export default ListItems
