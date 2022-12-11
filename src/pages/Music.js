import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import info from "../assets/info.json";
import { filterMusicName } from "../utils";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";
import LrcLyric from "../components/LrcLyric";

function Music() {
  const { musicName } = useParams();
  const [player, setPlayer] = useState(null);
  const [lrcLyric, setLrcLyric] = useState(null);

  const currentMusicName = filterMusicName(musicName);
  const currentMusicObj = info[currentMusicName];
  const [firstColor, secondColor] = currentMusicObj.themeColor;

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${currentMusicName} - 50Hz`;

    fetch(`/lyrics/${filterMusicName(musicName)}.lrc`)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        if (text[0] === "<") return setLrcLyric(null);
        return setLrcLyric(text);
      });
  }, []);

  return (
    <Background firstColor={firstColor} secondColor={secondColor}>
      <Player url={currentMusicObj.url} setRef={setPlayer} />
      {lrcLyric && player ? (
        <LrcLyric
          lrcLyric={lrcLyric}
          activeColor={currentMusicObj.activeColor}
          textColor={currentMusicObj.textColor}
          getCurrentTime={player.getCurrentTime}
        />
      ) : (
        <Lyric
          lyric={currentMusicObj.lyric}
          textColor={currentMusicObj.textColor}
        />
      )}
    </Background>
  );
}

export default Music;
