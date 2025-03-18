import React,{ useState } from 'react'
import ItemCard from './ItemCard/ItemCard.jsx'
import './style.css'

function ListItems({listItems}){ 
  const MainButton = window.Telegram.WebApp.MainButton
  const [mainId,setMainId] = useState()

  const dropDownAll = () => {
    const list = document.querySelectorAll(".ItemCard")
    list.forEach(card => {
      if(card.classList.contains("Coloring")) {
        card.classList.remove("Coloring")
      }
    }); 
  }

  const AddStyle = (id) => {
    var elem = document.getElementById(id)
    console.log(elem)
    elem.classList.add("Coloring")
  }
  const onClick = (id) => {
    setMainId(id)
    dropDownAll()
    if(id === mainId){
      MainButton.hide()
      setMainId("none")
    }else{
      AddStyle(id)
      MainButton.show()
    }
  }
  return (
    <>
      <div className="ListItemContainer">
        {
          listItems.map((item) => 
            <ItemCard img={item.img} amount={item.amount} id={item.id} onClick={onClick}/>
          )
        } 
      </div>
    </>
  )
}

export default ListItems
