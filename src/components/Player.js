import ReactPlayer from "react-player";

function Player({ link }) {
  const config = {
    youtube: {
      playerVars: {
        autoplay: 1,
        rel: 0,
        modestbranding: 1,
        fs: 0,
      },
      embedOptions: {
        // width: "560",
        // height: "315",
      },
    },
  };

  return (
    <ReactPlayer
      url={`https://www.youtube.com/embed/${link}`}
      config={config}
    />
  );
}

export default Player;
