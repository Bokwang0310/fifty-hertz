import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Modal({ open, text, musicName }) {
  return (
    <MuiModal
      open={open}
      onClose={() => window.location.reload()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description">
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(text)}`}
            download={`${musicName}.lrc`}
          >
            다운로드
          </a>
        </Typography>
      </Box>
    </MuiModal>
  );
}

export default Modal;
