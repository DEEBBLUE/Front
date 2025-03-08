import React from 'react'
import { ReactComponent as TronLogo} from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Tron.svg'
import { ReactComponent as TonLogo} from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Ton.svg'
import { ReactComponent as ErcLogo} from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Erc.svg'
import { ReactComponent as BnbLogo} from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Bnb.svg'
import { ReactComponent as SolanaLogo} from '/home/lifter/scam_gem/front/src/images/CryptoLogo/Solana.svg'

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
