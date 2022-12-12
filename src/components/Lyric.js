import { useState, useEffect } from "react";

import DefaultLyric from "./DefaultLyric";
import SyncLyric from "./SyncLyric";

// generator에서는 default lyric

function ResultLyric({ musicName, musicInfo, isPlayerReady, getCurrentTime }) {
  const [lrcLyric, setLrcLyric] = useState("");

  useEffect(() => {
    fetch(`/lyrics/${musicName}.lrc`)
      .then((res) => res.text())
      .then((text) => (text[0] === "<" ? setLrcLyric("") : setLrcLyric(text)))
      .catch((err) => console.error(err));
  }, [musicName]);

  return isPlayerReady && lrcLyric ? (
    <SyncLyric
      lrcLyric={lrcLyric}
      activeColor={musicInfo.activeColor}
      textColor={musicInfo.textColor}
      getCurrentTime={getCurrentTime}
    />
  ) : (
    <DefaultLyric lyric={musicInfo.lyric} textColor={musicInfo.textColor} />
  );
}

export default ResultLyric;
