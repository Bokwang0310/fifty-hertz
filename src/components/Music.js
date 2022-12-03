import { useRef } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import info from "../assets/info.json";
// import Image from "../assets/imgs/wrong-question.jpg";
import Player from "./Player";
import Lyric from "./Lyric";

const Container = styled(Paper, {
  shouldForwardProp: (propName) =>
    propName !== "firstColor" && propName !== "secondColor",
})(({ firstColor, secondColor }) => ({
  display: "flex",
  // backgroundImage: `url(${Image})`,
  background: [
    firstColor,
    `linear-gradient(45deg, ${firstColor}, ${secondColor})`,
  ],
  height: "100vh",
  backgroundSize: "cover",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // filter: "brightness(30%)",
  borderRadius: "0px",
}));

const getMusic = (musicName) => (musicName ? musicName : "wrong-question");

function Music() {
  const { music } = useParams();
  const player = useRef(null);

  const getCurrentTime = player.current.getCurrentTime();

  const currentMusic = info[getMusic(music)];
  const [firstColor, secondColor] = currentMusic.themeColor;
  return (
    <Container firstColor={firstColor} secondColor={secondColor}>
      <Player link={currentMusic.link} player={player} />
      <Lyric lyric={currentMusic.lyric} textColor={currentMusic.textColor} />
    </Container>
  );
}

export default Music;
