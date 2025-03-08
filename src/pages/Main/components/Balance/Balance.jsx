import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as WithdrawLogo } from '../../../../images/WidthDrawArrowLight.svg'
import { ReactComponent as PaymentsLogo } from '../../../../images/PaymentsArrowLight.svg'
import Transform from './transform.js'


function Balance({balance,setAction}) {
  const transformBalance = Transform(balance)  
  const currency = '$'
  const nav = useNavigate()

  const callback = (action) => {
    setAction(action)
    nav("/payments/item",{replace: false})
  }
  
  return (
    <>
      <div className="Main">
        <div className="BalanceDiv">
          <p className="BalancePar">
            <span className="Currency">{currency}</span>
            <span className="Balance">{transformBalance}</span>
          </p>
        </div>
        <div className="Exchange">
          <div className="PaymentsDiv" onClick={() => {callback("TopUp")}}>
              <PaymentsLogo className="Logo"/>
              <p className="PaymentsPar"><span>пополнить</span></p>
          </div>
          <div className="WithdrawDiv" onClick={() => {callback("Withdraw")}}>
            <WithdrawLogo className="Logo"/>
            <p className="WithdrawPar"><span>вывести</span></p>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Balance 
