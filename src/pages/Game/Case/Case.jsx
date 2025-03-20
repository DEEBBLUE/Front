import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import onClick from './spin.js' 
import SpinLine from './SpinLine/SpinLine.jsx'
import AmountList from './AmountList/AmountList.jsx'
import './style.css'

const Case = () => {
  const [anim,setAnim] = useState(false)
  const [amountList,setAmountList] = useState([
    {amount: " 25"},
    {amount: "50"},
    {amount: " 100"},
  ])
  if (anim){
    window.Telegram.WebApp.MainButton.hide()

    const list = document.getElementsByClassName("ListAmountContainer") 
    const line = document.getElementsByClassName("CaseSpinLine")
    list[0].classList.add("anim-ListAmount-remove")
    line[0].classList.add("anim-goto-center")
    setTimeout(() => {
      onClick()       
    },250)
    setTimeout(() => {
      const list = document.getElementsByClassName("ListAmountContainer") 
      const line = document.getElementsByClassName("CaseSpinLine")
      list[0].classList.remove("anim-ListAmount-remove")
      line[0].classList.remove("anim-goto-center")   
      console.log("her")
      setAnim(!anim)
    },12000 );
  }else{
    window.Telegram.WebApp.MainButton.show()
    window.Telegram.WebApp.MainButton.onClick(() => setAnim(!anim))
  }

  const nav = useNavigate()
  window.Telegram.WebApp.BackButton.show()
  window.Telegram.WebApp.BackButton.onClick(() => nav("/",{replace: false}))

  return (
    <>
      <div className="CaseMainContainer">
        <AmountList list={amountList}/>
        <SpinLine/>
        <button onClick={() => setAnim(!anim)}> Start </button>
      </div>
    </>
  ) 
}
export default Case
