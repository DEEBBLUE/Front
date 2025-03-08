import React from 'react'
import './style.css'

function CasePrev({callback}) {
  const price = "50"
  const currency = "$"
  return (
    <>
      <div className="CaseContainer">
        <button className="CaseButton" onClick={callback}>
          <div className="CaseImg"></div>
          <div className="CasePrice"><p><span className="CaseCurrency">{currency}</span><span>{price}</span></p></div>
        </button>
      </div>
    </>
  ) 
}

export default CasePrev
