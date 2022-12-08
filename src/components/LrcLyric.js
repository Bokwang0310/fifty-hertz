import { useState, useEffect } from "react";
import { Lrc } from "react-lrc";
import { LyricContainer } from "./Lyric.js";

function LrcLyric({ lrcLyric, textColor, getCurrentTime }) {
  const [currentMillisecond, setCurrentMillisecond] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentMillisecond(getCurrentTime() * 1000);
    }, 97);

    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <LyricContainer>
      <Lrc
        lrc={lrcLyric}
        lineRenderer={({ i, line, active }) => (
          <p
            key={i}
            style={{
              textAlign: "center",
              color: active ? "blue" : textColor,
            }}
          >
            {line.content}
          </p>
        )}
        currentMillisecond={currentMillisecond}
      />
    </LyricContainer>
  );
}

export default LrcLyric;
