import { useState, useEffect, useRef } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import info from "../assets/info.json";
import { filterMusicName } from "../utils";

import Generator from "./Generator";
import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";

function Music() {
  const { name } = useParams();

  const [isPlayerReady, setPlayerReady] = useState(false);
  const getCurrentTimeRef = useRef();

  const musicName = filterMusicName(name);
  const {
    url,
    lyric: lyricText,
    themeColor: [firstColor, secondColor],
    textColor,
    activeColor,
  } = info[musicName];
  const [lyricList, setLyricList] = useState(lyricText.split("\n"));

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${musicName} - 50Hz`;
  }, [musicName]);

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player
        url={url}
        handleReady={(player) => {
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
              getCurrentTime={getCurrentTimeRef.current}
              isPlayerReady={isPlayerReady}
              changeLyricLine={(lineIndex) => {
                setLyricList((prevLyricList) =>
                  prevLyricList.map((line, i) =>
                    i === lineIndex ? `✔️ ${line}` : line
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
        isPlayerReady={isPlayerReady}
        isSync={window.location.pathname.includes("generator")}
      />
    </Background>
  );
}

export default Music;
