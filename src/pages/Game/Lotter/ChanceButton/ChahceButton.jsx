import React,{ useState,useEffect } from 'react'
import './style.css'

const ChanceButton = ({isVisible,callback}) => {
  const [container,setContainer] = useState()

  useEffect(() => {
    if(isVisible){
      setContainer(
        <div className="ChanceContainer anim-chanceButton-show">
          <button className="ChanceButton" onClick={() => callback(true)}>
            Add  
          </button>
          <button className="AlterButton" onClick={() => callback(false)}>
            Add  
          </button>
        </div>
      )       
      setTimeout(() => {
        const elem = document.getElementsByClassName("ChanceContainer")
        elem[0].classList.remove("anim-chanceButton-show") 
      }, 500);
    }else{
      const elem = document.getElementsByClassName("ChanceContainer")
      if(elem.length !== 0){
        elem[0].classList.add("anim-chanceButton-remove") 
        setTimeout(() => {
          setContainer( )
        }, 500);
      }
    }
  }, [isVisible])
   return (
    <>
      {container} 
    </>
  )
}
export default ChanceButton
