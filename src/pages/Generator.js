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

      console.log("Enter was clicked");
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

      // Bad Code: Hidden Temporal Couplings
      // lyricList를 바꾸기 전에 lrcLyricRef에 추가해야 함
      lrcLyricRef.current += `[${lrcTimeFormatOfCurrentTime}] ${lyricList[currentClickCount]}\n`;
      changeLyricLine(clickCountRef.current);
      clickCountRef.current += 1;
    },
    [isPlayerReady, lyricList, getCurrentTime, changeLyricLine]
  );

  // 문제 상황: 엔터 누를 때마다 이벤트 해제/등록이 일어남
  // 이유: handleKeyDown을 감싸는 useCallback의 deps에 lyricList가 있는데, 이는 엔터키 누를 때 업데이트 됨

  // deps에서 lyricList를 제거하면
  // Music에서 useParams로 가져오는 name이 바뀌고 곡 정보가 바뀌었을 때 대응하지 못함
  // + react-hooks/exhaustive-deps에도 위배

  // 곡아 바뀔 때 함수의 재선언은 lyricList에 의존해야 하는 것이 맞지만
  // 같은 곡에 대해서는 lyricList가 바뀌어도 재선언 되면 안됨
  // -> state를 나눠야 할 필요가 있을 듯
  // 곡을 구분하는 lyricList와 가사 프레젠테이션을 담당하는 lyricList로 나눠야겠다
  useEffect(() => {
    console.log("handleKeyDown has changed (mount or update)");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      console.log("handleKeyDown has changed (clean-up))");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return <Modal open={open} text={lrcLyricRef.current} musicName={musicName} />;
}

export default Generator;
