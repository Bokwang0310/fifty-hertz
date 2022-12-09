import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Music from "./pages/Music";
import Generator from "./pages/Generator";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/generator/:musicName" element={<Generator />}></Route>
        <Route path="/music/:musicName" element={<Music />}></Route>
      </Routes>
    </>
  );
}

export default App;
