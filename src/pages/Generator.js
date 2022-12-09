import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";

import info from "../assets/info.json";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";

const getMusic = (musicName) => musicName || "wrong-question";

const padTo2Digits = (num) => num.toString().padStart(2, "0");

const getLrcTimeFormatFromTotalSeconds = (totalSeconds) => {
  const fixedTotalSeconds = totalSeconds.toFixed(2);
  const int = Math.trunc(fixedTotalSeconds);
  const float = fixedTotalSeconds - int;

  const [minutes, seconds] = [Math.floor(int / 60), int % 60];
  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo2Digits(
    Math.trunc(float * 100)
  )}`;
};

function Generator() {
  const { musicName } = useParams();
  const [player, setPlayer] = useState(null);

  const currentMusic = info[getMusic(musicName)];
  const [firstColor, secondColor] = currentMusic.themeColor;

  const lyricList = currentMusic.lyric.split("\n");

  const clickCountRef = useRef(0);
  const lrcLyricRef = useRef("");

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" && player !== null) {
        const currentSeconds = player.getCurrentTime();
        const lrcTimeFormatOfCurrentTime =
          getLrcTimeFormatFromTotalSeconds(currentSeconds);

        const currentClickCount = clickCountRef.current;
        if (currentClickCount === lyricList.length) {
          console.log("끝");
          console.log(lrcLyricRef.current);
          return;
        }

        const currentLrcLine = `[${lrcTimeFormatOfCurrentTime}] ${lyricList[currentClickCount]}`;
        console.log(currentLrcLine);
        clickCountRef.current += 1;

        lrcLyricRef.current += `${currentLrcLine}\n`;
      }
    },
    [player]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player link={currentMusic.link} setRef={setPlayer} />
      <Lyric lyric={currentMusic.lyric} textColor={currentMusic.textColor} />
    </Background>
  );
}

export default Generator;
