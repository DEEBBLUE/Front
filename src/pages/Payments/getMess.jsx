import React from 'react'
import { ReactComponent as TronLogo} from '../../images/CryptoLogo/Tron.svg'
import { ReactComponent as TonLogo} from '../../images/CryptoLogo/Ton.svg'
import { ReactComponent as ErcLogo} from '../../images/CryptoLogo/Erc.svg'
import { ReactComponent as BnbLogo} from '../../images/CryptoLogo/Bnb.svg'
import { ReactComponent as SolanaLogo} from '../../images/CryptoLogo/Solana.svg'

function getMess(net,className) {
  console.log(net)
  if( net == "TON"){
    return(<> <TonLogo className={className}/>TON</>)
  }else if( net == "TRC20"){
    return(<><TronLogo className={className}/>TRC20</>)
  }else if( net == "ERC20"){
    return (<><ErcLogo className={className}/>ERC20</>)
  }else if( net == "SLN"){
    return (<><SolanaLogo className={className}/>SLN</>)
  }else{
    return (<><BnbLogo className={className}/>BNB</>)
  }
}

export default getMess
