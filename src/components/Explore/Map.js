import React, { useState } from "react";
import PlaySong from "./PlaySong";
import { Link } from "react-router-dom";
function MapList(DivImageS, TextSong, searchresult) {
  const [playMusic, setPlayMusic] = useState(false);
  const [prevSong, setPrevSong] = useState();
  const [activSingID, setActiv] = useState("");
  return searchresult.map((item, index) => {
    const isActivSong = item.ID === activSingID && playMusic;
    const musicStyle = isActivSong
      ? `${DivImageS} ${DivImageS}_active`
      : DivImageS;
    let myUrl = "/CardSong?song=" + item.ID;
    return (
      <div className={musicStyle} key={index}>
        <img src={item.IMG} alt="Third slide" />
        <div className={TextSong}>
          <Link className="RouterLink" to={myUrl}>
            {item.Name}
          </Link>
        </div>
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
}
export default MapList;
