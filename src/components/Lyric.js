import { useState, useEffect } from "react";

import DefaultLyric from "./DefaultLyric";
import SyncLyric from "./SyncLyric";

function Lyric({
  musicName,
  textColor,
  activeColor,
  lyric,
  isPlayerReady,
  getCurrentTime,
  isSync,
}) {
  const [lrcLyric, setLrcLyric] = useState("");

  useEffect(() => {
    fetch(`/lyrics/${musicName}.lrc`)
      .then((res) => res.text())
      .then((text) => (text[0] === "<" ? setLrcLyric("") : setLrcLyric(text)))
      .catch((err) => console.error(err));
  }, [musicName]);

  return !isSync && isPlayerReady && lrcLyric ? (
    <SyncLyric
      lrcLyric={lrcLyric}
      activeColor={activeColor}
      textColor={textColor}
      getCurrentTime={getCurrentTime}
    />
  ) : (
    <DefaultLyric lyric={lyric} textColor={textColor} />
  );
}

export default Lyric;
