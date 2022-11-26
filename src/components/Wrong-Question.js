import React from "react";

import Paper from "@mui/material/Paper";

import Image from "../imgs/wrong-question.jpg"; // Import using relative path

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
  },
};

function WrongQuestion() {
  return <Paper style={styles.paperContainer} />;
}

export default WrongQuestion;
