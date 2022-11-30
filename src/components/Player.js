function Player({ link }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${link}`}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowFullScreen
      style={{ marginBottom: "10px" }}
    />
  );
}

export default Player;
