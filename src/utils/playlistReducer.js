import thumbnail from "../assets/thumbnail.jpg";
export const playlists=JSON.parse(localStorage.getItem("playlists"))??[];
export const playlistReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "CREATE":return [...state,{...payload,thumbnail,videos:[]}];
        case "REMOVE":return state.filter(({pID})=>pID!==payload);
        case "ADD_TO_PLAYLIST":return state.map((playlist)=>playlist.pID===payload.pID?{...playlist,videos:[...playlist.videos,payload?.video]}:playlist);
        default:return state;
    }
}