import React, { useState, useEffect } from "react";
import { firebaseConfig } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  console.log("firebase || auth.js | AuthProvider()");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
    console.log(currentUser);
  }, []);

  //The logged in user
  /*  let userId;
  currentUser != null ? (userId = currentUser.uid) : (userId = ""); */

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
