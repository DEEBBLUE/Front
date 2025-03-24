import React,{ createContext,useState } from 'react'

export const LotterContext = createContext()

const LotterContainer = ({children}) => {
  const context = useState({
    activeList: [0],count: 0,chance: true,chanceButtonIsVis: false,
  })


  return (
    <LotterContext.Provider value={context}>
      {children}
    </LotterContext.Provider>

  )
}
export default LotterContainer
