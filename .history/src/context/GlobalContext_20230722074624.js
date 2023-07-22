import { createContext } from "react";

const GlobalState = createContext() ;



const ContextProvider = ({children}) => {
  return (
    <GlobalState.Provider value={{
        
    }}>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider