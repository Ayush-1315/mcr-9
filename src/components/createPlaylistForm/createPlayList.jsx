import { useState } from "react";
import css from "./createPlayList.module.css";
export const PlayListForm=({onSubmit})=>{
    const [formData,setFormData]=useState({
        title:"",
        description:""
    });
    const changeHandler=(type,value)=>{
        setFormData(prev=>({...prev,[type]:value}))
    }
    const onFormSubmit=e=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            title:"",
            description:""
        })
    }
    return <div className={css.form}>
        <form action="#" onSubmit={onFormSubmit}>
            <h2>Create Playlist</h2>
            <input type="text" placeholder="Select title for new playlist" onChange={e=>changeHandler("title",e.target.value)} value={formData.title}/>
            <input type="text" placeholder="Provide Description" onChange={e=>changeHandler("description",e.target.value)} value={formData.description}/>
            <button>Create New Playlist</button>
        </form>
    </div>
}