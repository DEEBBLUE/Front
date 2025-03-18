import React,{ useState } from 'react'
import './style.css'

const ItemCard = ({img,amount,id,onClick}) => {
  return (
    <>
      <div className="ItemCard" id={id} onClick={() => onClick(id)}>
        <div className="ItemCardImg">{img}</div>
        <div className="ItemCardAmount">{amount}</div>
      </div>
    </>
  )
}
export default ItemCard
