import React, { useEffect, useState } from "react";
import PlaySong from "./PlaySong";

function FetchMusic(Text, DivImage, url) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(url, {
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
  }, [url]);
  const [playMusic, setPlayMusic] = useState(false);
  const [prevSong, setPrevSong] = useState();
  const [activSingID, setActiv] = useState("");
  const topSongs = songs.map((item, index) => {
    const isActivSong = item.ID === activSingID && playMusic;
    const musicStyle = isActivSong
      ? `${DivImage} ${DivImage}_active`
      : DivImage;
    return (
      <div className={musicStyle} key={index}>
        <img src={item.IMG} alt="Third slide" />
        <div className={Text}>{item.Name}</div>
        {/* <div className="overlay1"></div> */}
        <div
          onClick={(event) => {
            PlaySong(event, setPrevSong, setPlayMusic, prevSong, playMusic);
            setActiv(item.ID);
          }}
          className="button1"
        ></div>
        <audio src={item.MP3} type="audio/ogg"></audio>
      </div>
    );
  });
  return topSongs;
}
export default FetchMusic;
