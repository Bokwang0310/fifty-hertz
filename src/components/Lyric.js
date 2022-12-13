import { useState, useEffect } from "react";

import DefaultLyric from "./DefaultLyric";
import SyncLyric from "./SyncLyric";

function Lyric({
  musicName,
  textColor,
  activeColor,
  lyricList,
  isPlayerReady,
  getCurrentTime,
  isSync,
}) {
  const [lrcLyric, setLrcLyric] = useState("");

  useEffect(() => {
    fetch(`/lyrics/${musicName}.lrc`)
      .then((res) => res.text())
      .then(
        (text) => (text[0] === "<" ? setLrcLyric("") : setLrcLyric(text)),
        (err) => console.error(err)
      );
  }, [musicName]);

  return !isSync && isPlayerReady && lrcLyric ? (
    <SyncLyric
      lrcLyric={lrcLyric}
      activeColor={activeColor}
      textColor={textColor}
      getCurrentTime={getCurrentTime}
    />
  ) : (
    <DefaultLyric lyricList={lyricList} textColor={textColor} />
  );
}

export default Lyric;
