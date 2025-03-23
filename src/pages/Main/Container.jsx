import React,{ useState,createContext } from 'react'

export const MainContext = createContext("hee")

const Container = ({ children }) => {

  const context = useState(
      {menuVisible: false,mainButtonVisible: false, mainCallback: ""}
  )

  return (
    <>
      <MainContext.Provider 
        value={context}>
        {children}
      </MainContext.Provider>
    </>
  ) 
}
export default Container
