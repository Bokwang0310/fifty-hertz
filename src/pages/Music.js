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
  const musicInfo = info[musicName];
  const [firstColor, secondColor] = musicInfo.themeColor;

  const [lyric, setLyric] = useState(musicInfo.lyric);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${musicName} - 50Hz`;
  }, [musicName]);

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player
        url={musicInfo.url}
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
              musicInfo={musicInfo}
              getCurrentTime={getCurrentTimeRef.current}
              isPlayerReady={isPlayerReady}
              changeLyricLine={(lineIndex) => {
                setLyric((prevLyric) =>
                  prevLyric
                    .split("\n")
                    .map((line, i) => (i == lineIndex ? `✔️ ${line}` : line))
                    .join("\n")
                );
              }}
            />
          }
        />
      </Routes>
      <Lyric
        musicName={musicName}
        textColor={musicInfo.textColor}
        activeColor={musicInfo.activeColor}
        lyric={lyric}
        getCurrentTime={getCurrentTimeRef.current}
        isPlayerReady={isPlayerReady}
        isSync={window.location.pathname.includes("generator")}
      />
    </Background>
  );
}

export default Music;
