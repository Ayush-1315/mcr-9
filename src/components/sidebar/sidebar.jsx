import { useNavigate } from "react-router";
import { useData } from "../../context/dataContext";
import css from "./sidebar.module.css";
export const Sidebar = () => {
    const navigate=useNavigate();
    const {dataState,dispatch}=useData();
    const clickHandler=(tab)=>{
        dispatch({type:"CHANGE_TAB",payload:tab});
        navigate(`/${tab==="home"?"":tab}`)
    }
  return (
    <div className={css.sidebar}>
      <ul>
        <li onClick={()=>clickHandler('home')} style={{color:dataState?.currentTab==="home"?"#569ECF":"#000000"}}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </li>
        <li onClick={()=>clickHandler('explore')}style={{color:dataState?.currentTab==="explore"?"#569ECF":"#000000"}}>
          <span className="material-symbols-outlined">explore</span>
          <span>Explore</span>
        </li>
        <li onClick={()=>clickHandler('playlists')}style={{color:dataState?.currentTab==="playlists"?"#569ECF":"#000000"}}>
          <span className="material-symbols-outlined">playlist_add</span>
          <span>Playlists</span>
        </li>
        <li onClick={()=>clickHandler('watch-later')}style={{color:dataState?.currentTab==="watch-later"?"#569ECF":"#000000"}}>
          <span className="material-symbols-outlined">schedule</span>
          <span>Watch Later</span>
        </li>
      </ul>
    </div>
  );
};
