import { useParams } from "react-router-dom";

import info from "../assets/info.json";
import lrcLyricObj from "../assets/lyrics/lyric.json";

import { usePlayerRef } from "../hooks/usePlayerRef";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";
import LrcLyric from "../components/LrcLyric";

const getMusic = (musicName) => musicName || "wrong-question";

function Music() {
  const { musicName } = useParams();
  const [playerRef, setPlayerRef] = usePlayerRef();

  const currentMusic = info[getMusic(musicName)];
  const [firstColor, secondColor] = currentMusic.themeColor;
  const lrcLyric = lrcLyricObj[getMusic(musicName)];

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player link={currentMusic.link} setRef={setPlayerRef} />
      {lrcLyric ? (
        <LrcLyric lrcLyric={lrcLyric} textColor={currentMusic.textColor} />
      ) : (
        <Lyric lyric={currentMusic.lyric} textColor={currentMusic.textColor} />
      )}
      <button
        onClick={() => {
          if (playerRef !== null)
            console.log(playerRef.current.getCurrentTime());
        }}
      >
        btn
      </button>
    </Background>
  );
}

export default Music;
