import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify'
import SongCard from '../../components/SongCard/SongCard';
import Queue from '../../components/Queue/Queue'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Widgets from '../../components/widgets/Widgets';
const Player = () => { 

  const location= useLocation();
  const [tracks,setTracks]=useState([]);
  const [currentTracks,setCurrentTracks]= useState({});
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    if(location.state){
      apiClient.get('playlists/' + location.state?.id + '/tracks')
      .then((res)=>{
        setTracks(res.data.items);
        setCurrentTracks(res.data.items[0].track)
      })
    }
  },[location.state])
  
  useEffect(()=>{
    if(tracks.length!=0){
      setCurrentTracks(tracks[currentIndex].track)
    }
  },[currentIndex,tracks])
   
  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
        <AudioPlayer currentTrack={currentTracks} total={tracks} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
        <Widgets artistID={currentTracks?.album?.artists[0]?.id} />
      </div>
      <div className='right-player-body'>
        <SongCard album={currentTracks.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player