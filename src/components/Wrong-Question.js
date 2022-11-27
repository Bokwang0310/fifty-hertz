import Paper from "@mui/material/Paper";

import Image from "../assets/imgs/wrong-question.jpg";

const styles = {
  backgroundImg: {
    display: "flex",
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    // filter: "brightness(30%)",
  },
};

function WrongQuestion() {
  return (
    <>
      <Paper style={styles.backgroundImg}>
        <iframe
          style={styles.yt}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bi3lPMmK7Vk"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Paper>
    </>
  );
}

export default WrongQuestion;
