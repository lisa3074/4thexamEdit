import { auth } from "./firebase";
export function signup(email, password) {
  console.log("signed up");
  return auth().createUserWithEmailAndPassword(email, password);
}
export function signin(email, password) {
  console.log("signed in");
  return auth().signInWithEmailAndPassword(email, password);
}

/* import React, { useState, useEffect } from "react";
import firebaseConfig from "../firebase/";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
};

useEffect(() => {
  firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
}, []);
return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
 */
