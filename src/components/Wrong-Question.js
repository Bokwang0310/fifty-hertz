import React from "react";

import Paper from "@mui/material/Paper";

import Image from "../imgs/wrong-question.jpg"; // Import using relative path

const styles = {
  backgroundImg: {
    display: "flex",
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
    // filter: `brightness(30%)`,
  },
  yt: {},
};

function WrongQuestion() {
  return (
    <>
      {/* <Paper /> */}
      <Paper style={styles.backgroundImg}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bi3lPMmK7Vk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Paper>
    </>
  );
}

export default WrongQuestion;
