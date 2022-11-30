import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

// import Image from "../assets/imgs/wrong-question.jpg";
import Player from "./Player";
import Lyric from "./Lyric";

const Container = styled(Paper)(() => ({
  display: "flex",
  // backgroundImage: `url(${Image})`,
  background: ["#7D7D7D", "linear-gradient(45deg, #7D7D7D, #CDCDCD)"],
  height: "100vh",
  backgroundSize: "cover",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // filter: "brightness(30%)",
}));

function Music() {
  return (
    <Container>
      <Player link="bi3lPMmK7Vk" />
      <Lyric />
    </Container>
  );
}

export default Music;
