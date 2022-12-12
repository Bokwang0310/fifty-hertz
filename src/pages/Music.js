import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import info from "../assets/info.json";
import { filterMusicName } from "../utils";

import Generator from "./Generator";
import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";

function Music() {
  const { name } = useParams();

  // TODO: ref로 관리
  const [getCurrentTime, setGetCurrentTime] = useState(null);
  const [isPlayerReady, setPlayerReady] = useState(false);

  const musicName = filterMusicName(name);
  const musicInfo = info[musicName];
  const [firstColor, secondColor] = musicInfo.themeColor;

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${musicName} - 50Hz`;
  }, [musicName]);

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player
        url={musicInfo.url}
        handleReady={(player) => {
          setPlayerReady(() => true);
          setGetCurrentTime(() => player.getCurrentTime);
        }}
      />
      <Routes>
        <Route
          path="generator"
          element={
            <Generator
              musicName={musicName}
              musicInfo={musicInfo}
              getCurrentTime={getCurrentTime}
              isPlayerReady={isPlayerReady}
            />
          }
        />
      </Routes>
      <Lyric
        musicName={musicName}
        musicInfo={musicInfo}
        getCurrentTime={getCurrentTime}
        isPlayerReady={isPlayerReady}
      />
    </Background>
  );
}

export default Music;
