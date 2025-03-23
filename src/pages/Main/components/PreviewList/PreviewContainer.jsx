import React,{ createContext,useState } from 'react'

export const PreviewContext = createContext()

const PreviewContainer = ({children}) => {
  const state = useState(
    {mainId: "none",url: ""}
  )
  return(
    <PreviewContext.Provider value={state}>
      {children}
    </PreviewContext.Provider>
  )
}
export default PreviewContainer
