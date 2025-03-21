import React,{ useState } from 'react'
import './style.css'

const AmountList = () => {
  const [amountList,setAmountList] = useState([
    {amount: " 25"},
    {amount: "50"},
    {amount: " 100"},
  ])
 
  return (
    <>
      <div className="ListAmountContainer">
        {
          amountList.map((amount) => <div className="AmountContainer">{amount.amount}</div>)
        }
      </div>
    </>
  )
}
export default AmountList
