import React from "react";
import Items from "./Pagination";
import FetchMusic from "./FetchMusic";
const Packs = () => {
  const Text = "textPag";
  const DivImage = "forImgMusicP";
  const FetchUrlRock = "http://localhost:3010/RockList";
  const FetchUrlHipHop = "http://localhost:3010/HipHopList";
  return (
    <div>
      <div className="ForPaginnation">
        <div className="ForPartPag">
          {" "}
          <p className="TextGenere">Rock MUSIC</p>
          <Items items={FetchMusic(Text, DivImage, FetchUrlRock)} />
        </div>
        <div className="ForPartPag">
          {" "}
          <p className="TextGenere">HipHop MUSIC</p>
          <Items items={FetchMusic(Text, DivImage, FetchUrlHipHop)} />
        </div>
      </div>
    </div>
  );
};

export default Packs;
