import { useState } from "react";
import { useParams } from "react-router-dom";

import info from "../assets/info.json";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";

const getMusic = (musicName) => musicName || "wrong-question";

function Generator() {
  const { musicName } = useParams();
  const [player, setPlayer] = useState(null);

  const currentMusic = info[getMusic(musicName)];
  const [firstColor, secondColor] = currentMusic.themeColor;

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player link={currentMusic.link} setRef={setPlayer} />
      <Lyric lyric={currentMusic.lyric} textColor={currentMusic.textColor} />
    </Background>
  );
}

export default Generator;
