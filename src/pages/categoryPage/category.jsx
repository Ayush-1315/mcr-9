import { useEffect } from "react";
import { useParams } from "react-router";
import { useData } from "../../context/dataContext";
import { VideoCard } from "../../components/videoCard/videoCard";
import css from "./category.module.css";
export const Category=()=>{
    const {category}=useParams();
    const {dispatch,dataState}=useData();
    useEffect(()=>{
        dispatch({type:"SET_CATEGORY",payload:category})
    },[category,dispatch]);
    const {category:pageTitle,showVideos}=dataState;
    return <div className={css.container}>
        <h1>{pageTitle}</h1>
       <div className={css.videoList}> {showVideos?.map((video,index)=><VideoCard video={video} key={index}/>)}</div>
    </div>
}