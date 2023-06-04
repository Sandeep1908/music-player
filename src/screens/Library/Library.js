import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import "./Library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



const Library = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylist(response.data.items);
    });
  }, []);

  const navigate=useNavigate()

  const playPlaylist=(id)=>{
    navigate('/player',{state:{id:id}})
  }
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlist?.map((playlist,id) => (
          <div className="playlist-card" style={{ color: "white" }} key={id} onClick={()=>playPlaylist(playlist.id)}>
            <img
              src={playlist.images[0].url}
              alt="logo"
              className="playlist-image"
            />

            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
