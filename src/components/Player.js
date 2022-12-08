import ReactPlayer from "react-player/youtube";

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
    <ReactPlayer
      url={`https://www.youtube.com/embed/${link}`}
      config={config}
      playing={true}
      width={"560px"}
      height={"315px"}
      // controls={true}
      ref={setRef}
    />
  );
}

export default Player;
