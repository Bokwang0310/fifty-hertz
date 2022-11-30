import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Image from "../assets/imgs/wrong-question.jpg";
import lyricObj from "../assets/lyrics.json";

const Container = styled(Paper)(() => ({
  display: "flex",
  backgroundImage: `url(${Image})`,
  height: "100vh",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  // justifyContent: "space-between",
  flexDirection: "column",
  // filter: "brightness(30%)",
}));

const LyricContainer = styled("div")(() => ({
  width: "560px",
  height: "30vh",
  marginTop: "10px",
  overflow: "auto",
  fontFamily: "'Noto Serif KR', serif",
  "&::-webkit-scrollbar": { width: "7px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#2f3542",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "grey",
    borderRadius: "3px",
    // boxShadow: "inset 0px 0px 5px white",
  },
}));

function WrongQuestion() {
  const lyricText = lyricObj["wrong-question"];
  const lyricList = lyricText.split("\n");

  return (
    <>
      <Container>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bi3lPMmK7Vk"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{ marginBottom: "10px" }}
        ></iframe>
        <LyricContainer>
          {lyricList.map((lyric, i) => (
            <p key={i} style={{ textAlign: "center" }}>
              {lyric}
            </p>
          ))}
        </LyricContainer>
      </Container>
    </>
  );
}

export default WrongQuestion;
