import { useNavigate, useParams } from "react-router";
import { useData } from "../../context/dataContext";
import css from "./videoPage.module.css";
import creator from "../../assets/creator.jpg";
export const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const {
    dataState: { allVideos },
  } = useData();
  const currentVideo = allVideos?.find(({ _id }) => _id === Number(videoId));
  const clickHandler = (id) => navigate(`/video/${id}`);
  console.log(currentVideo);
  return (
    <div className={css.container}>
      <div className={css.main}>
        <iframe
          src={currentVideo?.src}
          width="720"
          height="480"
          title={currentVideo?.title}
          className={css.player}
        ></iframe>
        <div className={css.info}>
          <div>
            {" "}
            <img src={creator} alt="creator" className={css.creatorImg} />
            <span>{currentVideo?.title}</span>
          </div>
          <div>
            <span className="material-symbols-outlined">schedule</span>
            <span className="material-symbols-outlined">playlist_add</span>
            <span className="material-symbols-outlined">
              tv_options_edit_channels
            </span>
          </div>
        </div>
        <div>
            <h2>My Notes</h2>
        </div>
      </div>
      <div className={css.suggestions}>
        <h2>More Videos:</h2>
        {allVideos?.map((video, index) => (
          <div
            key={index}
            className={css.suggestionCard}
            onClick={() => clickHandler(video?._id)}
          >
            <img src={video?.thumbnail} alt={video.title} />
            <div>
              <p>{video?.title}</p>
              <p>{video?.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
