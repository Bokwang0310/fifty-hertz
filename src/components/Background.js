import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default styled(Paper, {
  shouldForwardProp: (propName) =>
    propName !== "firstColor" && propName !== "secondColor",
})(({ firstColor, secondColor }) => ({
  display: "flex",
  background: [
    firstColor,
    `linear-gradient(45deg, ${firstColor}, ${secondColor})`,
  ],
  height: "100vh",
  backgroundSize: "cover",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
}));
