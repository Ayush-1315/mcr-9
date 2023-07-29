import { createContext, useContext, useEffect, useReducer } from "react";
import { initialData, dataReducer } from "../utils/dataReducer";
import { initialWatchLater,watchLaterReducer } from "../utils/watchLaterReducer";
import { useLocation } from "react-router";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialData);
  const [watchLaterState,dispatchWatchLater]=useReducer(watchLaterReducer,initialWatchLater);
  const currentTab=useLocation().pathname.slice(1);
  console.log(currentTab);
  useEffect(()=>{
    localStorage.removeItem("watchLater");
    localStorage.setItem("watchLater",JSON.stringify(watchLaterState));
  },[watchLaterState]);
  useEffect(()=>{
    dispatch({type:"CHANGE_TAB",payload:currentTab===""?"home":currentTab})
  },[currentTab])
  return (
    <DataContext.Provider value={{ dataState, dispatch,dispatchWatchLater,watchLaterState }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
