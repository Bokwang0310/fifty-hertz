import { styled } from "@mui/material/styles";

export const LyricContainer = styled("div")(() => ({
  marginTop: "10px",
  fontFamily: "'Noto Serif KR', serif",
}));

export const Line = styled("p")(({ color }) => ({
  textAlign: "center",
  color: color,
}));

function DefaultLyric({ lyricList, textColor }) {
  return (
    <LyricContainer>
      {lyricList.map((lyric, i) => (
        <Line key={i} color={textColor}>
          {lyric}
        </Line>
      ))}
    </LyricContainer>
  );
}

export default DefaultLyric;
