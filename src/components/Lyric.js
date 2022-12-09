import { styled } from "@mui/material/styles";

export const LyricContainer = styled("div")(() => ({
  marginTop: "10px",
  fontFamily: "'Noto Serif KR', serif",
}));

export const Line = styled("p")(({ color }) => ({
  textAlign: "center",
  color: color,
}));

function Lyric({ lyric, textColor }) {
  const lyricList = lyric.split("\n");

  return (
    <LyricContainer>
      {lyricList.map((sentence, i) => (
        <Line key={i} color={textColor}>
          {sentence}
        </Line>
      ))}
    </LyricContainer>
  );
}

export default Lyric;
