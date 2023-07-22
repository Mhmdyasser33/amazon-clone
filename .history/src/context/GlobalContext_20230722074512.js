import { createContext } from "react";

const GlobalState = createContext() ;

import React from 'react'

const GlobalContext = () => {
  return (
    <div>GlobalContext</div>
  )
}

export default GlobalContext