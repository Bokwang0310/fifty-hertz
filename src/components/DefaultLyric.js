import { styled } from "@mui/material/styles";

export const LyricContainer = styled("div")(() => ({
  marginTop: "10px",
  fontFamily: "'Noto Serif KR', serif",
}));

export const Line = styled("p")(({ color }) => ({
  color,
  textAlign: "center",
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
