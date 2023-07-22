import { createContext } from "react";

const GlobalState = createContext() ;



const ContextProvider = ({children}) => {
  return (
    <GlobalState.Provider value={{
       user : user ,

    }}>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider