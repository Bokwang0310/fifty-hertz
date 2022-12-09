import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";

import info from "../assets/info.json";
import { getLrcTimeFormatFromSeconds, filterMusicName } from "../utils";

import Background from "../components/Background";
import Player from "../components/Player";
import Lyric from "../components/Lyric";
import Modal from "../components/Modal";

function Generator() {
  const { musicName } = useParams();

  const [player, setPlayer] = useState(null);
  const [open, setOpen] = useState(false);

  const currentMusic = info[filterMusicName(musicName)];
  const [firstColor, secondColor] = currentMusic.themeColor;

  const lyricList = currentMusic.lyric.split("\n");

  const clickCountRef = useRef(0);
  const lrcLyricRef = useRef("");

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key !== "Enter" || player === null) return;

      const currentClickCount = clickCountRef.current;

      if (currentClickCount === lyricList.length) {
        const answer = window.confirm(
          "LRC 파일이 생성되었습니다. 결과물을 다운 받으시겠습니까?"
        );
        if (answer) return setOpen(true);
        return window.location.reload();
      }

      const lrcTimeFormatOfCurrentTime = getLrcTimeFormatFromSeconds(
        player.getCurrentTime()
      );

      clickCountRef.current += 1;
      lrcLyricRef.current += `[${lrcTimeFormatOfCurrentTime}] ${lyricList[currentClickCount]}\n`;
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
      {open && (
        <Modal musicName={musicName} text={lrcLyricRef.current} open={open} />
      )}
    </Background>
  );
}

export default Generator;
