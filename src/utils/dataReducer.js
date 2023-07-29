import { videos } from "../db/videosData";

export const initialData={
    currentTab:"home",
    category:"",
    showVideos:[],
    allVideos:[...videos],
    search:""
};
export const dataReducer=(state,action)=>{

    const {type,payload}=action;
    switch(type){
        case "CHANGE_TAB":return {...state,currentTab:payload}
        case "SET_CATEGORY":return {
            ...state,
            category:payload,
            showVideos:state?.allVideos?.filter(({category})=>category.toLowerCase()===payload.toLowerCase())
        }
        default: return state;
    }
}
