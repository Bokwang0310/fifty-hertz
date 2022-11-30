import { styled } from "@mui/material/styles";
import lyricObj from "../assets/lyrics.json";

const LyricContainer = styled("div")(() => ({
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

function Lyric() {
  const lyricList = lyricObj["wrong-question"].split("\n");

  return (
    <LyricContainer>
      {lyricList.map((lyric, i) => (
        <p key={i} style={{ textAlign: "center" }}>
          {lyric}
        </p>
      ))}
    </LyricContainer>
  );
}

export default Lyric;
