import {Routes,Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/home/home";
import { Sidebar } from "./components/sidebar/sidebar";
import { Category } from "./pages/categoryPage/category";
import { VideoPage } from "./pages/videoPage/videoPage";
import { WatchLaterPage } from "./pages/watchLater/watchLater";
import { ExplorePage } from "./pages/explore/explore";
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
      </Routes>
    </div>
  );
}

export default App;
