import React, { useEffect, useState } from "react";
import PlaySong from "./PlaySong";
const CardSong = (props) => {
  // console.log(props.ourStore.getState());
  console.log(localStorage.getItem("Login"));
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("song");
  const [saveProduct, setSaveProduct] = useState([]);
  let urlDownload = "";

  function myDownload(ourSong, nameSong) {
    if (localStorage.getItem("Login") === "0") {
      document.getElementsByClassName("ForModalExit")[0].click();
      console.log(localStorage.getItem("Login"));
    } else {
      urlDownload = "http://localhost:3000/" + ourSong;
      console.log(urlDownload);
      const a = document.createElement("a");
      a.href = urlDownload;
      a.download = urlDownload;
      a.click();
      fetch("http://localhost:3010/DownloadSingle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NameSingle: nameSong,
          Phone: localStorage.getItem("Login"),
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  }
  useEffect(() => {
    fetch(`http://localhost:3010/Cardong?SongID=${product}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let SaveSong = [...data];
        setSaveProduct(SaveSong);
      });
  }, []);

  const DivImage = "forImgMusic";
  const [playMusic, setPlayMusic] = useState(false);
  const [prevSong, setPrevSong] = useState();
  const [activSingID, setActiv] = useState("");
  const download = saveProduct.map((item, index) => {
    const isActivSong = item.ID === activSingID && playMusic;
    const musicStyle = isActivSong
      ? `${DivImage} ${DivImage}_active`
      : DivImage;
    return (
      <div className={musicStyle + " DivCardSong"} key={index}>
        <img src={item.IMG} alt="Third slide" />
        <div className="TextCardSong">{item.Name}</div>
        <div
          onClick={(event) => {
            PlaySong(event, setPrevSong, setPlayMusic, prevSong, playMusic);
            setActiv(item.ID);
          }}
          className="button1"
        ></div>
        <audio src={item.MP3} type="audio/ogg"></audio>
        <button
          className="ButtonDownload"
          onClick={myDownload.bind(this, item.MP3, item.Name)}
        >
          Download
        </button>
      </div>
    );
  });
  return <div>{download}</div>;
};

export default CardSong;
