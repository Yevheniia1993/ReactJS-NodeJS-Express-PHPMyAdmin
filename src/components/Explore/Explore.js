import React, { useEffect, useState } from "react";
import NoTransitionExample from "./Slider2";
import Items from "./Pagination";
import FetchMusic from "./FetchMusic";
import SimpleSlider from "./Slider3";
import PlaySong from "./PlaySong";
import Filter from "./Filter";
function Explore() {
  const TextAllTop = "TextSong";
  const DivImageAllTop = "forImgMusic";
  const Text = "textPag";
  const DivImage = "forImgMusicP";
  const FetchUrlNew = "http://localhost:3010/newList";
  const FetchUrlAll = "http://localhost:3010/AllList";
  const Show = 6;
  const ShowAlbum = 3;
  const [Genere, setGenere] = useState([]);
  const [MusicGenere, setMusicGenere] = useState([]);
  const TextG = "TextSong";
  const DivImageG = "forImgMusic";
  function doneGenere(genere) {
    let mygenere = genere.replace(/&/g, "%26");
    fetch(`http://localhost:3010/GenereListSong?Genere=${mygenere}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let GenreSong = [...data];
        setMusicGenere(GenreSong);
      });
  }
  const [playMusic, setPlayMusic] = useState(false);
  const [prevSong, setPrevSong] = useState();
  const MusicGenerePlay = MusicGenere.map((item, index) => {
    return (
      <div
        className={DivImageG}
        key={index}
        onClick={(event) =>
          PlaySong(event, setPrevSong, setPlayMusic, prevSong, playMusic)
        }
      >
        <img src={item.IMG} alt="Third slide" />
        <div className={TextG}>{item.Name}</div>
        <audio src={item.MP3} type="audio/ogg"></audio>
      </div>
    );
  });
  useEffect(() => {
    fetch("http://localhost:3010/GenereList", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setGenere(dataSong);
      });
  }, []);
  const Generemy = Genere.map((item, index) => {
    // если индекс ===0 добавить еще доп класс активе
    return (
      <div key={index}>
        <button
          className="buttonGenere"
          onClick={doneGenere.bind(this, item.Genere)}
        >
          {item.Genere}
        </button>
      </div>
    );
  });
  return (
    <div>
      <NoTransitionExample />
      <div className="SSDIV">
        <div className="ForTopText">TOP MUSIC</div>
        <SimpleSlider
          Show={Show}
          mysongs={FetchMusic(TextAllTop, DivImageAllTop, FetchUrlNew)}
        />
      </div>
      <div className="ForPaginnation">
        <div className="ForPartPag">
          <Items items={FetchMusic(Text, DivImage, FetchUrlNew)} />
        </div>
        <div className="ForPartPag">
          <Items items={FetchMusic(Text, DivImage, FetchUrlAll)} />
        </div>
      </div>
      <div className="ForCreator">
        {" "}
        <div className="imgDivCreator">
          <img className="imgCreators" src="imagesMusic/album.avif" alt="" />
        </div>
        <div className="textCreators">
          <h1>Coop The Truth</h1>
          <p>
            Fresh off composing the sample for the title track “Over It” off
            Summer Walker’s debut album & co-producing “Semi-Automatic” for Wale
            & “On My Way 2 School” for Dave East, Coop The Truth is back with
            another collection of compositions.
          </p>
        </div>
        <div className="ForAlbum">
          <div className="SSDIV">
            <div className="ForTopText">TOP MUSIC</div>
            <SimpleSlider
              mysongs={FetchMusic(TextAllTop, DivImageAllTop, FetchUrlNew)}
              Show={ShowAlbum}
            />
          </div>
        </div>
      </div>
      <div className="nameGenere">{Generemy}</div>
      <SimpleSlider mysongs={MusicGenerePlay} Show={Show} />
      <Filter />
    </div>
  );
}
export default Explore;
