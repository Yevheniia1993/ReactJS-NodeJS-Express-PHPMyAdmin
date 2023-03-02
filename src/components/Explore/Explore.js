import React, { useEffect, useState } from "react";
import NoTransitionExample from "./Slider2";
import Items from "./Pagination";
import FetchMusic from "./FetchMusic";
import SimpleSlider from "./Slider3";
import Filter from "./Filter";
import MapList from "./Map";

function Explore(props) {
  // let meStore = props.ourStore;
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
  const [activGenere, setActivGenere] = useState("");
  const TextG = "TextSong";
  let buttonGenere = "buttonGenere";
  let focusmy = true;
  function doneGenere(genere) {
    // console.log(localStorage.getItem("Login"));
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
  useEffect(() => {
    let FirstTab = "";
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
        FirstTab = dataSong[0].Genere;

        if (focusmy === true) {
          doneGenere(FirstTab);
          setActivGenere(FirstTab);
        }
      });
  }, []);
  const Generemy = Genere.map((item, index) => {
    const ActiveGenere = item.Genere === activGenere && focusmy;
    const musicGenere = ActiveGenere
      ? `${buttonGenere} ${buttonGenere}_active`
      : buttonGenere;
    return (
      <div key={index}>
        <button
          className={musicGenere}
          onClick={() => {
            doneGenere(item.Genere);
            setActivGenere(item.Genere);
          }}
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
      <SimpleSlider
        mysongs={MapList(DivImageAllTop, TextG, MusicGenere)}
        Show={Show}
      />
      <Filter />
    </div>
  );
}
export default Explore;
