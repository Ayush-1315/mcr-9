import { useParams } from "react-router";
import { useData } from "../../context/dataContext"
import { VideoCard } from "../../components/videoCard/videoCard";

export const Playlist=()=>{
    const {playlistsState}=useData();
    const {pID}=useParams();
    const currentPlaylist=playlistsState?.find(({pID:search})=>search===pID);
    console.log(currentPlaylist)
    return <div>
        <h1>{currentPlaylist?.data?.title}</h1>
        <div>{currentPlaylist?.videos?.map((video,index)=><VideoCard key={index} video={video}/>)}</div>
    </div>
}