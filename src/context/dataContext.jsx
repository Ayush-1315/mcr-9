import { createContext, useContext, useEffect, useReducer } from "react";
import { initialData, dataReducer } from "../utils/dataReducer";
import { initialWatchLater,watchLaterReducer } from "../utils/watchLaterReducer";
import { useLocation } from "react-router";
import { notesData, notesReducer } from "../utils/notesReducer";
import { playlistReducer, playlists } from "../utils/playlistReducer";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialData);
  const [watchLaterState,dispatchWatchLater]=useReducer(watchLaterReducer,initialWatchLater);
  const [playlistsState,dispatchPlaylist]=useReducer(playlistReducer,playlists);
  const [notesState,dispatchNotes]=useReducer(notesReducer,notesData)
  const currentTab=useLocation().pathname.slice(1);

  useEffect(()=>{
    localStorage.removeItem("watchLater");
    localStorage.setItem("watchLater",JSON.stringify(watchLaterState));
  },[watchLaterState]);
  useEffect(()=>{
    dispatch({type:"CHANGE_TAB",payload:currentTab===""?"home":currentTab})
  },[currentTab]);
  useEffect(()=>{
    localStorage.removeItem("notes");
    localStorage.setItem("notes",JSON.stringify(notesState));
  },[notesState]);
  useEffect(()=>{
    localStorage.removeItem("playlists");
    localStorage.setItem("playlists",JSON.stringify(playlistsState));
  },[playlistsState]);
  return (
    <DataContext.Provider value={{ dataState, dispatch,dispatchWatchLater,watchLaterState,notesState,dispatchNotes,playlistsState,dispatchPlaylist }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
