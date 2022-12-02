import { styled } from "@mui/material/styles";

const LyricContainer = styled("div", {
  shouldForwardProp: (propName) => propName !== "textColor",
})(({ textColor }) => ({
  color: textColor,
  width: "560px",
  height: "30vh",
  marginTop: "10px",
  overflow: "auto",
  fontFamily: "'Noto Serif KR', serif",
  // 스크롤바 스타일링
  "&::-webkit-scrollbar": { width: "7px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#2f3542",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "grey",
    borderRadius: "3px",
  },
}));

function Lyric({ lyric, textColor }) {
  const lyricList = lyric.split("\n");

  return (
    <LyricContainer textColor={textColor}>
      {lyricList.map((sentence, i) => (
        <p key={i} style={{ textAlign: "center" }}>
          {sentence}
        </p>
      ))}
    </LyricContainer>
  );
}

export default Lyric;
