import React from "react";
import SimpleSlider from "./Slider3";
import FetchMusic from "./FetchMusic";
function TopSlider(props) {
  const Text = "TextSong";
  const DivImage = "forImgMusic";
  const FetchUrl = "http://localhost:3010/newList";
  return (
    <div className="SSDIV">
      <div className="ForTopText">TOP MUSIC</div>
      <SimpleSlider mysongs={FetchMusic(Text, DivImage, FetchUrl)} />
    </div>
  );
}
export default TopSlider;
