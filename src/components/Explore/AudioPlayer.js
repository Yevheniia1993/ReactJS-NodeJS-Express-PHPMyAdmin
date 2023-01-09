import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import PlaySong from "./PlaySong";
function AudioMusic() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/newList", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setSongs(dataSong);
      });
  }, []);

  const topSongs = songs.map((item, index) => {
    return (
      <div key={index}>
        <div>{item.Name}</div>
        <ReactAudioPlayer src={item.MP3} controls />
      </div>
    );
  });
  return <div>{topSongs} </div>;
}
export default AudioMusic;
