import { useEffect } from "react";
import { useData } from "../../context/dataContext";
import css from "./explore.module.css";
import { VideoCard } from "../../components/videoCard/videoCard";
export const ExplorePage = () => {
  const { dataState, dispatch } = useData();
  useEffect(() => {
    dispatch({ type: "SEARCH", payload: "" });
  }, [dispatch]);
  const changeHandler=(e)=>{
    dispatch({type:"SEARCH",payload:e.target.value})
  }
  return (
    <div className={css.container}>
      <h1>Explore</h1>
      <div>
        <input
          type="text"
          placeholder="Search video by title"
          className={css.searchBar}
          onChange={changeHandler}
        />
      </div>
      {dataState?.showVideos.length!==0?<div>
        {dataState?.showVideos.map((video,index)=><VideoCard key={index} video={video}/>)}
      </div>:<h2>Nothing matches your search</h2>}
    </div>
  );
};
