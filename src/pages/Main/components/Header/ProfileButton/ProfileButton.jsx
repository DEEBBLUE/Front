import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ProfileButton = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="ProfileButtonContainer"> 
        <button className = "ProfileButton" onClick = {() => nav("profile/",{replace: false}) }></button>
      </div>
    </>
  )
}

export default ProfileButton
