import React, { useEffect, useState } from "react";
import PlaySong from "./PlaySong";
import { Link } from "react-router-dom";
import MapList from "./Map";
const Packs = () => {
  const TextSong = "TextSong";
  const DivImageS = "forImgMusic";
  const [searchresult, setSearch] = useState([]);
  let text = "";
  useEffect(() => {
    fetch(`http://localhost:3010/AllList`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let OurSong = [...data];
        setSearch(OurSong);
      });
  }, []);
  function mySearch(event) {
    text = event.target.value;
    fetch(`http://localhost:3010/Search?search=${text}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let dataSearch = [...data];
        setSearch(dataSearch);
      });
  }
  // const [playMusic, setPlayMusic] = useState(false);
  // const [prevSong, setPrevSong] = useState();
  // const [activSingID, setActiv] = useState("");
  // const SearchMusic = searchresult.map((item, index) => {
  //   const isActivSong = item.ID === activSingID && playMusic;
  //   const musicStyle = isActivSong
  //     ? `${DivImageS} ${DivImageS}_active`
  //     : DivImageS;
  //   return (
  //     <div className={musicStyle} key={index}>
  //       <img src={item.IMG} alt="Third slide" />
  //       <div>{item.Name}</div>
  //       <div
  //         onClick={(event) => {
  //           PlaySong(event, setPrevSong, setPlayMusic, prevSong, playMusic);
  //           setActiv(item.ID);
  //         }}
  //         className="button1"
  //       ></div>
  //       <audio src={item.MP3} type="audio/ogg"></audio>
  //     </div>
  //   );
  // });
  return (
    <div>
      <input
        className="inputSearch"
        onChange={mySearch.bind(this)}
        placeholder="Search here!"
      />
      <div className="MusicSearch">
        {MapList(DivImageS, TextSong, searchresult)}
      </div>
    </div>
  );
};

export default Packs;
