import React,{ createContext,useState } from 'react'

export const ProfileContext = createContext()

const ProfileContainer = ({children}) => {
  const context = useState({
    mainButtonVisible: false,mainButtonCallback: "",category: "prize"
  })
  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  )
}
export default ProfileContainer
