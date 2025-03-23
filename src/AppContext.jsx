import React,{ createContext,useState } from 'react'

export const AppContext = createContext() 

const AppContainer = ({children}) => {
  const context = useState(
    {balance: "1000", category: ""}
  ) 
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContainer
