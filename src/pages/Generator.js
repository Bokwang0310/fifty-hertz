import { useState, useEffect, useCallback, useRef } from "react";

import { getLrcTimeFormatFromSeconds } from "../utils";

import Modal from "../components/Modal";

function Generator({ musicName, isPlayerReady, getCurrentTime, musicInfo }) {
  const [open, setOpen] = useState(false);

  const lyricList = musicInfo.lyric.split("\n");

  const clickCountRef = useRef(0);
  const lrcLyricRef = useRef("");

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key !== "Enter" || !isPlayerReady) return;

      const currentClickCount = clickCountRef.current;

      if (currentClickCount === lyricList.length) {
        const answer = window.confirm(
          "LRC 파일이 생성되었습니다. 결과물을 다운 받으시겠습니까?"
        );
        if (answer) return setOpen(true);
        return window.location.reload();
      }

      const lrcTimeFormatOfCurrentTime = getLrcTimeFormatFromSeconds(
        getCurrentTime()
      );

      clickCountRef.current += 1;
      lrcLyricRef.current += `[${lrcTimeFormatOfCurrentTime}] ${lyricList[currentClickCount]}\n`;
    },
    [isPlayerReady, lyricList, getCurrentTime]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    open && (
      <Modal musicName={musicName} text={lrcLyricRef.current} open={open} />
    )
  );
}

export default Generator;
