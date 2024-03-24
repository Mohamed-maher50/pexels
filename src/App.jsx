import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DiscoverPictures from "./sections/DiscoverPictures";
import DiscoverVideos from "./sections/DiscoverVideos";
import PicturesSearchPage from "./pages/PicturesSearchPage";
import VideosSearchPage from "./pages/VideosSearchPage";

function App() {
  return (
    <div className=" flex min-h-screen flex-col ">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<DiscoverPictures />} />
          <Route path="/videos" element={<DiscoverVideos />} />
        </Route>
        <Route path="/search/:query/*" element={<SearchPage />}>
          <Route path="" element={<PicturesSearchPage />} />
          <Route path="videos" element={<VideosSearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
