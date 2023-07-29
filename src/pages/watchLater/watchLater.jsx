import { VideoCard } from "../../components/videoCard/videoCard";
import { useData } from "../../context/dataContext";
import css from "./watchLater.module.css";
export const WatchLaterPage = () => {
    const {watchLaterState}=useData();
  return (
    <div className={css.container}>
      <h1>Watch Later</h1>
      {watchLaterState.length!==0?
      <div className={css.videoList}>
      {watchLaterState?.map((video,index)=><VideoCard video={video} key={index}/>)}
    </div>:
    <h2>Nothing to show here</h2>}
    </div>
  );
};
