import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import SidebarButton from '../SidebarButton/SidebarButton'
import {MdFavorite} from 'react-icons/md'
import { FaGripfire,FaPlay } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import {MdSpaceDashboard} from 'react-icons/md'
import apiClient from '../../spotify'
const Sidebar = () => {
  const [image,setImage]=useState("https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")

  useEffect(()=>{
    apiClient.get('me').then(response=>{
      setImage(response.data.images[0].url)
    })
  },[])
  return (
    <div className='sidebar-container'>
        <img src={image} alt=" img-error" className='profile-img' />

        <div>
            <SidebarButton to='/feed' title='Feed' icon={<MdSpaceDashboard/>}/>
            <SidebarButton to='/trending' title='Trending' icon={<FaGripfire/>}/>
            <SidebarButton to='/player' title='Player' icon={<FaPlay/>}/>
            <SidebarButton to='/favourites' title='Favourites' icon={<MdFavorite/>}/>
            <SidebarButton to='/' title='Library' icon={<IoLibrary/>}/>
            
        </div>
        
            <SidebarButton to='' title='Sign Out' icon={<FaSignOutAlt/>}/>
            
    </div>
  )
}

export default Sidebar