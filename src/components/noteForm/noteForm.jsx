import { useState } from "react";
import css from "./noteForm.module.css";
export const NoteForm=({submitFun,initialData,onUpdate})=>{
    const [note,setNote]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
       if(initialData){
        onUpdate(note);
        setNote("");
       }
       else{
        submitFun(note);
        setNote("")
       }
    }
    return<div className={css.form}>
        <form action="#" onSubmit={onSubmit}>
            <input type="text" placeholder="New Notes" onChange={e=>setNote(e.target.value)} value={note}/>
            <button>Add New Note</button>
        </form>
    </div>
}