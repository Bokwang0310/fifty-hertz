import { Lrc } from "react-lrc";
import { LyricContainer } from "./Lyric.js";

function LrcLyric({ lrcLyric, textColor }) {
  return (
    <LyricContainer textColor={textColor}>
      <Lrc
        lrc={lrcLyric}
        lineRenderer={({ i, line }) => (
          <p key={i} style={{ textAlign: "center" }}>
            {line.content}
          </p>
        )}
      />
    </LyricContainer>
  );
}

export default LrcLyric;
