import { useState, useEffect, useRef, useCallback, useMemo } from "react";
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

  const changeLyricLine = useCallback((lineIndex) => {
    setLyricList((prevLyricList) =>
      prevLyricList.map((lyric, i) => (i === lineIndex ? `✔️ ${lyric}` : lyric))
    );
  }, []);

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
              // 최적화 문제로 state로 관리되는 lyricList를 전달하지 않음
              lyricList={useMemo(() => lyricText.split("\n"), [lyricText])}
              isPlayerReady={isPlayerReady}
              getCurrentTime={getCurrentTimeRef.current}
              changeLyricLine={changeLyricLine}
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
