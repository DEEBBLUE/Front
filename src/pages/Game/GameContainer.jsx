import React,{ createContext,useState } from 'react'

export const GameContext = createContext()

const GameContainer = ({children}) => {
  const context = useState(
    { isActive: false }
  )
  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>

  )
}
export default GameContainer
