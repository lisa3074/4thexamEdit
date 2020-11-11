import React, { useState, useEffect } from "react";
import { firebaseConfig } from "./firebase";
import { getData } from "../dbData/getData";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  //The logged in user
  let userId;
  currentUser != null ? (userId = currentUser.uid) : (userId = "");
  getData(userId);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
