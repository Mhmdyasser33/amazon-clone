import { createContext } from "react";

const GlobalState = createContext() ;



const ContextProvider = () => {
  return (
    <GlobalState.Provider>

    </GlobalState.Provider>
  )
}

export default ContextProvider