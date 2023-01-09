function PlaySong(event, setPrevSong, setPlayMusic, prevSong, playMusic) {
  let Song = event.target.nextElementSibling;
  setPrevSong(Song);
  // for (let i = 0; i < document.getElementsByTagName("audio").length; i++) {
  //   document.getElementsByTagName("audio")[i].pause();
  //   document.getElementsByTagName("audio")[i].currentTime = 0;
  //   console.log(document.getElementsByTagName("audio")[i]);
  // }
  document.querySelectorAll("audio").forEach((el) => {
    el.pause();
  });
  document.querySelectorAll(".forImgMusicP_active").forEach((el) => {
    el.classList.remove("forImgMusicP_active");
  });
  document.querySelectorAll(".forImgMusicP_active").forEach((el) => {
    el.classList.add("forImgMusicP");
  });

  if (playMusic === false) {
    setPlayMusic(true);
    Song.play();
    console.log("play", playMusic, Song, prevSong);
  }
  if (playMusic === true) {
    setPlayMusic(false);
    Song.pause();
    Song.currentTime = 0;
    console.log("stop", playMusic, Song, prevSong);
  }
  if (Song !== prevSong && prevSong !== undefined) {
    setPlayMusic(true);
    prevSong.pause();
    prevSong.currentTime = 0;
    Song.play();
    console.log("play/stop", playMusic, Song, prevSong);
  }
}

export default PlaySong;
