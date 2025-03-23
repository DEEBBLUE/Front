import React,{ createContext,useState } from 'react'

export const ListItemsContext = createContext()

const ListItemsContainer = ({children}) => {

  const context = useState({
    mainId: "none",url: ""
  })

  return (
    <ListItemsContext.Provider value={context}>
      {children}
    </ListItemsContext.Provider>
  )
}

export default ListItemsContainer

