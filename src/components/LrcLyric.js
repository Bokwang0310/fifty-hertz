import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Lrc } from "react-lrc";
import { LyricContainer } from "./Lyric.js";

const Line = styled("p")(({ color }) => ({
  textAlign: "center",
  color: color,
}));

function LrcLyric({ lrcLyric, activeColor, textColor, getCurrentTime }) {
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
        lineRenderer={({ line, active }) => (
          <Line color={active ? activeColor : textColor}>{line.content}</Line>
        )}
        currentMillisecond={currentMillisecond}
      />
    </LyricContainer>
  );
}

export default LrcLyric;
