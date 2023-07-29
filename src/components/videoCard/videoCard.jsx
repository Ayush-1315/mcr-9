import { useNavigate } from "react-router";
import { useData } from "../../context/dataContext";
import creatorImg from "../../assets/creator.jpg";
import css from "./videoCard.module.css";
import clock from "../../assets/clock.svg";

export const VideoCard = ({ video }) => {
  const { thumbnail, creator, title, views, category, _id } = video;
  const { watchLaterState, dispatchWatchLater } = useData();
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/video/${_id}`);
  };
  const isWatchLater =
    watchLaterState?.findIndex(({ _id: searchId }) => searchId === _id) !== -1;
  const toggleWatchLater = (e) => {
    e.stopPropagation();
    isWatchLater
      ? dispatchWatchLater({ type: "REMOVE", payload: _id })
      : dispatchWatchLater({type:"ADD",payload:video});
  };
  return (
    <div className={css.card} onClick={() => clickHandler()}>
      <img src={thumbnail} alt={title} />
      <div className={css.footer}>
        <img src={creatorImg} alt="creator" className={css?.creatorImg} />
        <div>
          <span className={css.title}>{title}</span>
          <span className={css.category}>{category}</span>
          <span className={css.info}>
            {views} views | {creator}
          </span>
        </div>
      </div>
      <div className={css.watchLaterToggler} onClick={toggleWatchLater}>
        {isWatchLater ? (
          <span className="material-symbols-outlined">schedule</span>
        ) : (
          <img src={clock} className={css.clock}  alt="watch-later"/>
        )}
      </div>
    </div>
  );
};
