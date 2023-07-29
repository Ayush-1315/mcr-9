import {Routes,Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/home/home";
import { Sidebar } from "./components/sidebar/sidebar";
import { Category } from "./pages/categoryPage/category";
import { VideoPage } from "./pages/videoPage/videoPage";
import { WatchLaterPage } from "./pages/watchLater/watchLater";
import { ExplorePage } from "./pages/explore/explore";
import { Playlists } from "./pages/playlists/playlists";
import { Playlist } from "./pages/playlist/playlist";
function App() {
document.title="Video Library";
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home/:category" element={<Category/>}/>
        <Route path="/video/:videoId" element={<VideoPage/>}/>
        <Route path="/watch-later" element={<WatchLaterPage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/playlists" element={<Playlists/>}/>
        <Route path="/playlists/:pID" element={<Playlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
