import { useState, useEffect } from "react";
import DefaultLyric from "./DefaultLyric";
import SyncLyric from "./SyncLyric";

function Lyric({
  musicName,
  textColor,
  activeColor,
  lyricList,
  getCurrentTime,
  isSyncLyric,
}) {
  const [lrcLyric, setLrcLyric] = useState("");

  useEffect(() => {
    fetch(`/lyrics/${musicName}.lrc`)
      .then((res) => res.text())
      .then(
        // Bad Code: Encapsulate Conditionals
        // document임을 확인하는 함수를 만들자
        (text) => (text[0] === "<" ? setLrcLyric("") : setLrcLyric(text)),
        (err) => console.error(err)
      );
  }, [musicName]);

  return isSyncLyric && lrcLyric ? (
    <SyncLyric
      lrcLyric={lrcLyric}
      textColor={textColor}
      activeColor={activeColor}
      getCurrentTime={getCurrentTime}
    />
  ) : (
    <DefaultLyric lyricList={lyricList} textColor={textColor} />
  );
}

export default Lyric;
