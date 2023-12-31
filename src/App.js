import {
  ChannelDetails,
  Feed,
  SearchFeed,
  Sidebar,
  VideoDetails,
} from "./pages/index";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed/:id" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:id" element={<SearchFeed />} />
        <Route path="/watch/:id" element={<VideoDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
