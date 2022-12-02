import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Music from "./components/Music";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/:music" element={<Music />}></Route>
      </Routes>
    </>
  );
}

export default App;
