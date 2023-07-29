import { useNavigate } from "react-router";
import creatorImg from "../../assets/creator.jpg";
import css from "./videoCard.module.css";

export const VideoCard = ({ thumbnail, creator, title, views, category,_id }) => {
    const navigate=useNavigate();
    const clickHandler=()=>{
        navigate(`/video/${_id}`);
    }
  return (
    <div className={css.card} onClick={()=>clickHandler()}>
      <img src={thumbnail} alt={title} />
      <div className={css.footer}>
        <img src={creatorImg} alt="creator" className={css?.creatorImg} />
        <div>
          <span className={css.title}>{title}</span>
          <span className={css.category}>{category}</span>
          <span className={css.info}>{views} views | {creator}</span>
        </div>
      </div>
    </div>
  );
};
