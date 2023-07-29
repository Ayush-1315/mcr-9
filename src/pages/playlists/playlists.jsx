import { useState } from "react";
import { v4 as uuid } from "uuid";
import { PlayListForm } from "../../components/createPlaylistForm/createPlayList";
import { Modal } from "../../components/modal/modal";
import css from "./playlists.module.css";
import { useData } from "../../context/dataContext";
import { useNavigate } from "react-router";
export const Playlists = () => {
  const { playlistsState, dispatchPlaylist } = useData();
  const [showForm, setShowForm] = useState(false);
  const onSubmit = (data) => {
    dispatchPlaylist({ type: "CREATE", payload: { pID: uuid(), data } });
    setShowForm(false);
  };
const removePlayList=(id)=>{
    dispatchPlaylist({type:"REMOVE",payload:id});
}
const navigate=useNavigate();
const playlistClick=(e,pID)=>{
    e.stopPropagation();
    removePlayList(pID);
}
  return (
    <div className={css.container}>
      <h1>Playlists</h1>
      <div className={css.list}>
        {playlistsState?.map((playlist) => (
          <div key={playlist?.pID} className={css.playlistCard} onClick={()=>navigate(`/playlists/${playlist?.pID}`)}>
            <p>
              <span className="material-symbols-outlined"  onClick={(e)=>playlistClick(e,playlist?.pID)}>close</span>
            </p>
            <img src={playlist?.thumbnail} alt="thumbnail" />
            <div>
                <h2>{playlist?.data?.title}</h2>
                <span>{playlist?.data?.description}</span>
            </div>
          </div>
        ))}

        <div className={css.addCard} onClick={() => setShowForm(true)}>
          <span className="material-symbols-outlined">add_circle</span>
        </div>
      </div>
      {showForm && (
        <Modal
          component={<PlayListForm onSubmit={onSubmit} />}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};
