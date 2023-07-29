import { createContext, useContext, useReducer } from "react";
import { initialData, dataReducer } from "../utils/dataReducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialData);
  return (
    <DataContext.Provider value={{ dataState, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
