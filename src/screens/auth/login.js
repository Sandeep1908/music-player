import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'
const login = () => {
  return (
    <div className='login-page'>
        <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg" alt="logo-spotify" className='logo' />
        <a href={loginEndpoint}><div className="login-btn">LOG IN</div></a>
    </div>
  )
}

export default login