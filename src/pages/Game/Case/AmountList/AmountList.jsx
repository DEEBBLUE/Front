import React from 'react'
import './style.css'

const AmountList = ({list}) => {
  return (
    <>
      <div className="ListAmountContainer">
        {
          list.map((amount) => <div className="AmountContainer">{amount.amount}</div>)
        }
      </div>
    </>
  )
}
export default AmountList
