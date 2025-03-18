import React,{ useState } from 'react'
import './style.css'

const Payments = () => {
  const [value,setValue] = useState(25)
  const onChange = (event) => {
    setValue(event.target.value)
  }
  window.Telegram.WebApp.MainButton.show()
  return (
    <>
      <div className="PaymentsContainer">
        <div className="PaymentsInputContainer"><input type="text" value={value} onChange={onChange} className="AmountTextInput"/></div> 
        <div className="PaymentsRangeContainer"><input type="range" value={value}  onChange={onChange} min="0" max="100" step="10" className="AmountRangeInput"/></div> 
      </div>
    </> 
  )
}

export default Payments
