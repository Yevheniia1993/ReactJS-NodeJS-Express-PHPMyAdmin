import React from "react";
import SimpleSlider from "./Slider3";
import FetchMusic from "./FetchMusic";
function AllSongSlider(props) {
  const Text = "TextSong";
  const DivImage = "forImgMusic";
  const FetchUrl = "http://localhost:3010/AllList";
  return (
    <div className="SSDIV">
      <div className="ForTopText">All MUSIC</div>
      <SimpleSlider mysongs={FetchMusic(Text, DivImage, FetchUrl)} />
    </div>
  );
}
export default AllSongSlider;
