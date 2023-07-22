import { createContext } from "react";

const GlobalState = createContext() ;



const ContextProvider = () => {
  return (
    <div>GlobalContext</div>
  )
}

export default GlobalContext