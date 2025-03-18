import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Payments = () => {
  const nav = useNavigate()
  const [value,setValue] = useState(25)

  window.Telegram.WebApp.MainButton.show()

  window.Telegram.WebApp.BackButton.show()
  window.Telegram.WebApp.BackButton.onClick(() => nav("/profile/",{replace: false}))

  const onChange = (event) => {
    setValue(event.target.value)
  }
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
