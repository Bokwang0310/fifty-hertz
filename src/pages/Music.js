import { useRef } from "react";
import { useParams } from "react-router-dom";

import info from "../assets/info.json";
import lrcLyricObj from "../assets/lyrics/lyric.json";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";
import LrcLyric from "../components/LrcLyric";

const getMusic = (musicName) => (musicName ? musicName : "wrong-question");

function Music() {
  const { musicName } = useParams();
  const player = useRef(null);

  // const getCurrentTime = player.current.getCurrentTime();

  const currentMusic = info[getMusic(musicName)];
  const [firstColor, secondColor] = currentMusic.themeColor;
  const lrcLyric = lrcLyricObj[getMusic(musicName)];

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player link={currentMusic.link} player={player} />
      {lrcLyric ? (
        <LrcLyric lrcLyric={lrcLyric} textColor={currentMusic.textColor} />
      ) : (
        <Lyric lyric={currentMusic.lyric} textColor={currentMusic.textColor} />
      )}
    </Background>
  );
}

export default Music;
