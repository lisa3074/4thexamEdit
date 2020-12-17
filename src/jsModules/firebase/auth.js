import React, { useState, useEffect } from "react";
import { firebaseConfig } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // console.log("firebase || auth.js | AuthProvider()");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
