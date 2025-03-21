import React from 'react'

const LotteryField = ({index,anim}) => {
  return (
    <div key={index} id={index} className="LotteryField" onClick={() => anim(index)} onTouchEnd={() => anim(index)}>
      <div className="LotteryPrize">
      </div>
    </div>
  )
}

export default LotteryField
