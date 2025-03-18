import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Preview from './Preview/Preview.jsx'

const PreviewList = ({itemsList, setMenuVisible,setMainVisible}) => {
  const nav = useNavigate()
  const [mainId,setMainId] = useState("none")

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
  const onClick = (id,url) => {
    setMenuVisible(false)
    setMainId(id)
    dropDownAll()
    if(id === mainId){
      setMainId("none")
      setMainVisible(false)
    }else{
      AddStyle(id)
      setMainVisible(true)
      MainButton.onClick(() => nav(url,{replace: false}))
    }
  }
  return (
    <>
      {
        itemsList.map((item) => 
          <Preview id={item.id} price={item.price} img={item.img} url={item.url} onClick={onClick}/> 
        )
      }
    </>  
  )
}
export default PreviewList
