// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import { auth } from "./components/jsModules/firebase/firebase";
import "firebase/auth";

/* needed */
import "./sass/main.scss";
import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import PrivateRoute from "./components/login/PrivateRoute";
import SignUp from "./components/login/SignUp";
import Administration from "./components/administration/Administration";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./components/jsModules/firebase/auth";
import { credentials } from "./components/jsModules/firebase/credentials";

export default function App() {
  console.log("App");

  const Credentials = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState([]);

  const submit = document.querySelector(".loginButton");
  const credentialsObject = Object.create(Credentials);
  /*   if (submit) {
    submit.addEventListener("submit", () => {
      const credentialsObject = Object.create(Credentials);
      credentialsObject.email = document.querySelector(".email").value;
      credentialsObject.password = document.querySelector(".password").value;
      credentials.push(credentialsObject);
      console.log(credentials);
    });
  } */
  if (submit) {
    document.querySelectorAll(".login input").forEach((input) => {
      input.addEventListener("keyup", () => {
        credentialsObject.email = document.querySelector(".email").value;
        credentialsObject.password = document.querySelector(".password").value;
        // credentials.push(credentialsObject);
        console.log(credentialsObject);
        submit.addEventListener("click", () => {
          setCredentials(credentialsObject);
        });
      });
    });
  }

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" credentials={credentials} component={Administration} />
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
