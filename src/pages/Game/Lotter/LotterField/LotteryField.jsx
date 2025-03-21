import React from 'react'
import device from 'current-device'
import './style.css'

const LotteryField = ({index,anim}) => {
  const onTouch = device.mobile() ? anim : () => {}
  const onClick = device.desktop() ? anim : () => {}
  return (
    <div key={index} id={index} className="LotteryField" onClick={() => onClick(index)} onTouchEnd={() => onTouch(index)}>
      <div className="LotteryPrizeHide">
      </div>
    </div>
  )
}

export default LotteryField
