import { createContext, useContext, useReducer } from "react";
import MainReducer, { initialState } from "./MainReducer";

const GlobalState = createContext() ;


const ContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(MainReducer , initialState)
  return (
    <GlobalState.Provider value={{
       user :state.user ,
       car: state.cart    ,
      dispatch : dispatch ,
    }}>
       {children}
    </GlobalState.Provider>
  )
}

export default ContextProvider

//create custom hook that used for sharing values to other component
 export const useAuth = () =>{
    return useContext(GlobalState) ;
}

