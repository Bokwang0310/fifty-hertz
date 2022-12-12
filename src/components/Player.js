import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";

const PlayerContainer = styled("div")(() => ({
  marginTop: "16px",
  width: "560px",
  height: "315px",
}));

function Player({ url, handleReady }) {
  const config = {
    youtube: {
      playerVars: {
        // controls: 1,
        autoplay: 1,
        rel: 0,
        modestbranding: 1,
        fs: 0,
      },
    },
    soundcloud: {
      options: {
        auto_play: true,
        buying: false,
        sharing: false,
        download: false,
        show_playcount: false,
        single_active: false,
        show_artwork: true,
      },
    },
  };

  return (
    <PlayerContainer>
      <ReactPlayer
        url={url}
        config={config}
        playing={true}
        width={"560px"}
        height={"315px"}
        // controls={true}
        onReady={handleReady}
      />
    </PlayerContainer>
  );
}

export default Player;
