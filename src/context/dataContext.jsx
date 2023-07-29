import { createContext, useContext, useEffect, useReducer } from "react";
import { initialData, dataReducer } from "../utils/dataReducer";
import { initialWatchLater,watchLaterReducer } from "../utils/watchLaterReducer";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialData);
  const [watchLaterState,dispatchWatchLater]=useReducer(watchLaterReducer,initialWatchLater);
  useEffect(()=>{
    localStorage.removeItem("watchLater");
    localStorage.setItem("watchLater",JSON.stringify(watchLaterState));
  },[watchLaterState])
  return (
    <DataContext.Provider value={{ dataState, dispatch,dispatchWatchLater,watchLaterState }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
