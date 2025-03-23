import React,{ useContext } from 'react'
import { ListItemsContext } from '../ListItemsContainer.jsx'
import device from 'current-device'
import './style.css'

const ItemCard = ({img,category,id,url}) => {
  const [listItemsContext,setListItemsContext] = useContext(ListItemsContext)
  const action = () => {
    if(listItemsContext["mainId"] === id){
      setListItemsContext(prev => ({...prev,mainId: "none"}))
    }else{
      setListItemsContext(prev => ({...prev,mainId: id,url: url}))
    }
  }

  const onTouch = device.mobile() ? action : () => {}
  const onClick = device.desktop() ? action : () => {}

  return (
    <>
      <div className="ItemCard" id={id} key={id} onClick={onClick} onTouchEnd={onTouch}>
        <div className="ItemCardImg">{img}</div>
        <div className="ItemCardAmount">{category}</div>
      </div>
    </>
  )
}
export default ItemCard
