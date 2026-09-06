import { createContext,useContext } from "react";



export const  WatchListContext = createContext({
      list : null,
      addList : () =>{},
      deletList : () =>{}
}
)
export const WatchListContext_Provider = WatchListContext.Provider;

export const uselist = () =>{
    return useContext(WatchListContext);
}
