import { useNavigate, useParams } from "react-router";
import { v4 as uuid } from "uuid";
import { useData } from "../../context/dataContext";
import css from "./videoPage.module.css";
import creator from "../../assets/creator.jpg";
import clock from "../../assets/clock.svg";
import { Modal } from "../../components/modal/modal";
import { useState } from "react";
import { NoteForm } from "../../components/noteForm/noteForm";
export const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const {
    dataState: { allVideos },
    watchLaterState,
    dispatchWatchLater,
    dispatchNotes,
    notesState,
  } = useData();
  const [addNotes, setAddNotes] = useState(false);
  const [initialData,setInitialData]=useState(null)
  const closeNotesModal = () => setAddNotes(false);
  const currentVideo = allVideos?.find(({ _id }) => _id === Number(videoId));
  const clickHandler = (id) => navigate(`/video/${id}`);
  const isWatchLater =
    watchLaterState?.findIndex(({ _id }) => _id === currentVideo._id) !== -1;
  const toggleWatchLater = () => {
    isWatchLater
      ? dispatchWatchLater({ type: "REMOVE", payload: currentVideo._id })
      : dispatchWatchLater({ type: "ADD", payload: currentVideo });
  };
  const onSubmit = (data) => {
    if (data.trim !== "") {
      dispatchNotes({
        type: "ADD",
        payload: { _id: currentVideo?._id, notes: { nID: uuid(), note: data } },
      });
      setAddNotes(false);
    }
  };
  const onUpdate=data=>{
    if(data.trim!==""){
      dispatchNotes({
        type:"UPDATE",
        payload:{_id:currentVideo?._id,nID:initialData,note:data},
      })
      setAddNotes(false);
      setInitialData(null);
    }
  }
  const currentVideoNotes = notesState?.find(
    ({ _id }) => _id === currentVideo?._id
  );
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
            <span onClick={toggleWatchLater}>
              {isWatchLater ? (
                <span className="material-symbols-outlined">schedule</span>
              ) : (
                <img src={clock} alt="clock" className={css.watchLater} />
              )}
            </span>
            <span className="material-symbols-outlined">playlist_add</span>
            <span
              className="material-symbols-outlined"
              onClick={() => setAddNotes(true)}
            >
              tv_options_edit_channels
            </span>
          </div>
        </div>
        <div>
          <h2>My Notes</h2>
          <div>
            {currentVideoNotes?.notes?.map((note) => (
              <div className={css.note}  key={note?.nID}>
                <p>{note?.note}</p>
                <div>
                  <span className="material-symbols-outlined"onClick={()=>{setAddNotes(true);setInitialData(note?.nID)}}>edit</span>
                  <span className="material-symbols-outlined" onClick={()=>dispatchNotes({type:"DELETE",payload:{_id:currentVideo._id,nID:note?.nID}})}>delete</span>
                </div>
              </div>
            ))}
          </div>
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
      {addNotes && (
        <Modal
          onClose={() => closeNotesModal()}
          component={<NoteForm submitFun={onSubmit} initialData={initialData} onUpdate={onUpdate}/>}
        />
      )}
    </div>
  );
};
