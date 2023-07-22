import { createContext, useContext } from "react";

const GlobalState = createContext() ;


const ContextProvider = ({children}) => {
  return (
    <GlobalState.Provider value={{
       user : user ,
       cart : cart ,
      dispatch : dispatch ,
    }}>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider

//create custom hook that used for sharing values to other component
export const userAuth = () =>{
    return useContext()
}

