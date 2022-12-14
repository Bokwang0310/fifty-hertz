import { useState, useEffect, useRef, useCallback } from "react";
import { getLrcTimeFormatFromSeconds } from "../utils";
import Modal from "../components/Modal";

function Generator({
  musicName,
  lyricList,
  isPlayerReady,
  getCurrentTime,
  changeLyricLine,
}) {
  const [open, setOpen] = useState(false);
  const clickCountRef = useRef(0);
  const lrcLyricRef = useRef("");

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key !== "Enter" || !isPlayerReady) return;

      const currentClickCount = clickCountRef.current;

      // 다 만들고 클릭 하나 더 받음
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

      lrcLyricRef.current += `[${lrcTimeFormatOfCurrentTime}] ${lyricList[currentClickCount]}\n`;
      changeLyricLine(clickCountRef.current);
      clickCountRef.current += 1;
    },
    [isPlayerReady, lyricList, getCurrentTime]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return <Modal open={open} text={lrcLyricRef.current} musicName={musicName} />;
}

export default Generator;
