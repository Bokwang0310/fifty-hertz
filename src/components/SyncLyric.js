import { useState, useEffect } from "react";
import { Lrc } from "react-lrc";
import { LyricContainer, Line } from "./DefaultLyric.js";

function SyncLyric({ lrcLyric, textColor, activeColor, getCurrentTime }) {
  const [currentMillisecond, setCurrentMillisecond] = useState(0);

  // 매 렌더링마다 타이머 설정/해지가 반복되는 건 아닌지 확인 필요 (deps arr에 함수)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentMillisecond(getCurrentTime() * 1000);
    }, 97);

    return () => {
      window.clearInterval(timer);
    };
  }, [getCurrentTime]);

  return (
    <LyricContainer>
      <Lrc
        lrc={lrcLyric}
        lineRenderer={({ line, active }) => (
          <Line color={active ? activeColor : textColor}>{line.content}</Line>
        )}
        currentMillisecond={currentMillisecond}
      />
    </LyricContainer>
  );
}

export default SyncLyric;
