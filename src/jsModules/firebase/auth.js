import React, { useState, useEffect } from "react";
import { firebaseConfig } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  console.log("firebase || auth.js | AuthProvider()");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
    console.log(currentUser);
  }, [currentUser]);
  if (currentUser != null) {
    console.log(
      /* currentUser.email,

      currentUser.emailVerified,
      currentUser.uid,
      currentUser.password */
      currentUser
    );
  }
  //The logged in user
  /*  let userId;
  currentUser != null ? (userId = currentUser.uid) : (userId = ""); */

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
/* export function getUserAuth(email) {
  admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
} */
