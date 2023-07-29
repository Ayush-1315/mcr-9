import {Routes,Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/home/home";
import { Sidebar } from "./components/sidebar/sidebar";
import { Category } from "./pages/categoryPage/category";
import { VideoPage } from "./pages/videoPage/videoPage";
function App() {
document.title="Video Library";
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home/:category" element={<Category/>}/>
        <Route path="/video/:videoId" element={<VideoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
