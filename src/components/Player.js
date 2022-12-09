import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player/youtube";

const PlayerContainer = styled("div")(() => ({
  marginTop: "16px",
  width: "560px",
  height: "315px",
}));

function Player({ link, setRef }) {
  const config = {
    playerVars: {
      // controls: 1,
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      fs: 0,
    },
  };

  return (
    <PlayerContainer>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${link}`}
        config={config}
        playing={true}
        width={"560px"}
        height={"315px"}
        // controls={true}
        ref={setRef}
      />
    </PlayerContainer>
  );
}

export default Player;
