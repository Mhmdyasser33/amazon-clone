import { createContext, useContext, useReducer } from "react";
import MainReducer from "./MainReducer";

const GlobalState = createContext() ;


const ContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(MainReducer , ini)
  return (
    <GlobalState.Provider value={{
       user :state.user ,
       cart : state.cart    ,
      dispatch : dispatch ,
    }}>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider

//create custom hook that used for sharing values to other component
export const UseAuth = () =>{
    return useContext(GlobalState) ;
}

