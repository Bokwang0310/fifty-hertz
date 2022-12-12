import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Music from "./pages/Music";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/:name/*" element={<Music />} />
      </Routes>
    </>
  );
}

export default App;
