import React,{ useState } from 'react'
import Preview from './Preview/Preview.jsx'

const PreviewList = ({itemsList, setMenuVisible}) => {
  const [mainId,setMainId] = useState()
  const MainButton = window.Telegram.WebApp.MainButton

  const dropDownAll = () => {
    const list = document.querySelectorAll(".PreviewContainer")
    console.log({list})
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
    setMenuVisible(false)
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
      {
        itemsList.map((item) => 
          <Preview id={item.id} price={item.price} img={item.img} onClick={onClick}/> 
        )
      }
    </>  
  )
}
export default PreviewList
