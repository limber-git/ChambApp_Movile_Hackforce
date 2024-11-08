

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react"; 
import Environments from "../utils/Environments";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => { 
  const [auth, setAuth] = useState({ 
    user: null,
  });
  const handleSetAuth = (user) => {
    setAuth({ user });
  }
  const handleLogout = async() => {
    setAuth({ user: null });
  }
  const STATES_MODIFIC = { 
    auth,
    handleSetAuth,
    handleLogout,
  };
  return (
    <DataContext.Provider value={STATES_MODIFIC}>
      {children}
    </DataContext.Provider>
  );
};
