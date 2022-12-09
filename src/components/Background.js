import { styled } from "@mui/material/styles";

export default styled("div", {
  shouldForwardProp: (propName) =>
    propName !== "firstColor" && propName !== "secondColor",
})(({ firstColor, secondColor }) => ({
  padding: "90px 0px",
  display: "flex",
  background: [
    firstColor,
    `linear-gradient(45deg, ${firstColor}, ${secondColor})`,
  ],
  height: "100vh",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  // 스크롤바 스타일링
  "&::-webkit-scrollbar": { width: "13px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundClip: "padding-box",
    border: "3px solid transparent",
    backgroundColor: "#2f3542",
    borderRadius: "7px",
  },
}));
