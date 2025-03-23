import React,{ useState,useContext,useEffect } from 'react'

import Preview from './Preview/Preview.jsx'
import { PreviewContext } from './PreviewContainer.jsx'
import { MainContext } from '../../Container.jsx'

const PreviewList = () => {
  const [previewContext,setPreviewContext] = useContext(PreviewContext)
  const [mainContext,setMainContext] = useContext(MainContext)

  const [games,setGames] = useState([
    {id: "1", img: "#", price: "50", url: "/games/case/"},
    {id: "2", img: "#", price: "100",url: "/games/lottery/"},
    {id: "3", img: "#", price: "250",url: "/games/funnel/"},
  ])

  const clear = () => {
    const list = document.querySelectorAll(".PreviewContainer")
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

    if(previewContext["mainId"] === "none"){
      setMainContext(prev => ({ ...prev,menuVisible: false,mainButtonVisible: false, mainCallback: ""}))
    }else{
      setMainContext(prev => ({...prev,menuVisible: false,mainButtonVisible: true, mainCallback: previewContext["url"] }))
      AddStyle(previewContext["mainId"])
    }
  }, [previewContext])
   
  return (
    <>
      {
        games.map((item) => 
          <Preview id={item.id} price={item.price} img={item.img} url={item.url}/> 
        )
      }
    </>
  )
}
export default PreviewList
