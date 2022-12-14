import { useState, useEffect, useRef } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import musicInfo from "../assets/music_info.json";
import { filterMusicName } from "../utils";

import Generator from "./Generator";
import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";

function Music() {
  const { name } = useParams();
  const musicName = filterMusicName(name);

  const {
    url,
    lyric: lyricText,
    themeColor: [firstColor, secondColor],
    textColor,
    activeColor,
  } = musicInfo[musicName];

  const [lyricList, setLyricList] = useState(lyricText.split("\n"));
  const [isPlayerReady, setPlayerReady] = useState(false);
  const getCurrentTimeRef = useRef();

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${musicName} - 50Hz`;
  }, [musicName]);

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player
        url={url}
        onReady={(player) => {
          getCurrentTimeRef.current = player.getCurrentTime;
          setPlayerReady(true);
        }}
      />
      <Routes>
        <Route
          path="generator"
          element={
            <Generator
              musicName={musicName}
              lyricList={lyricList}
              isPlayerReady={isPlayerReady}
              getCurrentTime={getCurrentTimeRef.current}
              changeLyricLine={(lineIndex) => {
                setLyricList((prevLyricList) =>
                  prevLyricList.map((lyric, i) =>
                    i === lineIndex ? `✔️ ${lyric}` : lyric
                  )
                );
              }}
            />
          }
        />
      </Routes>
      <Lyric
        musicName={musicName}
        textColor={textColor}
        activeColor={activeColor}
        lyricList={lyricList}
        getCurrentTime={getCurrentTimeRef.current}
        isSyncLyric={
          !window.location.pathname.includes("generator") && isPlayerReady
        }
      />
    </Background>
  );
}

export default Music;
