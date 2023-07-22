import { createContext } from "react";

const GlobalState = createContext() ;



const ContextProvider = () => {
  return (
    <GlobalState.Provider>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider