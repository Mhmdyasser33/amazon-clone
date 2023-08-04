import { createContext, useContext, useReducer } from "react";
import MainReducer, { initialState } from "./MainReducer";

// Create a context for the global state
const GlobalState = createContext();

// ContextProvider component to wrap the application and provide the global state
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <GlobalState.Provider
      value={{
        user: state.user,
        basket: state.basket,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default ContextProvider;

// Custom hook to access the global state values
export const useAuth = () => {
  return useContext(GlobalState);
};